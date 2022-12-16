var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {
try {
    /*   Created By : Siva Harish M
    Created Date :16-12-2022
    Modified By :
    Modified Date :
 
    Reason for : 
    */
    var serviceName = 'NPSS Set Reversat status and bind value';
    var reqInstanceHelper = require($REFPATH + 'common/InstanceHelper'); ///  Response,error,info msg printing        
    var reqTranDBInstance = require($REFPATH + "instance/TranDBInstance.js"); /// postgres & oracle DB pointing        
    var reqLogInfo = require($REFPATH + 'log/trace/LogInfo'); /// Log information Detail 
    var reqAuditLog = require($REFPATH + 'log/audit/AuditLog');
    var reqDateFormatter = require($REFPATH + 'common/dateconverter/DateFormatter');
    var params = appRequest.body.PARAMS; //  Client input fromm Server
    var headers = appRequest.headers; // header details 
    var objSessionLogInfo = null; // set value is null

    var mTranConn = "";



    var objresponse = {
        'status': 'FAILURE',
        'data': {},
        'msg': ''
    }; // Response to Client
    // Assign function for loginformation and session info

    reqLogInfo.AssignLogInfoDetail(appRequest, function (objLogInfo, objSessionInformation) {
        try {
            objSessionLogInfo = objLogInfo; // Assing log information
            // Log Viewer Setup
            objSessionLogInfo.HANDLER_CODE = 'NPSS Set Reversat status and bind value';
            objSessionLogInfo.ACTION = 'ACTION';
            objSessionLogInfo.PROCESS = 'NPSS Set Reversat status and bind value';

            // Get DB Connection                                                                                                                                      
            reqTranDBInstance.GetTranDBConn(headers, true, async function (pSession) {
                mTranConn = pSession; //  assign connection     

                try {
                    var getstatus = `select param_value from core_rule_prod_params where rule_code = 'REVERSAL PL STATUS'`
                    var getparamdata = `select param_value from core_rule_prod_params where rule_code = 'REVERSAL PSPL STATUS'`
                    var getcltDtl = `select param_value from core_rule_prod_params where rule_code = 'REVERSAL DEALPL STATUS'`
                    var rulestatus
                    var process_status
                    var getfullparam                   
                    ExecuteQuery1(getstatus, function (arrResult) {
                        try {
                            if (arrResult.length) {
                                var paramValue = JSON.parse(arrResult[0].param_value)
                                rulestatus = paramValue["General"]["subgroup"][0]["status"]
                                process_status = paramValue["General"]["subgroup"][0]["process_status"]
                                ExecuteQuery1(getparamdata, function (arrdata) {
                                    try {
                                        if (arrdata.length > 0) {
                                            var paramdata = JSON.parse(arrdata[0].param_value)
                                            var formdataquery = {}
                                            var subqueryformation = ''
                                             formdataquery['status'] = paramdata["General"]["subgroup"][0]["status"] || ''
                                             formdataquery['process_status'] = paramdata["General"]["subgroup"][0]["process_status"] || ''
                                             formdataquery['processing_system'] = paramdata["General"]["subgroup"][0]["processing_system"] || ''
                                             for(let i in formdataquery){
                                                if(formdataquery[i] != ''){
                                                    subqueryformation += ` and  ${i} = '${formdataquery[i]}' `
                                                }
                                             }
                                           
                                           
                                            var getdetails = `Select amount_credited ,amt_cr_loc_cur ,charge_amount  from npss_trn_process_log where uetr = '${params.uetr}' ${subqueryformation}`
                                            ExecuteQuery1(getdetails, function (arrparamdata) {
                                                if (arrparamdata.length > 0) {
                                                    var amount_credited = arrparamdata[0].amount_credited
                                                    var amt_cr_loc_cur = arrparamdata[0].amt_cr_loc_cur
                                                    var charge_amount = arrparamdata[0].charge_amount
                                                    if (params.serviceName == 's_rct_reversal_non_aed' && params.roleId == '708') {
                                                        ExecuteQuery1(getcltDtl, function (arrfulldata) {
                                                            if (arrfulldata.length > 0) {
                                                                var dataform = {}
                                                                var formsub = ''
                                                                var param = JSON.parse(arrfulldata[0].param_value)
                                                                dataform['status'] = paramValue["General"]["subgroup"][0]["status"]
                                                                dataform['process_status'] = paramValue["General"]["subgroup"][0]["process_status"]
                                                                for(let i in dataform){
                                                                    if(dataform[i] != ''){
                                                                        formsub += ` and  ${i} = '${dataform[i]}' `
                                                                    }
                                                                 }
                                                                var getparamfullDeyails = `select exchange_rate ,contra_amount ,sell_currency ,buy_currency ,dealt_amount  from npss_trn_process_log  where uetr = '${params.uetr}' ${formsub}`
                                                                ExecuteQuery1(getparamfullDeyails, function (arrgetparamfullDtls) {
                                                                    if (arrgetparamfullDtls.length > 0) {
                                                                        objresponse.status = 'SUCCESS'
                                                                        objresponse.data.status = rulestatus
                                                                        objresponse.data.process_status = process_status
                                                                        objresponse.data.amount_credited = amount_credited
                                                                        objresponse.data.amt_cr_loc_cur = amt_cr_loc_cur
                                                                        objresponse.data.charge_amount = charge_amount
                                                                        objresponse.data.exchange_rate = arrgetparamfullDtls[0].exchange_rate
                                                                        objresponse.data.contra_amount = arrgetparamfullDtls[0].contra_amount
                                                                        objresponse.data.sell_currency = arrgetparamfullDtls[0].sell_currency
                                                                        objresponse.data.buy_currency = arrgetparamfullDtls[0].buy_currency
                                                                        objresponse.data.dealt_amount = arrgetparamfullDtls[0].dealt_amount
                                                                        sendResponse(null, objresponse)
                                                                    } else {
                                                                        objresponse.status = 'FAILURE'
                                                                        objresponse.data.msg = 'No exchange_rate ,contra_amount etc found in npss_trn_process_log'
                                                                        sendResponse(null, objresponse)
                                                                    }
                                                                })
                                                            } else {
                                                                objresponse.status = 'FAILURE'
                                                                objresponse.data.msg = 'No data found in npss_trn_process_log'
                                                                sendResponse(null, objresponse)
                                                            }

                                                        })

                                                    } else {
                                                        objresponse.status = 'SUCCESS'
                                                        objresponse.data.status = rulestatus
                                                        objresponse.data.process_status = process_status
                                                        objresponse.data.amount_credited = amount_credited
                                                        objresponse.data.amt_cr_loc_cur = amt_cr_loc_cur
                                                        objresponse.data.charge_amount = charge_amount
                                                        sendResponse(null, objresponse)
                                                    }
                                                } else {
                                                    objresponse.status = 'FAILURE'
                                                    objresponse.data.msg = 'No data found in npss_trn_process_log'
                                                    sendResponse(null, objresponse)
                                                }


                                            })

                                        } else {

                                            objresponse.status = 'FAILURE'
                                            objresponse.data.msg = 'No rule found in REVERSAL PSPL STATUS'
                                            sendResponse(null, objresponse)
                                        }



                                    } catch (error) {
                                        reqInstanceHelper.PrintInfo(serviceName, 'Exception occured ' + error, objLogInfo);
                                        reqInstanceHelper.SendResponse(serviceName, appResponse, '', objLogInfo, 'ERR-002', 'Exception occured  ', error, 'FAILURE');
                                    }
                                })

                            } else {
                                objresponse.status = 'FAILURE'
                                objresponse.data.msg = 'No rule found in REVERSAL PL STATUS'
                                sendResponse(null, objresponse)
                            }
                        } catch (error) {
                            reqInstanceHelper.PrintInfo(serviceName, 'Exception occured ' + error, objLogInfo);
                            reqInstanceHelper.SendResponse(serviceName, appResponse, '', objLogInfo, 'ERR-002', 'Exception occured  ', error, 'FAILURE');
                        }

                    })






                    //Execute Query Function
                    function ExecuteQuery1(query, callback) {
                        reqTranDBInstance.ExecuteSQLQuery(mTranConn, query, objSessionLogInfo, function (result, error) {
                            try {
                                if (error) {
                                    sendResponse(error, null);
                                } else {
                                    if (result.rows.length > 0) {
                                        callback(result.rows);
                                    } else {
                                        callback([]);
                                    }
                                }
                            } catch (error) {
                                sendResponse(error, null);
                            }
                        });
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
                } catch (error) {
                    sendResponse(error, null);
                }

            })
        } catch (error) {
            sendResponse(error, null);
        }
    })





}
catch (error) {
    sendResponse(error, null);
}




});

module.exports = app;
