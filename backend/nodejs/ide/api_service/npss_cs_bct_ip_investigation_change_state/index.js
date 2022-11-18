var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {

    




try {
    /*  Created By :  Daseen
    Created Date :17/11/2022
    Modified By : 
    Modified Date : 
    Reason for : 
    */
    var serviceName = 'NPSS BCT IP Invenstigation Change State';
    var reqInstanceHelper = require($REFPATH + 'common/InstanceHelper'); ///  Response,error,info msg printing        
    var reqTranDBInstance = require($REFPATH + "instance/TranDBInstance.js"); /// postgres & oracle DB pointing        
    var reqLogInfo = require($REFPATH + 'log/trace/LogInfo'); /// Log information Detail 
    var reqAuditLog = require($REFPATH + 'log/audit/AuditLog');
    var reqDateFormatter = require($REFPATH + 'common/dateconverter/DateFormatter');
    var params = appRequest.body.PARAMS; //  Client input fromm Server
    var headers = appRequest.headers; // header details 
    var objSessionLogInfo = null; // set value is null
    var mTranConn = "";
    var addquery = "";
    var final_status,final_process_status,eligible_status,eligible_process_status,selectQry;
    var id="";

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
            objSessionLogInfo.HANDLER_CODE = 'NPSS BCT IP Invenstigation Change State';
            objSessionLogInfo.ACTION = 'ACTION';
            objSessionLogInfo.PROCESS = 'NPSS BCT IP Invenstigation Change State';
            // Get DB Connection                                                                                                                                      
            reqTranDBInstance.GetTranDBConn(headers, true, function (pSession) {
                mTranConn = pSession; //  assign connection     
                reqAuditLog.GetProcessToken(pSession, objLogInfo, function prct(error, prct_id) {
                    try {


                        var finalstatusqry = `select eligible_status,eligible_process_status, success_process_status,success_status from core_nc_workflow_setup where rule_code='${params.api_code}'`;

                        ExecuteQuery1(finalstatusqry, function (arrResult) {
                            if (arrResult.length) {
                                final_status = arrResult[0].success_status;
                             final_process_status = arrResult[0].success_process_status;
                                eligible_status = arrResult[0].eligible_status;
                                eligible_process_status = arrResult[0].eligible_process_status;
                             selectQry = `select * from npss_transactions where status='${eligible_status}' and process_status='${eligible_process_status}' `;


                                fn_MappingSearchParamQry(function callbackMappingSearchParamQry(pError, addquery) {
                                    if (pError) {
                                        sendResponse(pError)
                                    } else {
                                        var final_qry = selectQry + addquery;
                                        ExecuteQuery1(final_qry, function (arrfinalResult) {
                                            if (arrfinalResult.length > 0) {
                                                for (var i in arrfinalResult) {
                                                    id += "," + arrfinalResult[i].npsst_id;
                                                }
                                                id = id.slice(1);
                                                var updateQry = `update npss_transactions set  status='${final_status}',process_status='${final_process_status}',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}' where npsst_id='${params.Id}' `
                                                ExecuteQuery(updateQry, function (arrfinalResult) {
                                                    if (arrfinalResult == "SUCCESS") {
                                                        sendResponse(null, arrfinalResult)
                                                    }
                                                    else {
                                                        reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_CORE_001", "Data not received from service.please check the log", result);
                                                        sendResponse('Error in transaction update', result);
                                                    }
                                                })
                                            }
                                            else {
                                                console.log("No Data found in Transaction");
                                                objresponse.status = "FAILURE"
                                                sendResponse(objresponse, null)
                                            }
                                        })


                                    }
                                })
                            } else {
                                console.log("No Data found in Rule Code");
                                objresponse.status = "FAILURE"
                                sendResponse(objresponse, null)
                            }
                        })

                        //search param qry formation
                        function fn_MappingSearchParamQry(callbackMappingSearchParamQry) {
                            try {
                                var addquery = "";
                                var conditionObj = {};
                                if (params.s_cdtr_iban) {
                                    conditionObj["CDTR_IBAN"] = "CDTR_IBAN='" + params.s_cdtr_iban + "'";
                                }
                                if (params.s_uetr) {
                                    conditionObj["UETR"] = "UETR='" + params.s_uetr + "'";
                                }

                                if (params.s_paymentmethod) {
                                    if(params.s_paymentmethod!="BULK"){
                                    conditionObj["paymentmethod"] = "exhf_id IS NULL";
                                    }
                                    else{
                                        conditionObj["paymentmethod"] = "exhf_id  IS NOT NULL";
                                    }
                                }
                                if (params.s_valuedatevalue) {
                                    conditionObj["valuedate"] = reqDateFormatter.GetSearchCriteriaForBusinessColumn(headers, objSessionLogInfo, 'VALUE_DATE', params.s_valuedatevalue, params.s_valuedatetovalue, params.s_valuedateop);
                                }
                                if (params.s_tran_ref_id) {
                                    conditionObj["tran_ref_id"] = "TRAN_REF_ID ='" + params.s_tran_ref_id + "'";
                                }

                               
                                if (params.s_tranamountvalue != null && params.s_tranamountvalue != undefined && params.s_tranamountvalue != "") {
                                    if ((params.s_tranamountop == ">=") || (params.s_tranamountop == "Greater Than Or Equal")) {
                                        conditionObj["tranamount"] = "INTRBK_STTLM_AMNT >='" + params.s_tranamountvalue + "'";
                                    } else if ((params.s_tranamountop == "<=") || (params.s_tranamountop == "Less Than Or Equal")) {
                                        conditionObj["tranamount"] = "INTRBK_STTLM_AMNT <='" + params.s_tranamountvalue + "'";
                                    } else if (params.s_tranamountop == "") {
                                        conditionObj["tranamount"] = "INTRBK_STTLM_AMNT ='" + params.s_tranamountvalue + "'";
                                    }
                                    else {
                                        if (params.s_tranamounttovalue) {
                                            conditionObj["tranamount"] = "INTRBK_STTLM_AMNT >='" + params.s_tranamountvalue + "' and INTRBK_STTLM_AMNT <='" + params.s_tranamounttovalue + "'";
                                        }
                                    }
                                }
                                if (params.s_e2eref) {
                                    conditionObj["e2eref"] = "PAYMENT_ENDTOEND_ID='" + params.s_e2eref + "'";
                                }
                                if (params.s_cdtr_acct_no) {
                                    conditionObj["cdtr_acct_no"] = "CDTR_ACCT_NO ='" + params.s_cdtr_acct_no + "'";
                                }
                                if (params.s_dbtr_acct_no) {
                                    conditionObj["dbtr_acct_no"] = "DBTR_ACCT_NO ='" + params.s_dbtr_acct_no + "'";
                                }

                                if (params.s_createddatefromvalue) {
                                    conditionObj["createdate"] = reqDateFormatter.GetSearchCriteriaForBusinessColumn(headers, objSessionLogInfo, 'created_date', params.s_createddatefromvalue, params.s_createddatetovalue, params.s_createddateop);
                                }

                                
                                for (var i in conditionObj) {
                                    addquery += "and " + conditionObj[i];
                                }
                                if(addquery==''){
                                    addquery = addquery.slice(3);
                                   
                                }
                               

                                callbackMappingSearchParamQry(null, addquery);
                            } catch (error) {
                                callbackMappingSearchParamQry(error);
                            }
                        }



                       
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
