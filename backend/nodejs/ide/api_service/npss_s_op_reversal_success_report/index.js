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

                    var TakeData = `select TRAN_DATE,
                    uetr,
                    DR_IBAN,
                    ORIGINAL_AMOUNT,
                    Dr_Name,
                    process_group,
                    CHANNEL,
                    CR_BIC,
                    CR_IBAN,
                    E2E_REF_ID,
                    npsst_id,
                    npsstpl_id,
                    datemi,
                    accp_date_time,
                    intrbk_sttlm_cur,
                    exhf_id,
                    cdtr_acct_no,
                    DR_ACCOUNT_IDENTIFICATION,
                    dr_sort_code,
                    product_code,
                    process_type,
                    cr_acct_identification,
                    tenant_id,
                    tran_ref_id,
                    processing_system,
                    process_group,
                    bank_name,
                    department_code,
                    REVERSAL_CODE,
                    REVERSAL_CODE_DESC,
                    process_name,
                    processname,
                    DEPARTMENT_NAME,
                    TRANSACTION_DATE,
                    BENEFICIARY_BANK,
                    PURPOSE_CODE,
                    IPP_REFERENCE_NUMBER,
                    T24_FT_REF_NUMBER,
                    ORIGINATOR_REF_NUMBER,
                    QUEUE,
                    TRAN_STATUS,
                    reversal_amount
                from
                    (
                    select
                        a.npsst_id,
                        a.value_date as TRAN_DATE,
                        a.created_date as TRANSACTION_DATE,
                        a.cdtr_acct_no,
                        a.cdtr_acct_name , 
                        a.intrbk_sttlm_amnt as ORIGINAL_AMOUNT,
                        a.intrbk_sttlm_cur,
                        Fn_card_decrypt_and_mask_rpt(a.dbtr_acct_no) as DR_ACCOUNT_IDENTIFICATION,
                        Fn_card_decrypt_and_mask_rpt(a.cr_acct_identification) as cr_acct_identification,
                        a.dbtr_acct_name as Dr_Name,
                        a.dr_sort_code,
                        a.cr_sort_code as CR_BIC,
                        a.department_code as DEPARTMENT_NAME,
                        a.department_code,
                        a.uetr,
                        a.ext_purpose_code as PURPOSE_CODE,
                        a.product_code,
                        a.channel_id AS CHANNEL ,
                        a.process_type,
                        a.dbtr_iban as DR_IBAN,
                        a.cdtr_iban as CR_IBAN,
                        a.clrsysref as IPP_REFERENCE_NUMBER,
                        a.payment_endtoend_id as E2E_REF_ID,
                        a.accp_date_time,
                        a.exhf_id,
                        a.tenant_id,
                        a.processing_system,
                        a.process_group,
                        ntpl.npsstpl_id,
                        ntpl.process_name,
                        pl.process_name as processname,
                        To_char(ntpl.created_date, 'YYYY-MM-DD HH:MI:SS:MS AM') as datemi,
                        a.process_status as QUEUE,
                        a.status as TRAN_STATUS,
                        ntpl.process_ref_no as T24_FT_REF_NUMBER,
                        a.tran_ref_id,
                        a.tran_ref_id as ORIGINATOR_REF_NUMBER,
                        a.reversal_amount,
                        cmb.bank_name,
                        cmb.bank_name as BENEFICIARY_BANK,
                        ntpl.REVERSAL_CODE,
                        CCD.CD_DESCRIPTION as REVERSAL_CODE_DESC
                    from
                        npss_transactions A
                    inner join npss_trn_process_log ntpl on a.uetr = ntpl.uetr and ntpl.process_name = 'Place Pacs.007' 
                    left join CORE_NC_CODE_DESCRIPTIONS CCD on
                        CCD.CD_CODE = ntpl.REVERSAL_CODE
                        and CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'
                        and CCD.NEED_SYNC = 'Y'
                    left join core_member_banks cmb on cmb.bic_code = a.cr_sort_code
                        and cmb.NEED_SYNC = 'Y'
                    inner join npss_trn_process_log pl on a.uetr = pl.uetr and pl.process_name = 'Receive Pacs004')VW  where process_type = 'OP'  and Date(TRANSACTION_DATE)=CURRENT_DATE- INTERVAL '${params.onOrBefore} days'  
                order by
                    npsst_id,npsstpl_id`
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
                        return new Promise(async (resolve, reject) => {
                            let b = Object.keys(arr[0])
                            let capitalKey = await convertCapital(b)
                            let hdr = [];
                            capitalKey.forEach((x) => {
                                let obj = {
                                    'id': x.replaceAll(' ', "_").toLowerCase(),
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

                            // privateKeyFormation = await fs.readFileSync(process.env.SFTP_PATH, { encoding: 'utf8', flag: 'r' });
                            //  connectObj.privateKey = Buffer.from(privateKeyFormation);
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

                  
                     // first letter capital for header data               
                     function convertCapital(b) {
                        return new Promise((resolve, reject) => {

                            let c = []
                            b.forEach((x) => c.push((x.replaceAll('_', " "))))
                            let response = []
                           c.forEach( (str) =>response.push((str.replace(/\b[a-z]/g, char => char.toUpperCase())))
                           )
                           console.log(response)
                            resolve(response)
                        })
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
