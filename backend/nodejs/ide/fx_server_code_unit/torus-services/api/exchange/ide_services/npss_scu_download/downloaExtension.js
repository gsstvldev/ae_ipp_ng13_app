var $MODULEPATH = '../../../../../node_modules/';
var express = require($MODULEPATH + 'express');
var Path = require($MODULEPATH + 'path');
var $REFPATH = Path.join(__dirname, '../../../../../torus-references/');
var app = express.Router();

function downloaExtension(params, callback) {




try {
    /*  
        Created By : Siva Harish
        Created Date : 19/10/2022
        Reason for :         
            
    */
      console.log("----------- SEND MAIL FOR DOWNLOADED FILE IDE -----");
    console.log("Success file list ===============>" + JSON.stringify(params.SUCCESS_FILE_LIST));
    console.log("Prct_id ===============>" + params.PRCT_ID);
    console.log("Session info for file list ===============>" + JSON.stringify(params.SESSION_INFO));
    var reqTranDBInstance = require($REFPATH + "instance/TranDBInstance");
    var reqInstanceHelper = require($REFPATH + 'common/InstanceHelper'); ///  Response,error,info msg printing        
    var reqLogWriter = require($REFPATH + 'log/trace/LogWriter');
    var objLogInfo = params.objLogInfo || {};
    var successfilename = params.SUCCESS_FILE_LIST;
    var failurefilename = params.FAILED_FILE_LIST;
    var mTranDB;
    var session_info = params.SESSION_INFO;
    var serviceName = "FTS (SCU) Download";
    var request = require('request');
    console.log("Session Info =>", session_info)
    var Product_Code;
    var App_Id = session_info.APP_ID;
    if (App_Id == "3") {
        Product_Code = session_info.S_CODE;
    } else {
        Product_Code = session_info.ROOT_SCODE;
    }
    console.log(Product_Code);
    mTranDB = params.TRAN_DB_INSTANCE; /// assign the DBConnection

    var strRuleCodeQuery = "select t.param_value from core_rule_prod_params t where t.Rule_Code = 'EXNG_FILE_DW' and t.product_code = '" + Product_Code + "'";
    ExecuteQuery(strRuleCodeQuery, function (arrRuleParamRes) {
        try {
            if (arrRuleParamRes.length > 0) {
                reqInstanceHelper.PrintInfo(serviceName, 'Data returned from core_rule_prod_params table', objLogInfo);
                var rule_param_val = JSON.parse(arrRuleParamRes[0].param_value);
                rule_param_val.GENERAL = rule_param_val.general || rule_param_val.GENERAL;
                var keys = Object.keys(rule_param_val.GENERAL);
                var templateName = rule_param_val.GENERAL[keys[0]][0].commn_group_code;
                var strMode = rule_param_val.GENERAL[keys[0]][0].email_sending_mode;
                sendMail(templateName, strMode, function callback(pError, strSuccessMsg) {
                    try {
                        if (pError) {
                            reqInstanceHelper.PrintInfo(serviceName, "Response from 'FTS (SCU) Download' IDE is " + pError, objLogInfo);
                            SendResponse(pError)
                        } else {
                            reqInstanceHelper.PrintInfo(serviceName, "Response from 'FTS (SCU) Download' IDE is SUCCESS", objLogInfo);
                            SendResponse("SUCCESS")
                        }
                    } catch (error) {
                        SendResponse(error)
                    }
                })
            } else {
                reqInstanceHelper.PrintInfo(serviceName, "No Data Found in 'EXNG_FILE_DW' Rule Code", objLogInfo);
                SendResponse("No Data Found in 'EXNG_FILE_DW' Rule Code");
            }
        } catch (error) {
            SendResponse(error);
        }
    });

    function sendMail(template_name, mode, callback) {
        var success_list = (successfilename != undefined) ? successfilename.toString() : "";
        var failure_list = (failurefilename != undefined) ? failurefilename.toString() : "";
        console.log("String of Success file list -", success_list);
        console.log("String of failure file list -", failure_list);
        console.log("Email Sending Mode -", mode);
        if (mode == "NONE") {
            callback(null, "SUCCESS");
        } else if (mode == "SUCCESS" && success_list == "") {
            callback(null, "SUCCESS");
        } else if (mode == "FAILURE" && failure_list == "") {
            callback(null, "SUCCESS");
        } else {
            var ipQuery = "select PLT_SETUP_VALUE from CORE_PLATFORM_SETUP where PLT_SETUP_NAME = 'TORUS_COMMN_SERVICE'";
            ExecuteQuery(ipQuery, function (arrresult) {
                if (arrresult.length > 0) {
                    reqInstanceHelper.PrintInfo(serviceName, "Data returned from CORE_PLATFORM_SETUP table", objLogInfo);
                    var apiURL = 'http://' + arrresult[0].plt_setup_value + '/Communication/SendMessage';
                    var options = {
                        url: apiURL,
                        method: 'POST',
                        json: {
                            "PARAMS": {
                                "WFTPA_ID": "DEFAULT",
                                "EVENT_CODE": "DEFAULT",
                                "USER_EMAIL": "",
                                "USER_MOBILE": "",
                                "TEMPLATECODE": template_name,
                                "STATIC_DATA": {
                                    "SUCCESS_FILES_LIST": success_list,
                                    "FAILURE_FILES_LIST": failure_list
                                },
                                "DT_CODE": "",
                                "DTT_CODE": "",
                                "PRCT_ID": params.PRCT_ID,
                                "USER_ID": session_info.USER_ID,
                                "USER_NAME": session_info.LOGIN_NAME,
                                "TENANT_ID": session_info.TENANT_ID,
                                "APP_ID": session_info.APP_ID,
                                "SESSION_ID": session_info.SESSION_ID,
                                "ROUTING_KEY": session_info.ROUTINGKEY,
                                "CLIENTIP": session_info.CLIENTIP,
                                "CLIENT_TZ": session_info.CLIENTTZ,
                                "CLIENT_TZ_OFFSET": session_info.CLIENTTZ_OFFSET,
                                "TIMEZONE_INFO": session_info.TIMEZONE_INFO
                            },
                            "PROCESS_INFO": {
                                "MODULE": "EXCHANGE",
                                "MENU_GROUP": "Exchange Process",
                                "MENU_ITEM": "File Download",
                                "PROCESS_NAME": "DEFAULT"
                            }
                        },
                        headers: {
                            'content-type': 'application/json',
                            'routingkey': session_info.ROUTINGKEY,
                            'session-id': session_info.SESSION_ID
                        }
                    };
                    console.log('------------COMMUNICATION API JSON-------' + JSON.stringify(options));
                    request(options, function (error, responseFromImagingService, res) {
                        reqInstanceHelper.PrintInfo(serviceName, "Error from communication API - " + error, objLogInfo);
                        reqInstanceHelper.PrintInfo(serviceName, "Response from communication API - " + JSON.stringify(res), objLogInfo);
                        console.log("Error from communication API - " + error);
                        console.log("Response from communication API - " + JSON.stringify(res));
                        callback(null, "SUCCESS");
                        // if (error) {
                        //     callback("Error in communication api");
                        // } else {
                        //     console.log("------API CALL ----");
                        //     console.log(res);
                        //     if (res.data == "SUCCESS") {
                        //         callback(null, "SUCCESS");
                        //     } else {
                        //         callback("Failure from communication api");
                        //     }
                        // }
                    });
                } else {
                    reqInstanceHelper.PrintInfo(serviceName, "No data available in CORE_PLATFORM_SETUP table", objLogInfo);
                    callback("No data available in CORE_PLATFORM_SETUP table");
                }
            });
        }
    }

    function SendResponse(res) {
        console.log("SendResponseIP--->" + res)
        reqLogWriter.EventUpdate(objLogInfo); //  Insert into LogViewer Table
        if (res == "SUCCESS") {
            var resObj = {
                'STATUS': 'SUCCESS',
                'SUCCESS_MESSAGE': "Email sent Successfully.",
                'SUCCESS_DATA': [],
                'PROCESS_STATUS': "SUCCESS",
                'INFO_MESSAGE': "Email sent Successfully."
            }
            return callback(resObj);
        } else {
            var resObj = {
                'STATUS': 'FAILURE',
                'SUCCESS_MESSAGE': 'STATIC',
                'SUCCESS_DATA': [],
                'ERROR_CODE': "500",
                'ERROR_MESSAGE': "Email sending failed.",
                'ERROR_OBJECT': "",
                'PROCESS_STATUS': "FAILURE",
                'INFO_MESSAGE': "Email sending failed."
            }
            return callback(resObj);
        }
    }

    function ExecuteQuery(query, callback) {
        reqTranDBInstance.ExecuteSQLQuery(mTranDB, query, objLogInfo, function (result, error) {
            try {
                if (error) {
                    SendResponse(error)
                } else {
                    if (result.rows.length > 0) {
                        callback(result.rows);
                    } else {
                        callback([]);
                    }
                }
            } catch (error) {
                SendResponse(error)
            }
        });
    }

} catch (error) {
    console.log(error, '00000000000000000000000000000000000000');
    var resObj = {
        'STATUS': 'FAILURE',
        'SUCCESS_MESSAGE': 'STATIC',
        'SUCCESS_DATA': [],
        'ERROR_CODE': "5001",
        'ERROR_MESSAGE': 'Catch error occured',
        'ERROR_OBJECT': error,
        'PROCESS_STATUS': "FAILURE",
        'INFO_MESSAGE': error
    }
    return callback(resObj);
}

}
module.exports = { downloaExtension: downloaExtension };