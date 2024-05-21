var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {








    /*  Created By :   Subramanian
    Created Date : 21/05/2024
    Reason :NPSS AMB OP REVERSAL SUCCESS Sftp csv file creations wi:3817
    */
    var serviceName = 'NPSS AMB OP REVERSAL SUCCESS';
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
            objSessionLogInfo.HANDLER_CODE = 'NPSS AMB OP REVERSAL SUCCESS';
            objSessionLogInfo.ACTION = 'ACTION';
            objSessionLogInfo.PROCESS = 'NPSS AMB OP REVERSAL SUCCESS   ';
            reqInstanceHelper.PrintInfo(serviceName, "........................ api request body..............." + JSON.stringify(params), objSessionLogInfo);
            //reqInstanceHelper.PrintInfo(serviceName, "........................ api request headers..............."+JSON.stringify(headers), objSessionLogInfo);
            // Get DB Connection 
            reqTranDBInstance.GetTranDBConn(headers, false, function (pSession) {
                mTranConn = pSession; //  assign connection     
    
    
                try {
    
                    var TakeData = `select
                        distinct UETR,
                        NPSST_ID,
                        DATEMI,
                        DEPARTMENT_CODE,
                        PROCESS_GROUP,
                        CHANNEL_ID,
                        CHANNEL_PRODUCT,
                        CHANNEL_REFNO,
                        INTRBK_STTLM_CUR,
                        INTRBK_STTLM_AMNT,
                        EXHF_ID,
                        MODIFIED_DATE_UTC,
                        VALUE_DATE,
                        CREATED_DATE,
                        MODIFIED_DATE_UTC,
                        CDTR_ACCT_NO,
                        CDTR_ACCT_NAME,
                        FN_PCIDSS_DECRYPT(DBTR_ACCT_NO,
                        $PCIDSS_KEY) as DBTR_ACCT_NO,
                        DBTR_ACCT_NAME,
                        DR_SORT_CODE,
                        CR_SORT_CODE,
                        REMITTANCE_INFO,
                        CATEGORY_PURPOSE,
                        ISSUER_TYPE_CODE,
                        HDR_MSG_ID,
                        PRODUCT_CODE,
                        CHANNEL_SUB_PRODUCT,
                        CHANNEL_TRAN_CODE,
                        PROCESS_TYPE,
                        DBTR_PHONE_NO,
                        DBTR_EMAIL_ID,
                        DBTR_DOCUMENT_ID,
                        DBTR_IBAN,
                        CDTR_PHONE_NO,
                        CDTR_EMAIL_ID,
                        CDTR_DOCUMENT_ID,
                        CDTR_IBAN,
                        CLRSYSREF,
                        PAYMENT_ENDTOEND_ID,
                        PROCESS_STATUS,
                        STATUS,
                        DT_CODE,
                        DTT_CODE,
                        TENANT_ID,
                        TS_ID,
                        LOCKED_BY,
                        LOCKED_BY_NAME,
                        VERSION_NO,
                        DBTR_PRVT_ID,
                        DBTR_OTHER_ISSUER,
                        TRAN_REF_ID,
                        PROCESSING_SYSTEM,
                        REMARKS,
                        REVERSAL_AMOUNT,
                        OUTWARD_FILE_NAME
                    from
                        (
                        select
                            A.NPSST_ID,
                            A.VALUE_DATE,
                            A.MODIFIED_DATE_UTC,
                            A.CREATED_DATE,
                            TO_CHAR(A.CREATED_DATE,
                            'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,
                            A.CDTR_ACCT_NO,
                            A.CDTR_ACCT_NAME,
                            A.INTRBK_STTLM_AMNT,
                            A.INTRBK_STTLM_CUR,
                            A.DBTR_ACCT_NO,
                            A.DBTR_ACCT_NAME,
                            A.DR_SORT_CODE,
                            A.CR_SORT_CODE,
                            A.DEPARTMENT_CODE,
                            A.PROCESS_GROUP,
                            NTPL.UETR,
                            A.CATEGORY_PURPOSE,
                            A.ISSUER_TYPE_CODE,
                            A.HDR_MSG_ID,
                            A.PRODUCT_CODE,
                            A.CHANNEL_ID,
                            A.CHANNEL_REFNO,
                            A.CHANNEL_PRODUCT,
                            A.CHANNEL_SUB_PRODUCT,
                            A.CHANNEL_TRAN_CODE,
                            A.PROCESS_TYPE,
                            A.DBTR_PHONE_NO,
                            A.DBTR_EMAIL_ID,
                            A.DBTR_DOCUMENT_ID,
                            A.DBTR_IBAN,
                            A.CDTR_PHONE_NO,
                            A.CDTR_EMAIL_ID,
                            A.CDTR_DOCUMENT_ID,
                            A.CDTR_IBAN,
                            A.CLRSYSREF,
                            A.PAYMENT_ENDTOEND_ID,
                            A.TRAN_REF_ID,
                            A.ACCP_DATE_TIME,
                            A.EXHF_ID,
                            A.REMITTANCE_INFO,
                            A.INWARD_FILE_NAME,
                            A.PROCESS_STATUS,
                            A.CBS_REF_NO,
                            A.STATUS,
                            A.DT_CODE,
                            A.DTT_CODE,
                            A.TENANT_ID,
                            A.VERSION_NO,
                            A.CR_ACCT_IDENTIFICATION,
                            A.DBTR_PRVT_ID,
                            A.DBTR_OTHER_ISSUER,
                            TS.TS_ID,
                            TS.LOCKED_BY,
                            TS.LOCKED_BY_NAME,
                            A.PROCESSING_SYSTEM,
                            A.REMARKS,
                            A.REVERSAL_AMOUNT,
                            NTPL.REVERSAL_CODE,
                            NTPL.NPSSTPL_ID,
                            NTPL.ADDITIONAL_INFO,
                            NTPL1.PROCESS_REF_NO,
                            NTPL.NPSSTRRD_REFNO,
                            A.OUTWARD_FILE_NAME
                        from
                            NPSS_TRANSACTIONS A
                        inner join NPSS_TRN_PROCESS_LOG NTPL on
                            NTPL.UETR = A.UETR
                        left join NPSS_TRN_PROCESS_LOG NTPL1 on
                            NTPL1.UETR = A.UETR
                            and NTPL1.STATUS = 'IP_RCT_POSTING_SUCCESS'
                            and NTPL1.PROCESS_STATUS = 'RCTCompleted'
                        inner join TRANSACTION_SET TS on
                            TS.TRN_ID = A.NPSST_ID
                            and TS.DTT_CODE = A.DTT_CODE
                        order by
                            A.NPSST_ID desc) VW
                    where
                        PROCESS_TYPE = 'OP'   and Date(created_date)=CURRENT_DATE `
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
    
                            // privateKeyFormation = await fs.readFileSync(`D:\\SQL-Postgresql\\N16 backend pack (unmodified)\\N16 backend pack\\sftp_with_pass.pem`, { encoding: 'utf8', flag: 'r' }); //UNCMMENT WHENEVER RUNNING THE CODE IN LOCAL 
    
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
