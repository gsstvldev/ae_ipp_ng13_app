var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {
    
    
    

    /*  Created By : Daseen
    Created Date : 8-12-2022
    Modified By : sIVA hARISH
    Modified Date : 9/12/2022
    Reason for : 
     
    */
    var serviceName =  'NPSS SIM Pack 008';
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
    var dob=params.DBTR_BIRTH_DATE;
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
            objSessionLogInfo.HANDLER_CODE = 'NPSS SIM Pack 008';
            objSessionLogInfo.ACTION = 'ACTION';
            objSessionLogInfo.PROCESS = 'NPSS SIM Pack 008';
            // Get DB Connection 
            reqTranDBInstance.GetTranDBConn(headers, false, function (pSession) {
                mTranConn = pSession; //  assign connection     
                reqAuditLog.GetProcessToken(pSession, objLogInfo, function prct(error, prct_id) {
                    if (error) {
                        sendResponse(error);
                    } else {
                        var PRCT_ID = prct_id
                        var ApitrnId
                        var app_id
                        console.log(dob.slice(0,10));
                        try {
                            var TakeExtraValue = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_SIM_PACK_008' and param_code='URL'`
                            // Take Value from API Manager Table

                            ExecuteQuery1(TakeExtraValue, function (arrApiManRes) {
                                try {
                                    if (arrApiManRes.length > 0) {
                                        var arrCusTranInst = [];
                                        var objCusTranInst = {};
                                        // prepare Tran Insert
                                        var url = arrApiManRes[0].param_detail;

                                        objCusTranInst.DBTR_COUNTRY = params.DBTR_COUNTRY;
                                        objCusTranInst.PRCT_ID = PRCT_ID;
                                        objCusTranInst.PRODUCT_CODE = params.PRODUCT_CODE;
                                        objCusTranInst.MIDDLEWARE_REF_NO = params.MIDDLEWARE_REF_NO;
                                        objCusTranInst.CBS_REF_NO = params.CBS_REF_NO;
                                        objCusTranInst.INSTRUMENT_TYPE = params.INSTRUMENT_TYPE;
                                        objCusTranInst.DBTR_PRVT_ID = params.DBTR_PRVT_ID;
                                      //  objCusTranInst.VALUE_DATE = reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo);
                                     objCusTranInst.HDR_TOTAL_RECORDS = params.hdr_total_records;
                                     objCusTranInst.HDR_TOTAL_AMOUNT = params.hdr_total_amount
                                     objCusTranInst.VALUE_DATE = reqDateFormatter.GetDateAt12AM(headers, objSessionLogInfo,params.VALUE_DATE )
                                     objCusTranInst.HDR_SETTLEMENT_DATE  = reqDateFormatter.GetDateAt12AM(headers, objSessionLogInfo,params.HDR_SETTLEMENT_DATE)
                                        objCusTranInst.EXT_ORG_ID_CODE = params.EXT_ORG_ID_CODE;
                                        objCusTranInst.ISSUER_TYPE_CODE = params.ISSUER_TYPE_CODE;
                                        objCusTranInst.DBTR_BIRTH_DATE = dob.slice(0,10);
                                        objCusTranInst.DBTR_CITY_BIRTH = params.DBTR_CITY_BIRTH;
                                        objCusTranInst.DBTR_COUNTRY = params.DBTR_COUNTRY;
                                        objCusTranInst.DBTR_DOCUMENT_ID = params.DBTR_DOCUMENT_ID;
                                        objCusTranInst.INDIVIDUALIDENTIFICATIONCODE = params.INDIVIDUALIDENTIFICATIONCODE;
                                        objCusTranInst.ISSUER_TYPE_CODE = params.ISSUER_TYPE_CODE;
                                        objCusTranInst.DBTR_ACCT_NAME = params.orderingCustomer_account;
                                        objCusTranInst.OTHERACCOUNT = params.orderingCustomer_otheraccount;
                                        objCusTranInst.BASE_CURRENCY = params.orderingCustomer_accountCur;
                                        objCusTranInst.DBTR_ACCT_NAME = params.orderingCustomer_AccountName;
                                        objCusTranInst.COMPANYCODE = params.orderingCustomer_companyCode;
                                        objCusTranInst.CORETRANSACTIONTYPE = params.CORETRANSACTIONTYPE;
                                        objCusTranInst.CDTR_IBAN = params.beneficiaryCustomer_Account;
                                        objCusTranInst.OTHERACCOUNT = params.beneficiaryCustomer_otherAccount;
                                        objCusTranInst.CDTR_ACCT_NAME = params.beneficiaryCustomer_AccountName;
                                        objCusTranInst.CR_SORT_CODE = params.beneficiaryBankBic;
                                        objCusTranInst.CATEGORY_PURPOSE = params.CATEGORY_PURPOSE;
                                        objCusTranInst.CHARGE_BEARER = params.CHARGE_BEARER;
                                        objCusTranInst.REMITTANCE_INFO = params.REMITTANCE_INFO;
                                        objCusTranInst.CHARGEACCOUNT = params.CHARGEACCOUNT;
                                        objCusTranInst.CHARGECODE = params.CHARGECODE;
                                        objCusTranInst.CHARGETYPE = params.CHARGETYPE;
                                        objCusTranInst.CHARGEAMOUNT = params.CHARGEAMOUNT;
                                        objCusTranInst.CHARGENARRATION = params.CHARGENARRATION;
                                        objCusTranInst.VATACCOUNT = params.VATACCOUNT;
                                        objCusTranInst.VATAMOUNT = params.VATAMOUNT;
                                        objCusTranInst.VATNARRATION = params.VATNARRATION;
                                        objCusTranInst.CUSTOMERRATE = params.CUSTOMERRATE;
                                        objCusTranInst.TREASURYRATE = params.TREASURYRATE;
                                        objCusTranInst.CUSTOMERSPREAD = params.CUSTOMERSPREAD;
                                        objCusTranInst.CBS_POSTING_FLAG = params.CBS_POSTING_FLAG;
                                        objCusTranInst.INTRBK_STTLM_AMNT = params.INTRBK_STTLM_AMNT;
                                        objCusTranInst.HDR_MSG_ID = params.hdr_msg_id;

                                        objCusTranInst.HDR_CREATED_DATE = params.hdr_created_date;
                                        objCusTranInst.HDR_SETTLEMENT_METHOD = params.hdr_settlement_method;
                                        objCusTranInst.HDR_CLEARING_SYSTEM = params.hdr_clearing_system;
                                        objCusTranInst.INSTRUCTION_ID = params.INSTRUCTION_ID;
                                        objCusTranInst.UETR = params.UETR;
                                        objCusTranInst.CATEGORY_PURPOSE_PRTY = params.CATEGORY_PURPOSE_PRTY;
                                        objCusTranInst.EXT_PERSON_ID_CODE = params.EXT_PERSON_ID_CODE;
                                        objCusTranInst.DBTR_CUST_TYPE = params.DBTR_CUST_TYPE;
                                        objCusTranInst.CR_ACCT_IDENTIFICATION = params.CR_ACCT_IDENTIFICATION;
                                        objCusTranInst.EXT_PURPOSE_CODE = params.EXT_PURPOSE_CODE;
                                        objCusTranInst.EXT_PURPOSE_PRTY = params.EXT_PURPOSE_PRTY;
                                        objCusTranInst.DBTR_CUST_TYPE = params.DBTR_CUST_TYPE;
                                        objCusTranInst.CHANNEL_ID = params.CHANNEL_ID;
                                        objCusTranInst.DR_SORT_CODE = params.DR_SORT_CODE;
                                        objCusTranInst.CR_SORT_CODE = params.CR_SORT_CODE;
                                        objCusTranInst.DBTR_ACCT_NO = params.DBTR_ACCT_NO; 
                                        objCusTranInst.CDTR_ACCT_NO = params.CDTR_ACCT_NO; 
                                        objCusTranInst.TRAN_REF_ID = params.TRAN_REF_ID;
                                        objCusTranInst.PAYMENT_ENDTOEND_ID = params.PAYMENT_ENDTOEND_ID; 
                                        objCusTranInst.DBTR_IBAN = params.DBTR_IBAN;  
                                        objCusTranInst.INTRBK_STTLM_CUR = params.INTRBK_STTLM_CUR;
                                          objCusTranInst.TENANT_ID = params.TENANT_ID;
                                        objCusTranInst.APP_ID = '215'
                                        objCusTranInst.STATUS = 'Simulator_RCT_OP_Created'
                                        objCusTranInst.PROCESS_STATUS = 'SimulatorRCTOutwardCreated'
                                        objCusTranInst.DT_CODE = 'DT_1304_1665901130705'
                                        objCusTranInst.DTT_CODE = 'DTT_1304_1670492310194'
                                        objCusTranInst.DT_DESCRIPTION = 'transaction_group'
                                        objCusTranInst.DTT_DESCRIPTION = 'Transaction'
                                        objCusTranInst.CREATED_BY = params.CREATED_BY;
                                        objCusTranInst.CREATED_BY_NAME = params.CREATED_BY_NAME;
                                        objCusTranInst.CREATED_DATE = reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo);
                                        objCusTranInst.MODIFIED_BY = "";
                                        objCusTranInst.MODIFIED_BY_NAME = "";
                                        objCusTranInst.MODIFIED_DATE = null;
                                        objCusTranInst.SYSTEM_ID = params.SYSTEM_ID;
                                        objCusTranInst.SYSTEM_NAME = params.SYSTEM_NAME;
                                        objCusTranInst.CREATED_BY_STS_ID = "";
                                        objCusTranInst.MODIFIED_BY_STS_ID = "";
                                        objCusTranInst.created_clientip = objSessionLogInfo.CLIENTIP;
                                        objCusTranInst.created_tz = objSessionLogInfo.CLIENTTZ;
                                        objCusTranInst.created_tz_offset = objSessionLogInfo.CLIENTTZ_OFFSET;
                                        objCusTranInst.created_date_utc = reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo);
                                        objCusTranInst.created_by_sessionid = objSessionLogInfo.SESSION_ID;
                                        objCusTranInst.routingkey = headers.routingkey;
                                        arrCusTranInst.push(objCusTranInst)
                                        _BulkInsertProcessItem(arrCusTranInst, 'NPSS_API_SIM_pacs008', function callbackInsert(CusTranInsertRes) {
                                            if (CusTranInsertRes.length > 0) {
                                                fn_doapicall(url, function (result) {
                                                    if (result) {
                                                
                                                        sendResponse(null, result)
                                                    } else {
                                                        reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_CORE_001", "Data not received from API Service", result);
                                                        sendResponse(result, null);
                                                    }
                                                })

                                            } else {
                                                objresponse.status = 'FAILURE';
                                                reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_CORE_001", "Insert not succes", result);
                                                sendResponse(null, objresponse)
                                            }

                                        })

                                    } else {
                                        objresponse.status = 'FAILURE';
                                        sendResponse(null, objresponse)
                                    }

                                } catch (error) {
                                    sendResponse(error)
                                }
                            });

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

                            function fn_doapicall(url, callbackapi) {
                                try {
                                    var apiName = 'NPSS SIM Pack 008'
                                    var request = require('request');
                                    var Date = reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo);      
                                    var splitdate = Date.split(' ')
                                    var formatdate = `${splitdate[0]}T${splitdate[1]}+00:00`
                                    var valuedate = params.VALUE_DATE.split('T')[0].split('-')
                                    valuedate = `${valuedate[2]}${valuedate[1]}${valuedate[0]}`
                                    var apiURL =
                                        apiURL = url // apiURL + apiName
                                    var options = {
                                        url: apiURL,
                                        timeout: 18000000,
                                        method: 'POST',
                                        json: {

                                            "countryOfOrigin": params.DBTR_COUNTRY,
                                            "middlewareReferenceNumber": params.MIDDLEWARE_REF_NO,
                                            "coreBankReferenceNumber": params.CBS_REF_NO,
                                            "localInstrument": params.INSTRUMENT_TYPE,
                                            "organizationId": params.DBTR_PRVT_ID,
                                            "organizationSchemeCode": params.EXT_ORG_ID_CODE,
                                            "orgIssuerCode": params.ISSUER_TYPE_CODE,
                                            "BirthDate": dob.slice(0,10),
                                            "cityOfBirth": 'Dubai',
                                            "countryOfBirth": params.DBTR_COUNTRY,
                                            "individualIdentification": params.DBTR_DOCUMENT_ID,
                                            "IndividualIdentificationCode": params.INDIVIDUALIDENTIFICATIONCODE,
                                            "individualIdentificationIssuer": params.ISSUER_TYPE_CODE,
                                            "orderingCustomer": {
                                                "account": params.orderingCustomer_account,
                                                "otheraccount": params.orderingCustomer_otheraccount,
                                                "accountCur": params.orderingCustomer_accountCur,
                                                "AccountName": params.orderingCustomer_AccountName,
                                                "companyCode": params.orderingCustomer_companyCode
                                            },
                                            "valueDate": valuedate,
                                            "instructedAmount": params.INTRBK_STTLM_AMNT,
                                            "coreTransactionType": params.CORETRANSACTIONTYPE,
                                            "beneficiaryCustomer": {
                                                "Account": params.beneficiaryCustomer_Account,
                                                "otherAccount": params.beneficiaryCustomer_otherAccount,
                                                "AccountName": params.beneficiaryCustomer_AccountName
                                            },
                                            "beneficiaryBankBic": params.beneficiaryBankBic,
                                            "purposeCode": params.CATEGORY_PURPOSE,
                                            "chargeCode": params.CHARGE_BEARER,
                                            "remittanceInfo": params.REMITTANCE_INFO,
                                            "charge": {
                                                "account": params.CHARGEACCOUNT,
                                                "code": params.CHARGECODE,
                                                "type": params.CHARGETYPE,
                                                "amount": params.CHARGEAMOUNT,
                                                "narration": params.CHARGENARRATION,
                                            },
                                            "vat": {
                                                "account": params.VATACCOUNT,
                                                "amount": params.VATAMOUNT,
                                                "narration": params.VATNARRATION
                                            },
                                            "blotterNumber": "",
                                            "exchangerate": {
                                                "customerRate": params.CUSTOMERRATE,
                                                "treasuryRate": params.TREASURYRATE,
                                                "customerSpread": params.CUSTOMERSPREAD
                                            },
                                            "additionalField1": " ",
                                            "additionalField2": " ",
                                            "additionalField3": " ",
                                            "additionalField4": " ",
                                            "additionalField5": " ",
                                            "additionalField6": " ",
                                            "OfflinePostedFlag": params.CBS_POSTING_FLAG




                                        }, headers: {
                                            "X-Request-ID": "0003P4200010463216652012-11-25T23:50:56.193+01:00",
                                        "language": "EN",
                                        "timestamp":formatdate,
                                        "channel-Id": params.CHANNEL_ID,
                                        "channel-Refno": params.CHANNEL_REFNO,
                                        "channel-UserId": params.CHANNEL_USERID,
                                        "channel_product": params.CHANNEL_PRODUCT,

                                            'Content-Type': 'application/json'
                                    }
                                }



                                    console.log('------------API JSON-------' + JSON.stringify(options));
                                reqInstanceHelper.PrintInfo(serviceName, '------------API JSON-------' + JSON.stringify(options), objSessionLogInfo);
                                request(options, function (error, responseFromImagingService, responseBodyFromImagingService) {
                                    if (error) {
                                        reqInstanceHelper.PrintInfo(serviceName, '------------' + apiName + ' API ERROR-------' + error, objSessionLogInfo);
                                        sendResponse(error, null);
                                    } else {
                                        responseBodyFromImagingService.statuscode = responseFromImagingService.statusCode
                                        console.log("------API CALL SUCCESS----");
                                        callbackapi(responseBodyFromImagingService)
                                    }
                                });

                            } catch (error) {
                                reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                                sendResponse(error, null);
                            }
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

                    } catch (error) {
                        sendResponse(error)
                    }
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
        })
} catch (error) {
    reqInstanceHelper.SendResponse(serviceName, appResponse, null, objSessionLogInfo, 'IDE_SERVICE_10002', 'ERROR IN ASSIGN LOG INFO FUNCTION', error);
}
    })






});

module.exports = app;
