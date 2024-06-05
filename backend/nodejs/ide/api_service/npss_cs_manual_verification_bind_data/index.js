var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function (appRequest, appResponse, next) { /*  Created By :    Siva Harish
Created Date :16/05/2023
  Modified By : Siva Harish
Modified Date : 24/05/2023
Reason for : Changes done as  
Reason for : Changes done cust spl rate 29/05/2023
Reason for : Changes done cc and pc 22/06/2023
Reason for : Uetr taken from params 22/06/2023 by daseen
Reason for : for fabelp process -- iban checking new logic last three digits includes in param_detail dated 10-04-2024 by renga
Reason for : for fabelp process -- Removed prepaid condition in else case on 5/6/2024
*
*/
  var serviceName = ' NPSS (CS) Manual Verification Bind Data'; //service name
  var reqInstanceHelper = require($REFPATH + 'common/InstanceHelper'); ///  Response,error,info msg printing        
  var reqTranDBInstance = require($REFPATH + "instance/TranDBInstance.js"); /// postgres & oracle DB pointing        
  var reqLogInfo = require($REFPATH + 'log/trace/LogInfo'); /// Log information Detail
  var reqAuditLog = require($REFPATH + 'log/audit/AuditLog'); //audit log information
  var reqFXDBInstance = require($REFPATH + 'instance/DBInstance'); // casandra db pointing
  var reqInsHelper = require($REFPATH + 'common/InstanceHelper'); //  Response,error,info msg printing        
  var reqDateFormatter = require($REFPATH + 'common/dateconverter/DateFormatter'); //date formatter
  var params = appRequest.body.PARAMS; //  Client input fromm Server
  console.log("app headers=====================>", appRequest.headers);
  var headers = appRequest.headers; // header details
  // headers["session-id"] = "STATIC-SESSION-KEEQB-4";
  console.log("headers after adding session id ========>", headers);

  var objSessionLogInfo = null; // set value is null
  var mTranConn = "";
  var request = require('request');
  var momentTimezone = require("moment-timezone");
  const { resolve } = require('path');
  const { reject } = require('lodash');
  var success_status, success_process_status;
  var elgobj = {};
  var arrTranId
  //console.log('**************************' + headers['session-id'])
  var objresponse = {
    'status': 'FAILURE',
    'data': '',
    'errocode': '',
    'msg': ''
  }; // Response to Client
  // Assign function for loginformation and session info
  reqLogInfo.AssignLogInfoDetail(appRequest, function (objLogInfo, objSessionInformation) {
    try {
      objSessionLogInfo = objLogInfo; // Assing log information
      // Log Viewer Setup
      objSessionLogInfo.HANDLER_CODE = ' NPSS (CS) Manual Verification Bind Data';
      objSessionLogInfo.ACTION = 'ACTION';
      objSessionLogInfo.PROCESS = ' NPSS (CS) Manual Verification Bind Data';
      // Get DB Connection
      reqTranDBInstance.GetTranDBConn(headers, false, function (pSession) {
        mTranConn = pSession; //  assign connection
        reqAuditLog.GetProcessToken(pSession, objLogInfo, async function prct(error, prct_id) {
          var PRCT_ID = prct_id
          //get prct id                              
          try {
            let getibanParamsQry = `select * from core_nc_system_setup where param_category='ELPASO_PREPAID_CARD' and param_code='BRANCH_CODES'`
            let getibanParams = await getIbanDetails(getibanParamsQry)
            let chckcreditorprepaid = await chkprecred(params.TranId, getibanParams)

            if (chckcreditorprepaid == 'IBAN') {
              let CurrencyStatus = await FindCurrency(params.TranId)
              if (CurrencyStatus.status == 'SUCCESS') {
                /* let TakeIpuetr = `select additional_info from npss_trn_process_log where uetr = '${params.uetr}' and process_name = 'Initiate Dispute Tran'`;
                ExecuteQuery1(TakeIpuetr, function (ipuetr) {
                    if (ipuetr.length) { */
                let Takedata = `select buy_currency,sell_currency,dealt_amount,contra_amount,exchange_rate,gm_margin from npss_trn_process_log where status = 'OP_RCT_REV_DEAL_RECEIVED' and process_name = 'Get Deal' and uetr = '${params.uetr}'`
                ExecuteQuery1(Takedata, function (trnplgdata) {
                  if (trnplgdata.length > 0) {
                    objresponse.errocode = 'Nonspl'
                    objresponse.status = 'SUCCESS'
                    objresponse.data = trnplgdata
                    sendResponse(null, objresponse)

                  } else {
                    let TakecustRate = `select buy_rate,buy_margin from core_nc_cust_spl_rate where cif_number = '${CurrencyStatus.customer_id}' and currency_code = '${CurrencyStatus.currency}'`
                    ExecuteQuery1(TakecustRate, function (arrsplrate) {
                      if (arrsplrate.length > 0) {
                        objresponse.errocode = 'spl'
                        objresponse.status = 'SUCCESS'
                        objresponse.data = arrsplrate
                        sendResponse(null, objresponse)
                      } else {
                        objresponse.status = 'No data found against IP uetr'
                        sendResponse(null, objresponse)
                      }

                    })
                  }

                })


                /*  } else {
                     objresponse.status = 'IP Uetr not found'
                     sendResponse(null, objresponse)
                 }
             }) */
              } else {
                objresponse.status = 'SUCCESS'
                objresponse.data = []
                sendResponse(null, objresponse)
              }
            } else {
              objresponse.errocode = chckcreditorprepaid
              objresponse.status = 'SUCCESS'
              objresponse.data = ''
              sendResponse(null, objresponse)
            }

            // for fabelp process iban checking dated 10-04-2024
            function getIbanDetails(getibanParamsQry) {
              return new Promise((resolve, reject) => {
                ExecuteQuery1(getibanParamsQry, (arresult) => {
                  // reqInstanceHelper.PrintInfo('iban param details:' + arresult[0].param_detail)
                  const res = arresult.map((ele) =>
                    ele.param_detail
                  )
                  reqInstanceHelper.PrintInfo('iban param details:' + res)
                  resolve(res)
                })

              })
            }




            function FindCurrency(TranId) {
              return new Promise((resolve, reject) => {
                let TkdbtrIban = `select dbtr_iban from npss_transactions where npsst_id = '${TranId}'`
                ExecuteQuery1(TkdbtrIban, function (dbtrIban) {
                  if (dbtrIban.length > 0) {
                    let chkcur = `select currency,customer_id from core_nc_cbs_accounts where alternate_account_id = '${dbtrIban[0].dbtr_iban}'`
                    ExecuteQuery1(chkcur, function (ibncurrency) {
                      if (ibncurrency.length > 0) {
                        response = {}
                        if (ibncurrency[0].currency != 'AED') {
                          response.status = 'SUCCESS'
                          response.currency = ibncurrency[0].currency || ''
                          response.customer_id = ibncurrency[0].customer_id || ''
                          resolve(response)
                        } else {
                          response.status = 'FAILURE'
                          resolve(response)
                        }

                      } else {
                        objresponse.status = 'Currency Not Found in cbs accounts table'
                        sendResponse(null, objresponse)
                      }
                    })

                  } else {
                    objresponse.status = 'DBTR Iban Not Found'
                    sendResponse(null, objresponse)
                  }

                })
              })

            }

            function chkprecred(TranId, ibanParams) {
              return new Promise((resolve, reject) => {
                let TkTrndata = `select * from npss_transactions where npsst_id = '${TranId}'`
                ExecuteQuery1(TkTrndata, function (arrTrandata) {
                  if (arrTrandata.length > 0) {
                    if ((arrTrandata[0].cr_acct_identification != '' && arrTrandata[0].cr_acct_identification != null) && arrTrandata[0].cr_acct_id_code == 'AIIN') {
                      resolve('Prepaid or Credit')
                    } else if ((arrTrandata[0].cr_acct_identification == '' || arrTrandata[0].cr_acct_identification == null || arrTrandata[0].cr_acct_identification == undefined) && (arrTrandata[0].cr_acct_id_code != 'AIIN')) {
                      let fromIban = arrTrandata[0].dbtr_iban.slice(-5)
                      let isrectibi = fromIban.substring(0, 3)

                      if (ibanParams.includes(isrectibi)) {
                        resolve('Ratibi')
                      } else {
                        resolve('IBAN')
                      }
                    }
                    else {

                      resolve('IBAN')
                    }

                  } else {
                    objresponse.status = 'Data Not Found'
                    sendResponse(null, objresponse)
                  }

                })
              })
            }
            //Execute Query for common
            function ExecuteQuery(query, callback) {
              reqTranDBInstance.ExecuteSQLQuery(mTranConn, query, objSessionLogInfo, function (result, error) {
                try {
                  if (error) {
                    sendResponse(error)
                  } else {
                    callback("SUCCESS");

                  }
                } catch (error) {
                  sendResponse(error)
                }
              });
            }

            //fucntion to execute select query
            function ExecuteQuery1(query, callback) {
              reqTranDBInstance.ExecuteSQLQuery(mTranConn, query, objSessionLogInfo, function (result, error) {
                try {
                  if (error) {
                    //reqInstanceHelper.SendResponse(serviceName, appResponse, null, objSessionLogInfo, "IDE_SERVICE_10005", "ERROR IN EXECUTE QUERY EXECUTION FUNCTION", error);
                    sendResponse(error);
                  } else {
                    if (result.rows.length > 0) {
                      callback(result.rows);
                    } else {
                      callback([]);
                    }
                  }
                } catch (error) {
                  //reqInstanceHelper.SendResponse(serviceName, appResponse, null, objSessionLogInfo, "IDE_SERVICE_10004", "ERROR IN EXECUTE QUERY FUNCTION", error);
                  sendResponse(error);
                }
              });
            }


          } catch (error) {
            reqInstanceHelper.SendResponse(serviceName, appResponse, null, objSessionLogInfo, 'IDE_SERVICE_10003', 'ERROR IN DB CONNECTION FUNCTION', error);
          }
        })
        //send response fucntion
        function sendResponse(error, response) {
          try {
            if (error) {

              reqInstanceHelper.SendResponse(serviceName, appResponse, null, objSessionLogInfo, 'IDE_SERVICE_10005', '', error);

            } else {

              reqInstanceHelper.SendResponse(serviceName, appResponse, response, objSessionLogInfo)

            }
          } catch (error) {
            reqInstanceHelper.SendResponse(serviceName, appResponse, null, objSessionLogInfo, 'IDE_SERVICE_10004', 'ERROR IN SEND RESPONSE FUNCTION : ', error);
          }
        }

      });
    } catch (error) {
      reqInstanceHelper.SendResponse(serviceName, appResponse, null, objSessionLogInfo, 'IDE_SERVICE_10002', 'ERROR IN ASSIGN LOG INFO FUNCTION', error);
    }

  })




});

module.exports = app;
