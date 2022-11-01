var $MODULEPATH = '../../../../../node_modules/';
var express = require($MODULEPATH + 'express');
var Path = require($MODULEPATH + 'path');
var $REFPATH = Path.join(__dirname, '../../../../../torus-references/');
var app = express.Router();

function writeData(params, callback) {
try {

    /*  Created By :Daseen
    Created Date :01/11/2022
    Modified By : 
    Modified Date : 
    Reason for :         

    */
    console.log("-----------CREATE FILE IDE -----");
    // console.log("-----------parse-----" + params);
    //console.log("-----------parse-----" + JSON.parse(params));
    var paramsInput = params.PROCESSED_DATA;
    var paramsProcessData = (paramsInput) ? paramsInput : [];
    //console.log("--------Process Data----" + JSON.stringify(paramsProcessData));
    var reqTranDBInstance = require($REFPATH + "instance/TranDBInstance");
    var reqDateFormatter = require($REFPATH + "common/dateconverter/DateFormatter");
    var reqInstanceHelper = require($REFPATH + "common/InstanceHelper");
    var reqLogInfo = require($REFPATH + 'log/trace/LogInfo');
    var moment = require('moment'); // For Date and Time Purpose
    var reqLogWriter = require($REFPATH + 'log/trace/LogWriter');
    var objLogInfo = params.objLogInfo
    var arrres_ID = [];
    var mTranDB;
    var winIpUrl;
    var winIpPort;

    var strApiServerURL;
    var strGatewayPath;
    var prctId = (params.PRCT_ID) ? (params.PRCT_ID) : '';
    var arrProcessItem = [];

    var session_info = (params.SETUP.SESSION) ? (params.SETUP.SESSION) : {};
    console.log("session =>", session_info)
    var headers = (params.SETUP.headers) ? params.SETUP.headers : {}; //
    console.log("param setup====>", params.SETUP.exg_additional_params);
    var business_date = ""; //(params.SETUP.exg_additional_params.businessdate) ? params.SETUP.exg_additional_params.businessdate : "";
    var date = ""
    var session_no = ""; //(params.SETUP.exg_additional_params.sessioninfo) ? params.SETUP.exg_additional_params.sessioninfo : "";

    console.log("additional info=======================>", params.SETUP.exg_additional_params)
    console.log("--------gateway config Data----" + JSON.stringify(params.SETUP.gateway_config.SUCCESS_DATA));
    var exg_code = params.SETUP.gateway_config.SUCCESS_DATA.exg_code;
    if (params.SETUP.exg_additional_params != undefined) {
        business_date = params.SETUP.exg_additional_params.businessdate;
        date = moment(business_date).format("DD-MMM-YYYY")
        session_no = params.SETUP.exg_additional_params.sessioninfo;
    }
    var arrEXNG_DTL = (params.SETUP.ruleObj.FILE_FORMATS) ? (params.SETUP.ruleObj.FILE_FORMATS) : []
    console.log("arrEXNG_DTL=================>", arrEXNG_DTL);
    var writePath = (params.SETUP.GATEWAY_SETUP.STATUS == 'SUCCESS') ? (params.SETUP.GATEWAY_SETUP.SUCCESS_DATA.write_path) : '';
    //var appRequest = { 'body': { 'PARAMS': {} }, 'headers': headers }
    var servicename = 'Create_File'; //service name
    var handlerCode = params.SETUP.ruleObj.FILE_FORMATS[0].EXFFG_CODE
    var strhandlerCode = (handlerCode) ? handlerCode.substr(0, 15) : handlerCode;
    var strRollbackStatus = ""

    var strFolderPath = 'ide_services/tph_s_ex_batch_tran_export/'
    var arrDescFOLDERLog = [];
    var intOldPRCT_ID = 0

    var strWindoworLinux = ""
    var ObjFTP = {
        "ftp_ip": "",
        "ftp_user": "",
        "ftp_passwd": ""
    };
    var file_path = ""
    var elig_status = ""
    var elig_prc_status = ""
    var finl_sucs_status = ""
    var finl_fail_status = ""
    var menu_item_code = ""
    var Module = objLogInfo.PROCESS_INFO.MODULE.toUpperCase();
    var Menu_Group = objLogInfo.PROCESS_INFO.MENU_GROUP.toUpperCase();
    var Screen_Name = objLogInfo.PROCESS_INFO.MENU_ITEM.toUpperCase();
    var commn_group_code = ""
    var Product_Code;
    console.log(objLogInfo.PROCESS_INFO);
    var App_Id = session_info.APP_ID;
    var TENANT_ID = session_info.TENANT_ID;
    if (App_Id == "3") {
        Product_Code = session_info.S_CODE;
    } else {
        Product_Code = session_info.ROOT_SCODE;
    }
    console.log(Product_Code);
    
      reqInstanceHelper.PrintInfo(servicename, '------------Product Code-------' + Product_Code);
    // Log Viewer Print
    objLogInfo.HANDLER_CODE = 'CREATE_SWIFT_RTGS';
    objLogInfo.ACTION = 'ACTION';
    objLogInfo.PROCESS = 'CREATE_SWIFT_RTGS_PROCESS';
    objLogInfo.CLIENTURL = params.SETUP.headers.referer;
    objLogInfo.headers = headers;

    mTranDB = params.TranDB; /// assign the DBConnection
    

    reqInstanceHelper.PrintInfo(servicename, "-------EXCHANGE IDE CALLED TPH (S) RTGS and SWIFT Batch Export-------", objLogInfo)
    if (paramsProcessData.length > 0) { // Prepare
        //query to get the ip and port number
        var winIpQuery = "select t.rule_code,t.product_code,t.param_value from core_rule_prod_params t where t.rule_code = 'DEPLOYMENT' and t.client_code = '" + TENANT_ID.toUpperCase() + "'";
        ExecuteQuery1(winIpQuery, function cbExecuteQuery1(arrWinIpRes) {
            try {
                if (arrWinIpRes.length > 0) {
                    var param_val = JSON.parse(arrWinIpRes[0].param_value);
                    winIpUrl = param_val.GENERAL.subgroup[0].win_svc_ip; //assign ip
                    var allPorts = param_val.GENERAL.subgroup[0].win_svc_port_no_new; //get all portnumber
                    var objPorts = JSON.parse(allPorts); //json parsing the portnumbers
                    winIpPort = objPorts["FTS_FILE_CREATION"]; //assign port number
                    
                    //fucntion call to perform windows call
                    doapicall(prctId, function callbackapi(result) {
                        if (result.length > 0) {
                            SendResponse(result);
                        } else {
                            SendResponse(result);
                            //fn_RollbackTranProcess()
                        }
                    });
                } else {
                    SendResponse("No data available for Deployment Rule Code")
                }
            } catch (error) {
                SendResponse(error)
            }
        })
        //});
    } else {
        reqInstanceHelper.PrintError(servicename, objLogInfo, "EXCHANGE_IDE_061", "ERROR IN NO ELIGIBLE", "NO ELIGIBLE RECORD FOUND");
        SendResponse([]);
    }

    // Get mandate Details
    function getCodeDesc(callbackCDesc) {
        try {
            var request = require('request');
            var apiURL = 'http://192.168.2.220:27098/microsvc/s_get_product_rule/';
            var options = {
                url: apiURL,
                method: 'POST',
                json: {
                    "PARAMS": {
                        'PROD_CODE': Product_Code,
                        'Rule_Code': "EXNG_FILE_CRT"
                    }
                },
                headers: {
                    'session-id': headers['session-id'],
                    'routingkey': headers.routingkey,
                    'content-type': 'application/json'
                }
            };
            // reqInstanceHelper.PrintInfo(servicename, '------------API JSON-------' + JSON.stringify(options), objLogInfo);
            //console.log('------------API JSON-------' + JSON.stringify(options));
            //  reqInstanceHelper.PrintError(servicename, objLogInfo, "API_INPUT_PARAMS", "API_CALL_INPUT_PARAMS", JSON.stringify(options));

            request(options, function (error, responseFromImagingService, responseBodyFromImagingService) {
                try {
                    if (error) {
                        reqInstanceHelper.PrintError(servicename, objLogInfo, "RTGS_SINGLE_CUS_031", "RTGS_SINGLE_CUS_API_CALL", error);
                        SendResponse([]);
                        //fn_RollbackTranProcess()
                    } else {
                        reqInstanceHelper.PrintInfo(servicename, '------API CALL STATUS----' + responseBodyFromImagingService, objLogInfo);
                        var Jsonparse = []
                        var param_val = JSON.parse(responseBodyFromImagingService.data.data[0].param_value);
                        var keys = [];
                        keys = Object.keys(param_val.general);
                        var len = keys.length;
                        for (var i = 0; i < len; i++) {
                            if (param_val.general[keys[i]][0].module == Module && param_val.general[keys[i]][0].menu_group == Menu_Group && param_val.general[keys[i]][0].screen_name == Screen_Name) {
                                elig_status = param_val.general[keys[i]][0].elig_status;
                                elig_prc_status = param_val.general[keys[i]][0].elig_prc_status;
                                finl_sucs_status = param_val.general[keys[i]][0].finl_sucs_status;
                                commn_group_code = param_val.general[keys[i]][0].commn_group_code;
                                //finl_fail_status = param_val.general[keys[i]][0].finl_fail_status;
                                //menu_item_code = param_val.general[keys[i]][0].menu_item_code;
                            }
                        }
                        callbackCDesc()
                    }
                } catch (error) {
                    reqInstanceHelper.PrintError(servicename, objLogInfo, "RTGS_SINGLE_CUS_032", "RTGS_SINGLE_CUS_API_CALLED", error);
                    SendResponse([]);
                    //fn_RollbackTranProcess()
                }
            });
        } catch (error) {
            reqInstanceHelper.PrintError(servicename, objLogInfo, "RTGS_SINGLE_CUS_032", "RTGS_SINGLE_CUS_API_CALL", error);
            SendResponse([]);
            // fn_RollbackTranProcess()
        }
    }
    // Do API Call
    function doapicall(strPrct_id, callbackapi) {
        try {
            var request = require('request');
            //api to perform wondows call
            var apiURL = 'http://' + winIpUrl + ':' + winIpPort + '/api/PaymentGateway/FileCreationProcess';
           
           
            var options = {
                url: apiURL,
                timeout: 18000000,
                method: 'POST',
                json: {
                    'PRCT_ID': strPrct_id,
                    'USER_ID': session_info.USER_ID,
                    'USER_NAME': session_info.USER_NAME,
                    'PRODUCT_CODE': Product_Code,
                    'EXFFG_CODE': arrEXNG_DTL[0].EXFFG_CODE,
                    'EXG_CODE': exg_code,
                    'SYSTEM_ID': session_info.S_ID,
                    'SESSION_ID': headers['session-id'],
                    'ROUTING_KEY': headers.routingkey,
                    'BUSINESS_DATE': date,
                    'SESSION_NO': session_no,
                    "CLIENTIP": session_info.CLIENTIP,
                    "CLIENT_TZ": session_info.CLIENTTZ,
                    "CLIENT_TZ_OFFSET": session_info.CLIENTTZ_OFFSET,
                    'APP_ID': App_Id,
                    'TENANT_ID': TENANT_ID,
                    "TIMEZONE_INFO": session_info.TIMEZONE_INFO
                   
                },
                headers: {
                    'content-type': 'application/json'
                }
            };
            reqInstanceHelper.PrintInfo(servicename, '------------API JSON-------' + JSON.stringify(options), objLogInfo);
            //console.log('------------API JSON-------' + JSON.stringify(options));
            reqInstanceHelper.PrintError(servicename, objLogInfo, "API_INPUT_PARAMS", "API_CALL_INPUT_PARAMS", JSON.stringify(options));
            request(options, function (error, responseFromImagingService, responseBodyFromImagingService) {
                try {
                    if (error) {
                        reqInstanceHelper.PrintError(servicename, objLogInfo, "RTGS_SINGLE_CUS_031", "RTGS_SINGLE_CUS_API_CALL", error);
                        SendResponse([]);
                        //fn_RollbackTranProcess()
                    } else {
                        reqInstanceHelper.PrintInfo(servicename, '------API CALL STATUS----' + responseBodyFromImagingService, objLogInfo);
                        var Jsonparse = []
                        ////// Don't remove the code becz framework exchange process need to insert
                        // var arrFailureMsg = ['FAILURE,INVALID DATA', 'Adapter not Found', 'FAILED. RECORD NOT FOUND', 'FAILURE']
                        // var Jsonparse = ""
                        // if (arrFailureMsg.indexOf(responseBodyFromImagingService) > -1) {
                        //     reqInstanceHelper.PrintError(servicename, objLogInfo, "RTGS_SINGLE_CUS_060", "RTGS_SINGLE_CUS_API_CALL", responseBodyFromImagingService);
                        //     callbackapi([])
                        // } else {
                        //     Jsonparse = JSON.parse(responseBodyFromImagingService);

                        //     for (var i = 0; i < Jsonparse.length; i++) {
                        //         var arrTS = Jsonparse[i].TS;
                        //         for (var j = 0; j < arrTS.length; j++) {
                        //             arrres_ID.push(arrTS[j].trn_id);
                        //         }
                        //     }
                        // }

                        // callbackapi(Jsonparse)
                        ////// Don't remove the code becz framework exchange process need to insert
                        if (responseBodyFromImagingService === 'SUCCESS') {
                            Jsonparse.push("SUCCESS")
                        }
                        callbackapi(Jsonparse)
                    }
                } catch (error) {
                    reqInstanceHelper.PrintError(servicename, objLogInfo, "RTGS_SINGLE_CUS_032", "RTGS_SINGLE_CUS_API_CALLED", error);
                    SendResponse([]);
                    //fn_RollbackTranProcess()
                }
            });
        } catch (error) {
            reqInstanceHelper.PrintError(servicename, objLogInfo, "RTGS_SINGLE_CUS_032", "RTGS_SINGLE_CUS_API_CALL", error);
            SendResponse([]);
            // fn_RollbackTranProcess()
        }
    }

    //function to execute select query 
    function ExecuteQuery1(query, callback) {
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

    //send resposne function
    function SendResponse(error) {
        console.log("SendResponseIP--->" + error)
        reqLogWriter.EventUpdate(objLogInfo); //  Insert into LogViewer Table
        if (error.length > 0) {
            var resObj = {
                'STATUS': 'SUCCESS',
                'SUCCESS_MESSAGE': 'STATIC',
                'SUCCESS_DATA': [],
                'PROCESS_STATUS': "SUCCESS",
                'INFO_MESSAGE': "HELLO INFO"
            }
            return callback(resObj);
        } else {
            var resObj = {
                'STATUS': 'FAILURE',
                'SUCCESS_MESSAGE': 'STATIC',
                'SUCCESS_DATA': [],
                'ERROR_CODE': "500",
                'ERROR_MESSAGE': "HELLO",
                'ERROR_OBJECT': "",
                'PROCESS_STATUS': "FAILURE",
                'INFO_MESSAGE': "HELLO INFO"
            }
            return callback(resObj);
        }
    }
} catch (error) {
    var resObj = {
        'STATUS': 'FAILURE',
        'SUCCESS_MESSAGE': 'STATIC',
        'SUCCESS_DATA': [],
        'ERROR_CODE': "500",
        'ERROR_MESSAGE': "HELLO",
        'ERROR_OBJECT': "",
        'PROCESS_STATUS': "FAILURE",
        'INFO_MESSAGE': "HELLO INFO"
    }
    return callback(resObj);
}

}
module.exports = { writeData: writeData };