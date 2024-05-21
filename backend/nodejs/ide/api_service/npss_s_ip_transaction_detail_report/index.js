var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {








    /*  Created By :   Daseen
    Created Date : 21/05/2024
     
    */
    var serviceName = 'NPSS AMB Inward csv';
    var reqInstanceHelper = require($REFPATH + 'common/InstanceHelper'); ///  Response,error,info msg printing        
    var reqTranDBInstance = require($REFPATH + "instance/TranDBInstance.js"); /// postgres & oracle DB pointing        
    var reqLogInfo = require($REFPATH + 'log/trace/LogInfo'); /// Log information Detail 
    var reqAuditLog = require($REFPATH + 'log/audit/AuditLog');
    var reqDateFormatter = require($REFPATH + 'common/dateconverter/DateFormatter');
    var params = appRequest.body.PARAMS; //  Client input fromm Server
    var headers = appRequest.headers; // header details 
    var objSessionLogInfo = null; // set value is null
    var reqAsync = require('async');
    const fs = require('fs');
    var Client = require('ssh2-sftp-client');
    var mTranConn = "";
    var moment = require('moment');
    const { createObjectCsvStringifier } = require('csv-writer');
    const { Writable } = require('stream');
    var objresponse = {
      'status': 'FAILURE',
      'data': '',
      'msg': ''
    }; // Response to Client
    
    // Assign function for loginformation and session info
    reqLogInfo.AssignLogInfoDetail(appRequest, function (objLogInfo, objSessionInformation) {
      try {
        objSessionLogInfo = objLogInfo; // Assing log information
        // Log Viewer Setup
        objSessionLogInfo.HANDLER_CODE = 'NPSS AMB Inward csv';
        objSessionLogInfo.ACTION = 'ACTION';
        objSessionLogInfo.PROCESS = 'NPSS AMB Inward csv';
        reqInstanceHelper.PrintInfo(serviceName, "........................ api request body..............." + JSON.stringify(params), objSessionLogInfo);
        //reqInstanceHelper.PrintInfo(serviceName, "........................ api request headers..............."+JSON.stringify(headers), objSessionLogInfo);
        // Get DB Connection 
        reqTranDBInstance.GetTranDBConn(headers, false, function (pSession) {
          mTranConn = pSession; //  assign connection     
    
    
          try {
    
            var TakeData = `select
                      distinct UETR,
                      process_status ,
                      status ,
                      created_date ,
                      value_date ,
                      department_code ,
                      intrbk_sttlm_amnt ,
                      ext_purpose_code,
                      payment_endtoend_id ,
                      dbtr_iban ,
                      FN_CARD_DECRYPT_AND_MASK_RPT(CR_ACCT_IDENTIFICATION) as CR_ACCT_IDENTIFICATION,
                      FN_CARD_DECRYPT_AND_MASK_RPT(DBTR_ACCT_NO) as DBTR_ACCT_NO,
                      dbtr_acct_name ,
                      cdtr_iban ,
                      clrsysref,
                      hdr_msg_id,
                      category_purpose_prty,
                      fx_resv_text1,
                      cdtr_acct_name ,
                      dr_sort_code ,
                      SOURCE_CHANNEL,
                      SENDER_BANK,
                      CB_ERRORS,
                      Core_Bank_Errors,
                      tran_ref_id,
                      SENDER_REFERENCE_NUMBER,
                      maker,
                      PROCESS_GROUP,
                      checker,
                      BATCH_PAYMENT_FLAG,
                      INWARD_FILE_NAME
                  from
                      (
                      select
                          NTPL.UETR,
                          NT.process_status ,
                          NT.status ,
                          NT.created_date ,
                          NT.value_date ,
                          NT.hdr_msg_id,
                          NT.category_purpose_prty,
                          NT.fx_resv_text1,
                          nt.department_code,
                          NT.intrbk_sttlm_amnt,
                          NT.ext_purpose_code,
                          NT.payment_endtoend_id ,
                          NT.dbtr_iban,
                          NT.dbtr_acct_name,
                          NT.cdtr_iban,
                          NT.cdtr_acct_name,
                          NT.dr_sort_code ,
                          NT.channel_id as SOURCE_CHANNEL ,
                          NT.tran_ref_id as SENDER_REFERENCE_NUMBER,
                          NT.tran_ref_id,
                          NT.channel_refno,
                          a15.PROCESS_REF_NO as clrsysref,
                          NT.process_type ,
                          NT.tenant_id ,
                          NT.PROCESS_GROUP,
                          NT.maker,
                          NT.checker,
                          
    
    NT.cr_acct_identification,
                       NT.dbtr_acct_no,
                          NTPL.process_name ,
                          NT.INWARD_FILE_NAME,
                          plcduae.CBUAERETURNCODE as CB_ERRORS,
                          plc.T24RETURNCODE as Core_Bank_Errors,
                          cmb.bank_name as SENDER_BANK,
                          cse.s_description,
                          case
                              when NT.process_group = 'BCT' then 'Y'
                              else 'N'
                          end as BATCH_PAYMENT_FLAG,
                          case
                              when ntpl.process_name = 'Inward Credit Posting'
                              and ntpl.status = 'IP_RCT_POSTING_SUCCESS'
                              and ntpl.process_type = 'IP' then ntpl.PROCESS_REF_NO
                              else 'Others'
                          end as T24_FT_REFERENCE_NUMBER
                      from
                          <TRAN_DB>.npss_transactions nt
                      inner join <TRAN_DB>.NPSS_TRN_PROCESS_LOG NTPL on
                          NT.UETR = NTPL.uetr
                      left join (
                          select
                              plr.npsstpl_id,
                              plr.uetr,
                              plr.CBUAE_RETURN_CODE,
                              plr.CBUAERETURNCODE,
                              plr.row_num
                          from
                              (
                              select
                                  a.npsstpl_id,
                                  a.uetr,
                                  a.CBUAE_RETURN_CODE,
                                  CONCAT (a.CBUAE_RETURN_CODE,
                                  '-',
                                  cnec.error_description) as CBUAERETURNCODE,
                                  row_number() over( partition by a.uetr
                              order by
                                  a.npsstpl_id desc) as row_num
                              from
                                  <TRAN_DB>.npss_trn_process_log a
                              left join core_nc_error_codes cnec on
                                  a.CBUAE_RETURN_CODE = cnec.error_code
                                  and cnec.processing_system = 'CBUAE'
                              where
                                  A.CBUAE_RETURN_CODE is not null
                                  and A.status in ('IP_RCT_POSTING_FAILURE', 'IP_RCT_RR_POSTING_FAILURE')
                                      and A.process_name in ('Inward Credit Posting', 'IR Return Reversal Posting') ) plr
                          where
                              plr.row_num = 1) plcduae on
                          plcduae.uetr = nt.uetr
                      left join (
                          select
                              pl.npsstpl_id,
                              pl.uetr,
                              pl.T24_RETURN_CODE,
                              pl.T24RETURNCODE,
                              pl.row_num
                          from
                              (
                              select
                                  a1.npsstpl_id,
                                  a1.uetr,
                                  a1.T24_RETURN_CODE,
                                  CONCAT(A1.T24_RETURN_CODE,
                                  '-',
                                  cnec.error_description ) as T24RETURNCODE,
                                  row_number() over (partition by uetr
                              order by
                                  a1.npsstpl_id desc) as row_num
                              from
                                  <TRAN_DB>.npss_trn_process_log a1
                              left join core_nc_error_codes cnec on
                                  cnec.error_code = A1.T24_RETURN_CODE
                              where
                                  A1.T24_RETURN_CODE is not null
                                  and A1.status in ('IP_RCT_POSTING_FAILURE', 'IP_RCT_RR_POSTING_FAILURE')
                                      and A1.process_name in ('Inward Credit Posting', 'IR Return Reversal Posting')) pl
                          where
                              pl.row_num = 1) plc on
                          plc.uetr = nt.uetr
                      left join core_member_banks cmb on
                          cmb.bic_code = nt.dr_sort_code
                          and cmb.NEED_SYNC = 'Y'
                      left join (
                          select
                              A15.npsstpl_id,
                              A15.uetr,
                              A15.PROCESS_REF_NO
                          from
                              (
                              select
                                  A5.npsstpl_id,
                                  A5.uetr,
                                  A5.PROCESS_REF_NO
                              from
                                  (
                                  select
                                      npsstpl_id,
                                      uetr,
                                      PROCESS_REF_NO,
                                      ROW_NUM
                                  from
                                      (
                                      select
                                          npsstpl_id,
                                          uetr,
                                          PROCESS_REF_NO,
                                          row_number() over (partition by uetr
                                      order by
                                          npsstpl_id desc) as row_num
                                      from
                                          <TRAN_DB>.npss_trn_process_log A05
                                      where
                                          A05.process_name = 'Receive Pacs002'
                                          and A05.process_type = 'IP' ) F
                                  where
                                      F.row_num = 1 ) A5
                              order by
                                  A5.npsstpl_id desc ) A15 ) a15 on
                          a15.uetr = nt.uetr
                      inner join CORE_SYSTEM_EXTN CSE on
                          CSE.department_code = nt.DEPARTMENT_CODE) V
                  where
                      process_type = 'IP' and Date(created_date)=CURRENT_DATE `
            ExecuteQuery1(TakeData, async function (insarr) {
              if (insarr.length > 0) {
                let Header = await findHeader(insarr)
                let csvContent = await getCSVStream(insarr, Header)
                await FTPconnection(csvContent, function (result) {
    
                  if (result == 'SUCCESS') {
                    objresponse.status = 'SUCCESS'
                    sendResponse(null, objresponse)
                  } else {
                    objresponse.status = 'FAILURE'
                    sendResponse(null, objresponse)
                  }
                })
              } else {
                reqInstanceHelper.PrintInfo(serviceName, "........................ NO Data FOUND infor Inward Tran...............", objSessionLogInfo);
                console.log("........................ NO Data FOUND for Inward Tran...............")
                objresponse.status = 'FAILURE'
                sendResponse(null, objresponse)
              }
            })
            async function findHeader(arr) {
              return new Promise((resolve, reject) => {
                let b = Object.keys(arr[0])
                let hdr = [];
                b.forEach((x) => {
                  let obj = {
                    'id': x,
                    'title': x
                  }
                  hdr.push(obj)
                })
                resolve(hdr)
              })
            }
            async function getCSVStream(arr, header) {
              return new Promise((resolve, reject) => {
                try {
    
    
                  const csvStringifier = createObjectCsvStringifier({
                    header: header
                  });
                  // Create a writable stream to capture CSV content in memory
                  const writableStream = new Writable();
                  let csvContent = '';
    
                  writableStream._write = (chunk, encoding, next) => {
                    csvContent += chunk.toString();
                    next();
                  };
    
                  // Write header
                  csvContent += csvStringifier.getHeaderString();
    
                  // Write records
                  csvContent += csvStringifier.stringifyRecords(arr);
    
                  // Output CSV content
                  resolve(csvContent);
                } catch (err) {
                  reqInstanceHelper.PrintInfo(serviceName, "........................Error in csv content preparation..............." + err, objSessionLogInfo);
                  reqInstanceHelper.SendResponse(serviceName, appResponse, null, objSessionLogInfo, 'IDE_SERVICE_10002', 'ERROR IN CSV FILE Creation ', error);
    
                }
    
              })
            }
    
            async function FTPconnection(csvContent, callbackapi) {
              try {
                var ip = params.sftp_ip;
                var port = params.sftp_port;
                var username = params.sftp_username;
                var filepath = params.sftp_path.trim() + params.sftp_filename + moment().format('DDMMYYYY_HHMMSS') + '.csv'
                //  var filename = filepassword[0].sftp_filename.trim();
                var file_content = csvContent
                console.log('............................', filepath)
    
                var connectObj = {
                  "host": ip,
                  "port": port,
                  "user": username,
                  "passphrase": params.sftp_passphrase
                }
    
    
                connectObj.password = params.sftp_password;
    
                var privateKeyFormation;
                //without pem file password in Welcome100 ,with pem file password in Welcome@100 for 210
    
               // privateKeyFormation = await fs.readFileSync(`D:\\N16 backend pack\\torus-services\\api\\transaction\\routes\\sftp_with_pass.pem`, { encoding: 'utf8', flag: 'r' }); //UNCMMENT WHENEVER RUNNING THE CODE IN LOCAL 
    
                 privateKeyFormation = await fs.readFileSync(process.env.SFTP_PATH, { encoding: 'utf8', flag: 'r' });
                connectObj.privateKey = Buffer.from(privateKeyFormation);
                var filename = appRequest.body.sftp_filename + moment().format('DDMMYYYY_HHMMSS')
                //tempfilenamearr = filename.split(',')
                let sftp = new Client();
                sftp.connect(connectObj).then(function (serverMessage) {
                  sftp.put(Buffer.from(file_content), `${filepath}`).then(res => {
                    //   sftp.put(Buffer.from(file_content), `${filepath}`).then(res => {
                    reqInstanceHelper.PrintInfo(serviceName, "........................given file written...............", objSessionLogInfo);
                    callbackapi('SUCCESS')
    
                    //* /   nextobjctfunc(); */
                  }).catch(err => {
                    console.log(err, 'Error in file upload for the file ' + filename);
    
                  });
    
    
                });
              } catch (error) {
                reqInstanceHelper.SendResponse(serviceName, appResponse, null, objSessionLogInfo, 'IDE_SERVICE_10002', 'ERROR IN FILE UPLOAD ', error);
              }
    
            }


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


            function _BulkInsertProcessItem(insertarr, strTrnTableName, callbackInsert) {
              try {
                reqTranDBInstance.InsertBulkTranDB(mTranConn, strTrnTableName, insertarr, objSessionLogInfo, 300, function callbackInsertBulk(result, error) {
                  try {
                    if (error) {
                      reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, 'IDE_SERVICE_10049', 'ERROR IN BULK INSERT FUNCTION', error);
                      sendResponse(error)
                    } else {
                      if (result.length > 0) {
                        callbackInsert(result);
                      } else {
                        callbackInsert([]);
                      }
                    }
                  } catch (error) {
                    reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, 'IDE_SERVICE_10048', 'ERROR IN BULK INSERT FUNCTION', error);
                    sendResponse(error)
                  }
                });
              } catch (error) {
                reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, 'IDE_SERVICE_10047', 'ERROR IN BULK INSERT FUNCTION', error);
                sendResponse(error)
              }
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
    
    
          //Send Response Function Definition
          function sendResponse(error, response) {
            try {
              if (error) {
                reqTranDBInstance.Commit(mTranConn, false, function callbackres(res) {
                  reqInstanceHelper.SendResponse(serviceName, appResponse, null, objSessionLogInfo, 'IDE_SERVICE_10005', '', error);
                });
              } else {
                reqTranDBInstance.Commit(mTranConn, true, function callbackres(res) {
                  reqInstanceHelper.SendResponse(serviceName, appResponse, response, objSessionLogInfo)
                });
              }
            } catch (error) {
              reqInstanceHelper.SendResponse(serviceName, appResponse, null, objSessionLogInfo, 'IDE_SERVICE_10004', 'ERROR IN SEND RESPONSE FUNCTION : ', error);
            }
          }
    
        })
      } catch (error) {
        reqInstanceHelper.SendResponse(serviceName, appResponse, null, objSessionLogInfo, 'IDE_SERVICE_10002', 'ERROR IN ASSIGN LOG INFO FUNCTION', error);
      }
    })
    
    
    
    });

module.exports = app;
