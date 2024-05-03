var $MODULEPATH = '../../../../../node_modules/';
var express = require($MODULEPATH + 'express');
var Path = require($MODULEPATH + 'path');
var $REFPATH = Path.join(__dirname, '../../../../../torus-references/');
var app = express.Router();

function uploadExtension(params, callback) {


try {
    /*  Created By :  Siva Harish
    Created Date : 1/11/2022
    Modified By :
    Modified Date :
    Reason for :         
      
    */
    console.log("-----------NPSS UPLOAD FILE CHANGE STATE IDE -----");
    console.log("Success file list ===============>" + JSON.stringify(params.SUCCESS_FILE_LIST));
    console.log("uprct_idt ===============>" + params.PRCT_ID);
    console.log("sESSION file list ===============>" + JSON.stringify(params.SESSION_INFO));
    var reqTranDBInstance = require($REFPATH + "instance/TranDBInstance"); // postgres & oracle DB pointing        
    var reqDateFormatter = require($REFPATH + "common/dateconverter/DateFormatter"); // format date and get current date
    var reqInstanceHelper = require($REFPATH + "common/InstanceHelper"); //  Response,error,info msg printing   
    var reqLogWriter = require($REFPATH + 'log/trace/LogWriter'); //log writer information
    var request = require('request');
    var objLogInfo = params.objLogInfo
    var file = [];
    var failurefile = [];
    failurefile = params.FAILURE_FILE_LIST; //getting failure file list from exchange
    file = params.SUCCESS_FILE_LIST; //getting success file list from exchange
    console.log("FAIL_FILE_LIST ===============>" + JSON.stringify(params.FAILURE_FILE_LIST));
    var file_length = file.length;
    console.log("success length =>", file_length)
    var fail_file_length = 0
    if (failurefile !== undefined) {
        fail_file_length = failurefile.length;
    }
    console.log("fail length =>", fail_file_length)
    var mTranDB;
    var PRCT_ID = (params.PRCT_ID) ? (params.PRCT_ID) : '';
    var session_info = params.SESSION_INFO;
    var headers = {
        routingkey: session_info.ROUTINGKEY
    }
    var modified_by = session_info.USER_ID;
    var modified_name = session_info.LOGIN_NAME;
    var modified_date = reqDateFormatter.GetTenantCurrentDateTime(headers, objLogInfo);
    console.log("session =>", session_info)
    var Product_Code;
    var incCount = 0;
    var tenantName = (session_info.TENANT_ID) ? session_info.TENANT_ID.toUpperCase() : "";
    var App_Id = session_info.APP_ID;
    if (App_Id == "3") {
        Product_Code = session_info.S_CODE;
    } else {
        Product_Code = session_info.ROOT_SCODE;
    }
    var Screen_Name = objLogInfo.PROCESS_INFO.MENU_ITEM.toUpperCase();
    console.log(Product_Code);
    var code;
    if (Product_Code != null || Product_Code != undefined) {
        code = Product_Code.split('_');
    }
    if (Product_Code !== 'NPSS_AEFAB') {
        SendResponse("SUCCESS");
    } else {
        // Log Viewer Print
        var notran = [];
        var allexhf_id = [];
        var exhf_id = [];
        var vmc_tran = [];
        var eftc_tran = [];
        var eftd_tran = [];
        var mms_tran = [];
        var rtgs_tran = [];
        var successfilename = [];
        var failurefilename = [];
        var prd_code
        var app_name
        var tblName
        var pkey
        var dtt_code
       
            prd_code = 'NPSS_AEFAB'
            app_name = 'npss'
            tblName = 'npss_transactions'
            pkey = 'npsst_id'
            dtt_code = 'DTT_1304_1665901217208'
        
        mTranDB = params.TRAN_DB_INSTANCE; /// assign the DBConnection
        for (var i = 0; i < file_length; i++) {
            exhf_id.push(file[i].exhf_id);
            successfilename.push(file[i].file_name);
        }
        for (var j = 0; j < fail_file_length; j++) {
            failurefilename.push(failurefile[j].file_name);
        }
        var temp = '(' + "'" + exhf_id.toString().split(',').join("','") + "'" + ')';
        console.log("condition forming=========================>", temp);
        var dtt_select = "select ef.exhf_id,ts.dtt_code,ts.status,ts.process_status,ef.trn_id,ts.app_id from ex_file_trans ef inner join npss_transactions ts on ef.trn_id = ts.npsst_id where ef.exhf_id in " + temp + "";
        var file_status_update = "UPDATE ex_header_files SET FILE_STATUS = 'UPLOAD_MAIL_INITIATED',PRCT_ID ='" + PRCT_ID + "',MODIFIED_BY='" + modified_by + "',MODIFIED_DATE = '" + modified_date + "',MODIFIED_BY_NAME = '" + modified_name + "', MODIFIED_CLIENTIP = '" + session_info.CLIENTIP + "', MODIFIED_TZ = '" + session_info.CLIENTTZ + "', MODIFIED_TZ_OFFSET = '" + session_info.CLIENTTZ_OFFSET + "', MODIFIED_BY_SESSIONID = '" + session_info.SESSION_ID + "', MODIFIED_DATE_UTC = '" + reqDateFormatter.GetCurrentDateInUTC(headers, objLogInfo) + "' WHERE EXHF_ID in " + temp + "";
        ExecuteQuery(file_status_update, function (arrresult) { // Get Rule params based on product and event
            try {
                if (arrresult == "SUCCESS") { // check rule param record exists or not
                    ExecuteQuery1(dtt_select, function (arrresult) {
                        try {
                            if (arrresult.length > 0) {
                                console.log("DTT select ============================>", arrresult)
                                for (var i = 0; i < arrresult.length; i++) {
                                    var obj = {};
                                    allexhf_id.push(arrresult[i].exhf_id);
                                    if (arrresult[i].dtt_code == "DTT_1304_1665901217208") {
                                        console.log('.............................Process DTT Code Successfully Verified')
                                        obj.product_code = prd_code;
                                        obj.app_name = app_name;
                                        obj.table = tblName;
                                        obj.dtt_code = dtt_code;
                                        obj.process = arrresult[i].process_status;
                                        obj.status = arrresult[i].status;
                                        obj.app_id = arrresult[i].app_id;
                                        obj.key = pkey;
                                        obj.trn_id = arrresult[i].trn_id;
                                        obj.exhf_id = arrresult[i].exhf_id;
                                        vmc_tran.push(obj);
                                    }
                                }
                                var unique = (value, index, self) => {
                                    return self.indexOf(value) === index
                                }

                                var uniqueexhf_id = allexhf_id.filter(unique);
                                console.log("Unique exhf id from select query", uniqueexhf_id);
                                exhf_id.forEach(element => {
                                    if (!uniqueexhf_id.includes(element)) {
                                        notran.push(element);
                                    }
                                });
                                console.log("final array of exhfid with no tran", notran);
                                updatenotran(notran, function (error, success_message) {
                                    if (error) {
                                        SendResponse(error);
                                    } else {
                                        if (success_message == "SUCCESS") {
                                  

                                            if (Product_Code == `NPSS_${tenantName}`) {
                                                sendmail(vmc_tran, function (error, res) {
                                                    try {
                                                        if (error) {
                                                            SendResponse("Email sending failed");
                                                        } else {
                                         
 
                                                            if (res == "SUCCESS") {
                                                          
                                                                fn_FileUpdate(vmc_tran, function (error, res) {
                                                                    try {
                                                                        if (error) {
                                                                            SendResponse("Update Failure");
                                                                        } else {
                                                                            console.log('.............................Before Enter File Update Status')
                                                                            if (res === "SUCCESS") {
                                                              
                                                                                console.log('.............................Tran Update Success')
                                                                                SendResponse("SUCCESS");
                                                                            } else {

                                                                                SendResponse("Update Failure");
                                                                            }
                                                                        }
                                                                    } catch (error) {
                                                                        console.log("catch error ============================>", error)
                                                                        SendResponse(error);
                                                                    }
                                                                })
                                                            }
                                                        }
                                                    } catch (error) {
                                                        console.log("catch error ============================>", error)
                                                        SendResponse(error);
                                                    }
                                                })
                                            }
                                        }
                                    }
                                })
                            } else {
                                SendResponse("NO DTT Code Found");
                            }
                        } catch (error) {
                            console.log("catch error ============================>", error)
                            SendResponse(error);
                        }
                    });
                } else {
                    SendResponse("No data found");
                }
            } catch (error) {
                SendResponse(error);
            }
        });
    }

    //function to update no tran files
    function updatenotran(notranarr, notrancallback) {
        console.log("No tran file update call initiated")
        if (notranarr.length > 0) {
            var notrantemp = '(' + "'" + notranarr.toString().split(',').join("','") + "'" + ')';
            console.log("no tran condition forming=========================>", notranarr);
            console.log("no tran condition forming=========================>", notrantemp);
            var notranupdate = "UPDATE ex_header_files SET FILE_STATUS = 'UPLOAD_COMPLETED',PRCT_ID ='" + PRCT_ID + "',MODIFIED_BY='" + modified_by + "',MODIFIED_DATE = '" + modified_date + "',MODIFIED_BY_NAME = '" + modified_name + "', MODIFIED_CLIENTIP = '" + session_info.CLIENTIP + "', MODIFIED_TZ = '" + session_info.CLIENTTZ + "', MODIFIED_TZ_OFFSET = '" + session_info.CLIENTTZ_OFFSET + "', MODIFIED_BY_SESSIONID = '" + session_info.SESSION_ID + "', MODIFIED_DATE_UTC = '" + reqDateFormatter.GetCurrentDateInUTC(headers, objLogInfo) + "' WHERE EXHF_ID in " + notrantemp + "";
            ExecuteQuery(notranupdate, function (arrresult) { // Get Rule params based on product and event
                try {
                    if (arrresult == "SUCCESS") { // check rule param record exists or not
                        notrancallback(null, "SUCCESS");
                    } else {
                        notrancallback("No data found");
                    }
                } catch (error) {
                    notrancallback(error);
                }
            });
        } else {
            notrancallback(null, "SUCCESS");
        }
    }

    //function to send email
    function sendmail(arr, callback) {
        var success_list = successfilename.toString();
        var failure_list = failurefilename.toString();
        var template_name = "";
        var mode = "";
        if (arr.length > 0) {
            var select_final = "select t.param_value from core_rule_prod_params t where t.rule_code ='EXNG_FILE_UPLOAD' and t.product_code ='" + arr[0].product_code + "'";
            ExecuteQuery1(select_final, function (arrresult) {
                try {
                    if (arrresult.length > 0) {
                        console.log("rule query out==================>", arrresult)
                        var param_val = JSON.parse(arrresult[0].param_value);
                        var keys = [];
                        keys = Object.keys(param_val.GENERAL);
                        var len = keys.length;
                        console.log("RULE==============>", param_val)
                        template_name = (param_val.GENERAL[keys[0]][0].commn_group_code);
                        mode = (param_val.GENERAL[keys[0]][0].email_sending_mode);
                        if (mode == "NONE") {
                            callback(null, "SUCCESS");
                        } else if (mode == "SUCCESS" && successfilename.length == 0) {
                            callback(null, "SUCCESS");
                        } else if (mode == "FAILURE" && failurefilename.length == 0) {
                            callback(null, "SUCCESS");
                        } else {
                            var ipQuery = "select PLT_SETUP_VALUE from CORE_PLATFORM_SETUP where PLT_SETUP_NAME = 'TORUS_COMMN_SERVICE'";
                            ExecuteQuery1(ipQuery, function (arrresult) {
                                if (arrresult.length > 0) {
                                    console.log("ip query out==================>", arrresult)
                                    //api call to the communication module 
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
                                                "PRCT_ID": PRCT_ID,
                                                "USER_ID": session_info.USER_ID,
                                                "USER_NAME": session_info.LOGIN_NAME,
                                                "TENANT_ID": session_info.TENANT_ID,
                                                "APP_ID": session_info.APP_ID,
                                                "CLIENTIP": session_info.CLIENTIP,
                                                "CLIENT_TZ": session_info.CLIENTTZ,
                                                "CLIENT_TZ_OFFSET": session_info.CLIENTTZ_OFFSET,
                                                "SESSION_ID": session_info.SESSION_ID,
                                                "ROUTING_KEY": headers.routingkey,
                                                "TIMEZONE_INFO": session_info.TIMEZONE_INFO
                                            },
                                            "PROCESS_INFO": {
                                                "MODULE": "EXCHANGE",
                                                "MENU_GROUP": "Exchange Process",
                                                "MENU_ITEM": "Kenya Common File Upload",
                                                "PROCESS_NAME": "DEFAULT"
                                            }
                                        },
                                        headers: {
                                            'content-type': 'application/json',
                                            'routingkey': session_info.ROUTINGKEY,
                                            'session-id': session_info.SESSION_ID
                                        }
                                    };
                                    console.log('------------API JSON-------' + JSON.stringify(options));
                                    request(options, function (error, responseFromImagingService, res) {
                                        console.log("------API CALL ----");
                                        console.log(res);
                                        reqInstanceHelper.PrintInfo("IPS (SCU) Upload Change State", "Error from communication API - " + error, objLogInfo);
                                        reqInstanceHelper.PrintInfo("IPS (SCU) Upload Change State", "Response from communication API - " + JSON.stringify(res), objLogInfo);
                                        console.log("Error from communication API - " + error);
                                        console.log("Response from communication API - " + JSON.stringify(res));
                                        callback(null, "SUCCESS");
                                        /* if (error) {
                                             SendResponse("Error in communicaqtion api");
                                         } else {
                                             console.log("------API CALL ----");
                                             console.log(res);
                                             if (res.data == "SUCCESS") {
                                                 callback(null, "SUCCESS");
                                             } else {
                                                 SendResponse("Failure from communication api");
                                             }
                                         }*/
                                    });
                                } else {
                                    SendResponse("No Data Found");
                                }
                            });
                        }
                    } else {
                        SendResponse("No Rule Found");
                    }
                } catch (error) {
                    SendResponse(error);
                }
            });
        } else {
            callback(null, "SUCCESS")
        }
    }
    //function to perform file update for CCS, EFTC, EFTD and RTGS
    function fn_FileUpdate(arr, callback) {
        if (arr.length > 0) {
            console.log('............................. Enter File Update Status')
            var finalip = [];
            var finalop = [];
            var isIPTranExists = false;
            var isOPTranExists = false;
            var ipTranIDQry
            var opTranIDQry
            var process_select
            var select_final = "select t.param_value from core_rule_prod_params t where t.rule_code ='EXNG_FILE_UPLOAD' and t.product_code ='" + arr[0].product_code + "'";
            var strTranIDQry = "select eft.trn_id from ex_header_files ehf inner join ex_file_trans eft on eft.EXHF_ID = ehf.EXHF_ID Where ehf.PRCT_ID = '" + PRCT_ID + "' and eft.DTT_CODE = '" + arr[0].dtt_code + "'";


     ipTranIDQry = "select t.npsst_id from npss_transactions t where t.npsst_id in (" + strTranIDQry + ") and t.process_type = 'IP'";
     opTranIDQry = "select t.npsst_id from npss_transactions t where t.npsst_id in (" + strTranIDQry + ") and t.process_type = 'OP'";
      process_select = "select t.process_type,t.npsst_id,t.status,t.process_status from npss_transactions t where t.npsst_id in (" + strTranIDQry + ")";
    // ipTranIDQry = "select t." + arr[0].app_name + "t_id from " + arr[0].app_name + "_transactions t inner join " + arr[0].app_name + "_batches b on t." + arr[0].app_name + "b_id = b." + arr[0].app_name + "b_id where t." + arr[0].app_name + "t_id in (" + strTranIDQry + ") and b.process_type = 'IP'";
    // opTranIDQry = "select t." + arr[0].app_name + "t_id from " + arr[0].app_name + "_transactions t inner join " + arr[0].app_name + "_batches b on t." + arr[0].app_name + "b_id = b." + arr[0].app_name + "b_id where t." + arr[0].app_name + "t_id in (" + strTranIDQry + ") and b.process_type = 'OP'";
    // process_select = "select b.process_type,t." + arr[0].app_name + "t_id,t.status,t.process_status from " + arr[0].app_name + "_transactions t inner join " + arr[0].app_name + "_batches b on t." + arr[0].app_name + "b_id = b." + arr[0].app_name + "b_id where t." + arr[0].app_name + "t_id in (" + strTranIDQry + ")";

 
            ExecuteQuery1(process_select, function (arrresult) {
                try {
                    if (arrresult.length > 0) {
                   console.log("processselectquery...............",process_select)

                        for (var i = 0; i < arrresult.length; i++) {
                            if (arrresult[i].process_type == "IP") {
                                var obj_process = {};
                                obj_process.status = arrresult[i].status;
                                obj_process.process = arrresult[i].process_status;
                                finalip.push(obj_process);
                                isIPTranExists = true;
                            } else {
                                var obj_opprocess = {};
                                obj_opprocess.status = arrresult[i].status;
                                obj_opprocess.process = arrresult[i].process_status;
                                finalop.push(obj_opprocess);
                                isOPTranExists = true;
                            }
                        }
console.log("finalip...............",finalip)
console.log("finalop...............",finalop)

                        if (finalip[0] == undefined) {
                            var obj_process = {};
                            obj_process.status = "";
                            obj_process.process = "";
                            finalip.push(obj_process);
                        }
                        console.log("ipstatus===============>", finalip[0].status)
                        if (finalop[0] == undefined) {
                            var obj_opprocess = {};
                            obj_opprocess.status = "";
                            obj_opprocess.process = "";
                            finalop.push(obj_opprocess);
                        }
                        console.log("opstatus===============>", finalop[0].status)
                        console.log("opstatus===============>", finalop[0].status)
                        ExecuteQuery1(select_final, function (arrresult) {
                            try {
                                if (arrresult.length > 0) {
console.log("select_final...............",select_final)
console.log("select_final result...............",arrresult)

                                    console.log("rule query out==================>", arrresult)
                                    var param_val = JSON.parse(arrresult[0].param_value);
                                    var keys = [];
                                    var fipstatus = "";
                                    var fipprocess = "";
                                    var fopstatus = "";
                                    var fopprocess = "";
                                    keys = Object.keys(param_val.GENERAL);
                                    var len = keys.length;
                                    console.log("RULE==============>", param_val)
                                    for (var i = 0; i < len; i++) {
                                        console.log("rule format===============>", param_val.GENERAL[keys[i]][0].eligible_process_status)
                                        if (param_val.GENERAL[keys[i]][0].eligible_process_status == finalip[0].process && param_val.GENERAL[keys[i]][0].eligible_status == finalip[0].status) {
                                            fipstatus = (param_val.GENERAL[keys[i]][0].final_status);
                                            fipprocess = (param_val.GENERAL[keys[i]][0].final_process_status);
                                        } else if (param_val.GENERAL[keys[i]][0].eligible_process_status == finalop[0].process && param_val.GENERAL[keys[i]][0].eligible_status == finalop[0].status) {
                                            fopstatus = (param_val.GENERAL[keys[i]][0].final_status);
                                            fopprocess = (param_val.GENERAL[keys[i]][0].final_process_status);
                                        }
                                    }
                                    console.log("fipstatus===============>", fipstatus)
                                    console.log("fopstatus===============>", fopstatus)
                                    if (isIPTranExists == true && isOPTranExists == false) {
                                        if (fipstatus == "") {
                                            SendResponse("FAILURE-Data not available in rule table for the given eligible status");
                                        } else {
                                            fn_UpdtStatus4Trns(arr, fipstatus, fipprocess, ipTranIDQry, function callbackUpdtStatus4Trns(error, res) {
                                                try {
                                                    if (error) {
                                                        callback(error)
                                                    } else {
                                                        callback(null, "SUCCESS");
                                                    }
                                                } catch (error) {
                                                    callback(error)
                                                }
                                            })
                                        }
                                    } else if (isIPTranExists == false && isOPTranExists == true) {
                                        if (fopstatus == "") {
                                            SendResponse("FAILURE-Data not available in rule table for the given eligible status");
                                        } else {
                                            fn_UpdtStatus4Trns(arr, fopstatus, fopprocess, opTranIDQry, function callbackUpdtStatus4Trns(error, res) {
                                                try {
                                                    if (error) {
                                                        callback(error)
                                                    } else {
                                                        callback(null, "SUCCESS");
                                                    }
                                                } catch (error) {
                                                    callback(error)
                                                }
                                            })
                                        }
                                    } else {
                                        if (fopstatus == "" && fipstatus == "") {
                                            SendResponse("FAILURE-Data not available in rule table for the given eligible status");
                                        } else {
                                            fn_UpdtStatus4Trns(arr, fipstatus, fipprocess, ipTranIDQry, function callbackUpdtStatus4Trns(error, res) {
                                                try {
                                                    if (error) {
                                                        callback(error)
                                                    } else {
                                                        fn_UpdtStatus4Trns(arr, fopstatus, fopprocess, opTranIDQry, function callbackUpdtStatus4Trns(error, res) {
                                                            try {
                                                                if (error) {
                                                                    callback(error)
                                                                } else {
                                                                    callback(null, "SUCCESS");
                                                                }
                                                            } catch (error) {
                                                                callback(error)
                                                            }
                                                        })
                                                    }
                                                } catch (error) {
                                                    callback(error)
                                                }
                                            })
                                        }
                                    }
                                } else {
                                    SendResponse("No Rule Found");
                                }
                            } catch (error) {
                                SendResponse(error);
                            }
                        });
                    } else {
                        SendResponse("No Data Found");
                    }
                } catch (error) {
                    SendResponse(error);
                }
            });
        } else {
            callback(null, "SUCCESS");
        }
    }


    //common function to perform update on transaction tables
    function fn_UpdtStatus4Trns(arrTranDtls, status, process_status, tranIdSubQry, callbackUpdtStatus4Trns) {
        try {
            console.log('.............................Entering fr_updtstatus4Trn Functions')
            var tran_update = "UPDATE " + arrTranDtls[0].table + " SET STATUS = '" + status + "',PRCT_ID ='" + PRCT_ID + "', PROCESS_STATUS = '" + process_status + "',MODIFIED_BY = '" + modified_by + "',MODIFIED_DATE = '" + modified_date + "',MODIFIED_BY_NAME ='" + modified_name + "', MODIFIED_CLIENTIP = '" + session_info.CLIENTIP + "', MODIFIED_TZ = '" + session_info.CLIENTTZ + "', MODIFIED_TZ_OFFSET = '" + session_info.CLIENTTZ_OFFSET + "', MODIFIED_BY_SESSIONID = '" + session_info.SESSION_ID + "', MODIFIED_DATE_UTC = '" + reqDateFormatter.GetCurrentDateInUTC(headers, objLogInfo) + "' WHERE " + arrTranDtls[0].key + " in (" + tranIdSubQry + ")";
           // var transet_update = "UPDATE transaction_set SET STATUS = '" + status + "',PRCT_ID ='" + PRCT_ID + "', PROCESS_STATUS = '" + process_status + "',MODIFIED_BY = '" + modified_by + "',MODIFIED_DATE = '" + modified_date + "',MODIFIED_BY_NAME ='" + modified_name + "',LOCKED_BY ='',LOCKED_BY_NAME ='', MODIFIED_CLIENTIP = '" + session_info.CLIENTIP + "', MODIFIED_TZ = '" + session_info.CLIENTTZ + "', MODIFIED_TZ_OFFSET = '" + session_info.CLIENTTZ_OFFSET + "', MODIFIED_BY_SESSIONID = '" + session_info.SESSION_ID + "', MODIFIED_DATE_UTC = '" + reqDateFormatter.GetCurrentDateInUTC(headers, objLogInfo) + "' WHERE TRN_ID in (" + tranIdSubQry + ") and APP_ID = '" + arrTranDtls[0].app_id + "'";
            var final_file_status_update = "UPDATE EX_HEADER_FILES SET FILE_STATUS = 'UPLOAD_COMPLETED', PRCT_ID ='" + PRCT_ID + "',MODIFIED_BY='" + modified_by + "',MODIFIED_DATE = '" + modified_date + "',MODIFIED_BY_NAME = '" + modified_name + "', MODIFIED_CLIENTIP = '" + session_info.CLIENTIP + "', MODIFIED_TZ = '" + session_info.CLIENTTZ + "', MODIFIED_TZ_OFFSET = '" + session_info.CLIENTTZ_OFFSET + "', MODIFIED_BY_SESSIONID = '" + session_info.SESSION_ID + "', MODIFIED_DATE_UTC = '" + reqDateFormatter.GetCurrentDateInUTC(headers, objLogInfo) + "' WHERE EXHF_ID in (select distinct eft.EXHF_ID FROM EX_FILE_TRANS eft INNER JOIN EX_HEADER_FILES EHF ON EHF.EXHF_ID = EFT.EXHF_ID WHERE EFT.DTT_CODE = '" + arrTranDtls[0].dtt_code + "' AND EHF.PRCT_ID = '" + PRCT_ID + "')";
            ExecuteQuery(tran_update, function (arrresult) { // Get Rule params based on product and event
                try {
                    if (arrresult == "SUCCESS") { // check rule param record exists or not
                       // ExecuteQuery(transet_update, function (arrresult) { // Get Rule params based on product and event
                            try {
                                if (arrresult == "SUCCESS") { // check rule param record exists or not
                                    ExecuteQuery(final_file_status_update, function (arrresult) { // Get Rule params based on product and event
                                        try {
                                            if (arrresult == "SUCCESS") { // check rule param record exists or not
                                                console.log('.............................Leaving fr_updtstatus4Trn Functions')
                                                callbackUpdtStatus4Trns(null, "SUCCESS");
                                            } else {
                                                callbackUpdtStatus4Trns("No data found");
                                            }
                                        } catch (error) {
                                            callbackUpdtStatus4Trns(error);
                                        }
                                    });
                                } else {
                                    callbackUpdtStatus4Trns("No data found");
                                }
                            } catch (error) {
                                callbackUpdtStatus4Trns(error);
                            }
                       // });
                    } else {
                        callbackUpdtStatus4Trns("No data found");
                    }
                } catch (error) {
                    callbackUpdtStatus4Trns(error);
                }
            });
        } catch (error) {
            callbackUpdtStatus4Trns(error)
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
    //function to execute update query
    function ExecuteQuery(query, callback) {
        reqTranDBInstance.ExecuteSQLQuery(mTranDB, query, objLogInfo, function (result, error) {
            try {
                if (error) {
                    SendResponse(error);
                } else {
                    callback("SUCCESS");
                }
            } catch (error) {
                SendResponse(error);
            }
        });
    }
    //send response function
    function SendResponse(res) {
        console.log("SendResponseIP--->" + res)
        reqLogWriter.EventUpdate(objLogInfo); //  Insert into LogViewer Table
        if (res == "SUCCESS") {
            var resObj = {
                'STATUS': 'SUCCESS',
                'SUCCESS_MESSAGE': "Selected Files Uploaded Successfully.",
                'SUCCESS_DATA': [],
                'PROCESS_STATUS': "SUCCESS",
                'INFO_MESSAGE': "Selected Files Uploaded Successfully."
            }
            return callback(resObj);
        } else {
            var resObj = {
                'STATUS': 'FAILURE',
                'SUCCESS_MESSAGE': 'STATIC',
                'SUCCESS_DATA': [],
                'ERROR_CODE': "500",
                'ERROR_MESSAGE': "Selected files state change failed.",
                'ERROR_OBJECT': "",
                'PROCESS_STATUS': "FAILURE",
                'INFO_MESSAGE': "Selected files state change failed."
            }
            return callback(resObj);
        }
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
module.exports = { uploadExtension: uploadExtension };