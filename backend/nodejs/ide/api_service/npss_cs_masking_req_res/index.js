var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {

    /*  Created By :sIVA hARISH
    Created Date : 07-06-2023
     Modified_by : Siva Harish
     Modified_date : 08/06/2023
      Modified_date : 09/06/2023
    */
     var serviceName = ' NPSS (CS) Masking Request Response ';
     var reqInstanceHelper = require($REFPATH + 'common/InstanceHelper'); ///  Response,error,info msg printing        
     var reqTranDBInstance = require($REFPATH + "instance/TranDBInstance.js"); /// postgres & oracle DB pointing        
     var reqLogInfo = require($REFPATH + 'log/trace/LogInfo'); /// Log information Detail 
     var reqAuditLog = require($REFPATH + 'log/audit/AuditLog');
     var reqDateFormatter = require($REFPATH + 'common/dateconverter/DateFormatter');
     var params = appRequest.body.PARAMS; //  Client input fromm Server
     var headers = appRequest.headers; // header details 
     var objSessionLogInfo = null; // set value is null
     var reqAsync = require('async');
     var mTranConn = "";
     var Payment_Id
     var uetr
     var moment = require('moment')
     const xml2js = require('xml2js');
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
             objSessionLogInfo.HANDLER_CODE = ' NPSS (CS) Masking Request Response ';
             objSessionLogInfo.ACTION = 'ACTION';
             objSessionLogInfo.PROCESS = ' NPSS (CS) Masking Request Response ';
             // Get DB Connection 
             reqTranDBInstance.GetTranDBConn(headers, false, async function (pSession) {
                 mTranConn = pSession; //  assign connection     
                 try {
                     let ProcessDetailjson = [
                         {
                             process_name: "Prepaid Card Validation",
                             request_name: "card_identifier_value",
                             response_name: "card_number",
                             type: "JSON"
                         },
                         {
                             process_name: "Prepaid Card Posting",
                             request_name: "card_identifier_value",
                             response_name: "card_identifier_value",
                             type: "JSON"
                         },
                         {
                             process_name: "Reversal Prepaid Card Posting",
                             request_name: "card_identifier_value",
                             response_name: "card_identifier_value",
                             type: "JSON"
                         }, {
                             process_name: "Credit Card Validation",
                             request_name: "cardNumber",
                             response_name: "cardNumber",
                             type: "JSON"
                         }, {
                             process_name: "Credit Card Posting",
                             request_name: "cardNumber",
                             response_name: "cardNumber",
                             type: "JSON"
                         }, {
                             process_name: "Reversal Credit Card Posting",
                             request_name: "cardNumber",
                             response_name: "cardNumber",
                             type: "JSON"
                         }, {
                             process_name: "Credit Card Enquiry",
                             request_name: "cardNumber",
                             response_name: "",
                             type: "JSON"
                         }, {
                             process_name: " Credit Card Pool Ac Posting",
                             request_name: "cardNo",
                             response_name: "",
                             type: "JSON"
                         }, {
                             process_name: "Prepaid Card Ac Posting",
                             request_name: "cardNo",
                             response_name: "",
                             type: "JSON"
                         }, {
                             process_name: "Elpaso Transient Ac Posting",
                             request_name: "cardNo",
                             response_name: "",
                             type: "JSON"
                         }, {
                             process_name: "Receive pacs008",
                             request_name: "<CdtrAcct><Id><Othr><Id>",
                             response_name: "",
                             requestEndtag: "Id",
                             type: "XML"
                         }, {
                             process_name: "Place Pacs008",
                             request_name: "<CdtrAcct><Id><Othr><Id>",
                             response_name: "",
                             requestEndtag: "Id",
                             type: "XML"
                         }
 
                     ]
                     let Gettrndetails = await ProcessDetailjson.filter((x) => {
                         if (x.process_name.toUpperCase() == params.processName.toUpperCase()) {
                             return x
                         }
                     })
                     if(Gettrndetails.length > 0){
                        let Takedata
                        let dataType
                        if(Gettrndetails[0].type == 'JSON'){
                            dataType = 'JSON'
                            Takedata  = `select fn_pcidss_decrypt(request_data_json,$PCIDSS_KEY ) as request_json,fn_pcidss_decrypt(response_data_json,$PCIDSS_KEY) as response_json from npss_trn_process_log where npsstpl_id = '${params.npsstpl_id}'`
                        }else{
                            dataType = 'XML'
                            Takedata  = `select fn_pcidss_decrypt(message_data,$PCIDSS_KEY ) as request_json from npss_trn_req_resp_dtls where npsstrrd_id = '${params.npsstrrd_id}'`  
                        }
                        
                        ExecuteQuery1(Takedata, async function (arrdata) {
                            try {
                                if (arrdata.length > 0) {
                                    let Chckmskeli = `select param_category,param_detail from core_nc_system_setup where param_category = 'PROCESS_LOG_MASKING' and param_code = 'ROLE_ID' and param_detail = '${params.roleId}'`
                                    ExecuteQuery1(Chckmskeli, async function (arrmsk) {
                                        if (arrmsk.length > 0) {
                                            let Prepareparam = await PrepareData(arrdata, ProcessDetailjson)
                                            objresponse.status = 'SUCCESS'
                                            objresponse.data.type = dataType
                                            objresponse.data.responsejson = Prepareparam.finalresjson || ''
                                            objresponse.data.requestjson = Prepareparam.finalreqjson || ''
                                            sendResponse(null, objresponse)
                                        } else {
                                            objresponse.status = 'SUCCESS'
                                            objresponse.data.type = dataType
                                            objresponse.data.responsejson = arrdata[0].response_json || ''
                                            objresponse.data.requestjson = arrdata[0].request_json || ''
                                            sendResponse(null, objresponse)
                                        }
                                    })
    
                                } else {
                                    objresponse.status = 'SUCCESS'
                                    objresponse.data.type = dataType
                                    objresponse.data.responsejson = ''
                                    objresponse.data.requestjson = ''
                                    sendResponse(null, objresponse)
                                }
    
                            } catch (error) {
                                sendResponse(error)
                            }
                        });
                     }else{
                        let findData
                        let curntBtnName = params.buttonName.toUpperCase()
                       
                        if(curntBtnName != "VIEW REQ AND RES"){
                            findData  = `select fn_pcidss_decrypt(message_data,$PCIDSS_KEY ) as request_json from npss_trn_req_resp_dtls where npsstrrd_id = '${params.npsstrrd_id}'`  
                            
                        }else{
                            findData  = `select fn_pcidss_decrypt(request_data_json,$PCIDSS_KEY ) as request_json,fn_pcidss_decrypt(response_data_json,$PCIDSS_KEY) as response_json from npss_trn_process_log where npsstpl_id = '${params.npsstpl_id}'`
                        } 

                        ExecuteQuery1(findData, function (arrnotmskdata) {
                            if (arrnotmskdata.length > 0) {
                                objresponse.status = 'SUCCESS'
                                if(curntBtnName != "VIEW REQ AND RES"){
                                    objresponse.data.type = 'XML'
                                    objresponse.data.responsejson = ''
                                    objresponse.data.requestjson = arrnotmskdata[0].request_json || ''
                                }else{
                                    objresponse.data.type = 'JSON'
                                    objresponse.data.responsejson = arrnotmskdata[0].response_json || ''
                                    objresponse.data.requestjson = arrnotmskdata[0].request_json || ''
                                }
                                
                                sendResponse(null, objresponse)
                            } else {
                                if(curntBtnName != "VIEW REQ AND RES"){
                                    objresponse.data.type = 'XML'
                                }else{
                                    objresponse.data.type = 'JSON'
                                }
                                objresponse.status = 'SUCCESS'
                               
                                objresponse.data.responsejson =  ''
                                objresponse.data.requestjson =  ''
                                sendResponse(null, objresponse)
                            }
                        })

                     }
                     
 
 
                     function PrepareData(arrdata, ProcessDetailjson) {
                         return new Promise(async (resolve, reject) => {
                             let PrepareResponse = {}
                             let Getprsdetail = await ProcessDetailjson.filter((x) => {
                                 if (x.process_name.toUpperCase() == params.processName.toUpperCase()) {
                                     return x
                                 }
                             })
                             let GetreplaceJson
                             if (Getprsdetail.length > 0) {
                                 if (Getprsdetail[0].type == 'JSON') {
                                     if ((arrdata[0].request_json != '' && arrdata[0].request_json != null) && (arrdata[0].response_json != '' && arrdata[0].response_json != null)) {
                                         let finddataType = await isJson(arrdata[0].request_json, arrdata[0].response_json)
                                         if (finddataType.reqjsonVld == true) {
                                             GetreplaceJson = await GetReplaceValue(Getprsdetail[0].request_name, arrdata[0].request_json)
                                             PrepareResponse.finalreqjson = GetreplaceJson.finaljson
                                         } else {
                                             PrepareResponse.finalreqjson = arrdata[0].request_json
                                         }
                                         if (finddataType.resjsonVld == true) {
                                             if (Getprsdetail[0].response_name != '') {
                                                 GetreplaceJson = await GetReplaceValue(Getprsdetail[0].response_name, arrdata[0].response_json)
                                                 PrepareResponse.finalresjson = GetreplaceJson.finaljson
                                             } else {
                                                 PrepareResponse.finalresjson = arrdata[0].response_json
                                             }
                                         } else {
                                             PrepareResponse.finalresjson = arrdata[0].response_json
                                         }
 
                                     } else if (arrdata[0].request_json != '' && arrdata[0].request_json != null) {
                                         let finddataType = await isJson(arrdata[0].request_json, '')
                                         if (finddataType.reqjsonVld == true) {
                                             if (finddataType.reqjsonVld == true) {
                                                 GetreplaceJson = await GetReplaceValue(Getprsdetail[0].request_name, arrdata[0].request_json)
                                                 PrepareResponse.finalreqjson = GetreplaceJson.finaljson
                                             } else {
                                                 PrepareResponse.finalreqjson = arrdata[0].request_json
                                             }
                                         } else {
                                             PrepareResponse.finalreqjson = arrdata[0].request_json
                                         }
                                     } else {
                                         let finddataType = await isJson('', arrdata[0].response_json)
                                         if (finddataType.resjsonVld == true) {
                                             if (Getprsdetail[0].response_name != '') {
                                                 GetreplaceJson = await GetReplaceValue(Getprsdetail[0].response_name, arrdata[0].response_json)
                                                 PrepareResponse.finalresjson = GetreplaceJson.finaljson
                                             } else {
                                                 PrepareResponse.finalresjson = arrdata[0].response_json
                                             }
                                         } else {
                                             PrepareResponse.finalresjson = arrdata[0].response_json
                                         }
                                     }
                                 } else {
                                     if (arrdata[0].request_json != '' && arrdata[0].request_json != null) {
                                         let chkXML = /^<([a-zA-Z]+\d*)|<\?xml/g;
                                         let isXML = chkXML.test(arrdata[0].request_json)
                                         if (isXML == true) {
                                             let xmlpattern = new RegExp(Getprsdetail[0].request_name + "(.*?)(<\/" + Getprsdetail[0].requestEndtag + ">)");
                                             try {
                                                 let FindTagpathvalue = arrdata[0].request_json.match(xmlpattern)
                                                 if (FindTagpathvalue != null && FindTagpathvalue[1].length > 2) {
                                                     let Formedvalue = FindTagpathvalue[1].replace(FindTagpathvalue[1].substring(2, FindTagpathvalue[1].length - 2), 'XXXXXXXXXXXX')
                                                     let ReplacePath = Getprsdetail[0].request_name.replaceAll("<", "").split(">");
                                                     ReplacePath.pop();
                                                     ReplacePath.join("/");
                                                     let regexPattern = new RegExp("<(" + ReplacePath.join("><") + ")>(.*?)</(" + ReplacePath[ReplacePath.length - 1] + ")>", "g");
                                                     let formatXML = arrdata[0].request_json.replace(regexPattern, '<$1>' + Formedvalue + '<$3>');
                                                     PrepareResponse.finalreqjson = formatXML
                                                     PrepareResponse.finalresjson =   ''
                                                 } else {
                                                     PrepareResponse.finalreqjson = arrdata[0].request_json
                                                     PrepareResponse.finalresjson =   ''
                                                 }
                                             } catch (error) {
                                                 PrepareResponse.finalreqjson = arrdata[0].request_json
                                                 PrepareResponse.finalresjson =   ''
                                             }
 
                                         } else {
                                             PrepareResponse.finalreqjson = arrdata[0].request_json
                                             PrepareResponse.finalresjson =   ''
                                         }
 
                                     } else {
                                         PrepareResponse.finalreqjson = arrdata[0].request_json
                                         PrepareResponse.finalresjson = ''
                                     }
                                 }
                             } else {
                                 objresponse.status = 'Process Name Mismatch'
                                 sendResponse(null, objresponse)
                             }
 
                             resolve(PrepareResponse)
                         })
                     }
 
                     function isJson(request_json, response_json) {
                         return new Promise((resolve, reject) => {
                             let Jsonvald = {}
                             if (request_json != '') {
                                 try {
                                     if (JSON.parse(request_json)) {
                                         Jsonvald.reqjsonVld = true
                                     } else {
                                         Jsonvald.reqjsonVld = false
                                     }
 
                                 } catch (error) {
                                     Jsonvald.reqjsonVld = false
                                 }
 
                             } else {
                                 Jsonvald.reqjsonVld = false
                             }
 
                             if (response_json != '') {
                                 try {
                                     if (JSON.parse(response_json)) {
                                         Jsonvald.resjsonVld = true
                                     } else {
                                         Jsonvald.resjsonVld = false
                                     }
 
                                 } catch (error) {
                                     Jsonvald.resjsonVld = false
                                 }
 
                             } else {
                                 Jsonvald.resjsonVld = false
                             }
 
                             resolve(Jsonvald)
                         })
                     }
 
                     function GetReplaceValue(keyTofind, json) {
                         return new Promise((resolve, reject) => {
                             let Response = {}
                             let findReqKeyvalue = new RegExp(`"${keyTofind}"\\s*:\\s*"([^"]+)"`);
                             let ReqValue = json.match(findReqKeyvalue);
                             if (ReqValue != null && ReqValue[1].length > 2) {
                                 let FormatValue = ReqValue[1].replace(ReqValue[1].substring(2, ReqValue[1].length - 2), 'XXXXXXXXXXXX')
                                 let pattern = new RegExp(`("${keyTofind}"\\s*:\\s*)"[^"]+"`); //Replace Regex
                                 Response.finaljson = json.replace(pattern, `$1"${FormatValue}"`);
                             } else {
                                 Response.finaljson = json
                             }
                             resolve(Response)
                         })
                     }
                     function ExecuteQuery1(query, callback) {
                         reqTranDBInstance.ExecuteSQLQuery(mTranConn, query, objSessionLogInfo, function (result, error) {
                             try {
                                 if (error) {
                                     sendResponse(error)
                                 } else {
                                     if (result.rows.length > 0) {
                                         callback(result.rows);
                                     } else {
                                         callback([]);
                                     }
                                 }
                             } catch (error) {
                                 sendResponse(error)
                             }
                         });
                     }
 
 
 
 
 
                 } catch (error) {
                     sendResponse(error)
                 }
 
 
 
 
                 //Send Response Function Definition
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
 
             })
         } catch (error) {
             reqInstanceHelper.SendResponse(serviceName, appResponse, null, objSessionLogInfo, 'IDE_SERVICE_10002', 'ERROR IN ASSIGN LOG INFO FUNCTION', error);
         }
     })
 
 
 
 



});

module.exports = app;
