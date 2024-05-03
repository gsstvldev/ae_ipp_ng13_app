var $MODULEPATH = '../../../../../node_modules/';
var express = require($MODULEPATH + 'express');
var Path = require($MODULEPATH + 'path');
var $REFPATH = Path.join(__dirname, '../../../../../torus-references/');
var app = express.Router();

function importToDB(params, callback) {



try {
    /*  Created By : M.Siva Harish
Created Date : 19/10/2022
Modified By : 
Modified Date :  
Reason for :         
  
*/
    console.log("-----------NPSS  UPDATE FILE IDE -----");
    //console.log("-----------INPUT-----" + params);
    //console.log("-----------INPUT-----" + JSON.stringify(params));
    //console.log("-----------params.PROCESSED_DATA-----" + params.PROCESSED_DATA);
    var paramsInput = params.files; //getting file details from exchange
    var paramsFileMatch = params.file_info; // getting file info from exchange
    //var chkFileMatch = (paramsFileMatch.STATUS == 'SUCCESS') ? true : false;
    var paramsProcessData = (paramsInput) ? paramsInput : [];
    //var arrExhf_id = (paramsFileMatch.SUCCESS_DATA.EXHF_ID_ARR) ? paramsFileMatch.SUCCESS_DATA.EXHF_ID_ARR : [];
    //var paramsFileName = (paramsInput) ? paramsInput : [];
    //console.log("--------Process Data----" + JSON.stringify(paramsProcessData));
    var reqTranDBInstance = require($REFPATH + "instance/TranDBInstance"); // postgres & oracle DB pointing        
    var reqDateFormatter = require($REFPATH + "common/dateconverter/DateFormatter"); // format date and get current date
    var reqInstanceHelper = require($REFPATH + "common/InstanceHelper"); //  Response,error,info msg printing        
    var reqLogInfo = require($REFPATH + 'log/trace/LogInfo'); // Log information Detail  
    var reqLogWriter = require($REFPATH + 'log/trace/LogWriter'); // Log writer detail
    var objLogInfo = params.objLogInfo;
    var arrres_ID = [];
    var mTranDB;

    var strApiServerURL;
    var strGatewayPath;
    var prctId = objLogInfo.PROCESS_INFO.PRCT_ID; //(paramsInput.prct_id) ? (paramsInput.prct_id) : '';
    var arrProcessItem = [];
    var session_info = (params.session_info) ? params.session_info : defaultSession;
    //var session_info = (params.SETUP.SESSION) ? (params.SETUP.SESSION) : {};
    console.log("params.headers--------------" + params.headers)
    var headers = (params.headers) ? params.headers : {};
    var arrEXNG_DTL = (params.ffg_json.FILE_FORMATS);
    console.log('ffgJson', JSON.stringify(arrEXNG_DTL));
    //var writePath = (params.SETUP.GATEWAY_SETUP.STATUS == 'SUCCESS') ? (params.SETUP.GATEWAY_SETUP.SUCCESS_DATA.write_path) : '';
    //var appRequest = { 'body': { 'PARAMS': {} }, 'headers': headers }
    var servicename = 'Update_File'; //service name
    // var handlerCode = params.SETUP.ruleObj.FILE_FORMATS[0].EXFFG_CODE;
    //var strhandlerCode = (handlerCode) ? handlerCode.substr(0, 15) : handlerCode;
    var strRollbackStatus = "";

    var strFolderPath = 'ide_services/tph_s_ex_batch_tran_export/';
    var arrDescFOLDERLog = [];
    var intOldPRCT_ID = 0;

    var strWindoworLinux = "";
    var ObjFTP = {
        "ftp_ip": "",
        "ftp_user": "",
        "ftp_passwd": ""
    };
    var file_path = "";
    var elig_status = "";
    var elig_prc_status = "";
    var finl_sucs_status = "";
    var finl_fail_status = "";
    var menu_item_code = "";
    var Module = objLogInfo.PROCESS_INFO.MODULE.toUpperCase();
    var Menu_Group = objLogInfo.PROCESS_INFO.MENU_GROUP.toUpperCase();
    var Screen_Name = objLogInfo.PROCESS_INFO.MENU_ITEM.toUpperCase();
    var commn_group_code = "";
    var url
    var Product_Code;
    var pass = 0;
    var fail = 0;
    var temp;
    var t;
    var winIpUrl = "";
    var winIpPort = "";
    console.log(objLogInfo.PROCESS_INFO);
    var App_Id = session_info.APP_ID;
    var TENANT_ID = session_info.TENANT_ID;
    if (App_Id == "3") {
        Product_Code = session_info.S_CODE;
    } else {
        Product_Code = session_info.ROOT_SCODE;
    }
    console.log('Product_Code--', Product_Code);
    // Log Viewer Print
    objLogInfo.HANDLER_CODE = 'CREATE_SWIFT_RTGS';
    objLogInfo.ACTION = 'ACTION';
    objLogInfo.PROCESS = 'CREATE_SWIFT_RTGS_PROCESS';
    // objLogInfo.CLIENTURL = params.SETUP.headers.referer;
    objLogInfo.headers = headers;

    mTranDB = params.TranDB; /// assign the DBConnection

    reqInstanceHelper.PrintInfo(servicename, "-------EXCHANGE IDE CALLED TPH (S) RTGS and SWIFT Batch Export-------", objLogInfo);
    if (paramsProcessData.length > 0) {

        try {
            var Takeurl = `select api_url from CORE_API_MASTER_RULE_SETUP WHERE api_code = 'NPSSfileupdate'`
            ExecuteQuery1(Takeurl, function cbExecuteQuery1(arrRes) {
                if (arrRes.length > 0) {
                    url = arrRes[0].api_url
                    //function call to perform windows api call
            doapicall(prctId,url, function callbackapi(result) {
                 if (result.length > 0) {
                SendResponse(result);
                } else {
                 SendResponse(result);

                }

              

            });
                } else {
                    console.log('Rule Code..................No Rule Code')
                    SendResponse('No Rule Code');
                }

            })
            

        } catch (error) {
            SendResponse(error)
        }

    } else {
        reqInstanceHelper.PrintError(servicename, objLogInfo, "EXCHANGE_IDE_061", "ERROR IN NO ELIGIBLE", "NO ELIGIBLE RECORD FOUND");
        SendResponse([]);
    }

    // Do API Call
    function doapicall(strPrct_id,url, callbackapi) {
        try {
            console.log("doapicall-----------");
            var request = require('request');
            //Windows api call
            var apiURL = url

            var options = {
                url: apiURL,
                timeout: 99999999,
                method: 'POST',
                json: {
                    'PRCT_ID': strPrct_id,
                    'USER_ID': session_info.USER_ID,
                    'USER_NAME': session_info.USER_NAME,
                    'PRODUCT_CODE': Product_Code,
                    'EXFFG_CODE': arrEXNG_DTL[0].EXFFG_CODE,
                    'EXG_CODE': arrEXNG_DTL[0].DESCRIPTION,
                    'SYSTEM_ID': session_info.S_ID,
                    // 'SESSION_ID': headers['session-id'],
                    'ROUTING_KEY': headers.routingkey,
                    'APP_ID': App_Id,
                    "SESSION_ID": "STATIC-SESSION-AEFAB-215",
                    'TENANT_ID': TENANT_ID,
                    "CLIENTIP": session_info.CLIENTIP,
                    "CLIENT_TZ": session_info.CLIENTTZ,
                    "CLIENT_TZ_OFFSET": session_info.CLIENTTZ_OFFSET,
                    "TIMEZONE_INFO": session_info.TIMEZONE_INFO
                },
                headers: {
                    'content-type': 'application/json'
                }
            };
            console.log("PRCT_ID-----------" + options.json.PRCT_ID);
            console.log("USER_ID-----------" + options.json.USER_ID);
            console.log("USER_NAME-----------" + options.json.USER_NAME);
            console.log("PRODUCT_CODE-----------" + options.json.PRODUCT_CODE);
            console.log("EXFFG_CODE-----------" + options.json.EXFFG_CODE);
            console.log("EXG_CODE-----------" + options.json.EXG_CODE);
            console.log("SYSTEM_ID-----------" + options.json.SYSTEM_ID);
            console.log("ROUTING_KEY-----------" + options.json.ROUTING_KEY);
            reqInstanceHelper.PrintInfo(servicename, '------------API JSON-------' + JSON.stringify(options), objLogInfo);
            //console.log('------------API JSON-------' + JSON.stringify(options));
            reqInstanceHelper.PrintError(servicename, objLogInfo, "API_INPUT_PARAMS", "API_CALL_INPUT_PARAMS", JSON.stringify(options));
            request(options, function (error, responseFromImagingService, responseBodyFromImagingService) {
                try {

                    if (error) {
                        console.log('--API Error Response--', error)
                        reqInstanceHelper.PrintError(servicename, objLogInfo, "VMC", "RTGS_SINGLE_CUS_031", "RTGS_SINGLE_CUS_API_CALL", error);
                        SendResponse([]);
                        //fn_RollbackTranProcess()
                    } else {
                        //console.log('API CALL SUCCESS123........................',JSON.parse(responseBodyFromImagingService))
                        console.log('API CALL SUCCESS........................', responseBodyFromImagingService)
                        reqInstanceHelper.PrintInfo(servicename, '------API CALL STATUS----' + responseBodyFromImagingService, objLogInfo);
                        var Jsonparse = [];

                        ////// Don't remove the code becz framework exchange process need to insert
                        if (responseBodyFromImagingService) {
                            console.log("from DLL------------------" + responseBodyFromImagingService);
                            t = JSON.parse(responseBodyFromImagingService);
                            temp = t.length;
                            for (var i = 0; i < temp; i++) {
                                if (t[i].FILE_STATUS == "SUCCESS") {
                                    pass++;
                                } else {
                                    fail++;
                                }
                            }
                            Jsonparse.push("SUCCESS");
                        }

                        callbackapi(Jsonparse);


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
    //function to execute queries
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
    //send respose function
    function SendResponse(error) {
        console.log('sendresponse.................................', error)
        //intFailureFileCount = intTotalFileCount - intSuccessFileCount
        var objFileInfo = {};
        objFileInfo.FILE_TOTAL_COUNT = temp;
        objFileInfo.FILE_SUCCESS_COUNT = pass;
        objFileInfo.FILE_FAILURE_COUNT = fail;
        console.log("send response--->" + error)
        reqLogWriter.EventUpdate(objLogInfo); //  Insert into LogViewer Table
        if (error.length > 0) {
            var resObj = {
                'STATUS': 'SUCCESS',
                'SUCCESS_MESSAGE': 'STATIC',
                'SUCCESS_DATA': t,
                'ERROR_CODE': "1000",
                'ERROR_MESSAGE': "HELLO",
                'ERROR_OBJECT': "",
                'PROCESS_STATUS': "SUCCESS",
                'INFO_MESSAGE': objFileInfo
            };
            return callback(resObj);
        } else {
            var resObj = {
                'STATUS': 'FAILURE',
                'SUCCESS_MESSAGE': 'STATIC',
                'SUCCESS_DATA': 'FAILURE',
                'ERROR_CODE': "500",
                'ERROR_MESSAGE': "HELLO",
                'ERROR_OBJECT': "",
                'PROCESS_STATUS': "FAILURE",
                'INFO_MESSAGE': objFileInfo
            };
            console.log('failure response..............', resObj)
            return callback(resObj);
        }
    }
} catch (error) {
    console.log("error=======>" + error)
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
module.exports = { importToDB: importToDB };