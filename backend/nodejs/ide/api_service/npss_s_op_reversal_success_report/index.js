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
                    npsst_id,
                    npsstpl_id,
                    Processed_date,
                    process_time,
                    accp_date_time,
                    channel_id,
                    intrbk_sttlm_cur,
                    reversal_amount,
                    exhf_id,
                    value_date,
                    cdtr_acct_no,
                    dbtr_acct_no,
                    dr_sort_code,
                    cr_sort_code,
                    uetr,
                    product_code,
                    process_type,
                    cr_acct_identification,
                    QUEUE,
                    TRAN_STATUS,
                    tenant_id,
                    processing_system,
                    payment_type,
                    process_group,
                    T24_RETURN_CODE,
                    T24_RETURN_DESC,
                    CBUAE_RETURN_CODE,
                    CBUAE_RETURN_DESC,
                    REVERSAL_CODE,
                    REVERSAL_DESC,
                    MESSAGE_TYPE,
                    DEPARTMENT_NAME,
                    TRAN_AMOUNT,
                    reversalamount,
                    SENDER_REFERENCE_NUMBER,
                    DEBTOR_ACCOUNT,
                    DEBTOR_NAME,
                    CREDITOR_ACCOUNT,
                    CREDITOR_NAME,
                    BENEFICIARY_BANK,
                    PURPOSE_CODE,
                    IPP_REFERENCE_NUMBER,
                    T24_FT_REF_NUMBER,
                    created_date,
                    SOURCE_CHANNEL,
                    ORIGINATOR_REF_NUMBER
                from
                    (
                    select
                        a.npsst_id,
                        a.value_date ,
                        a.created_date ,		
                        a.cdtr_acct_no,
                        a.cdtr_acct_name as CREDITOR_NAME,		
                        A.INTRBK_STTLM_AMNT as TRAN_AMOUNT,
                        b.INTRBK_STTLM_AMNT as reversal_amount,
                        a.reversal_amount as reversalamount,
                        a.intrbk_sttlm_cur,
                        Fn_card_decrypt_and_mask_rpt(a.dbtr_acct_no) as dbtr_acct_no,
                        Fn_card_decrypt_and_mask_rpt(a.cr_acct_identification) as cr_acct_identification,
                        a.dbtr_acct_name as DEBTOR_NAME,		
                        a.dr_sort_code,
                        a.cr_sort_code,
                        A.DEPARTMENT_CODE as DEPARTMENT_NAME,
                        a.uetr,
                        a.ext_purpose_code as PURPOSE_CODE,
                        a.product_code,
                        a.channel_id,
                        a.channel_id as SOURCE_CHANNEL ,
                        a.process_type,
                        a.dbtr_iban as DEBTOR_ACCOUNT,		
                        a.cdtr_iban as CREDITOR_ACCOUNT,		
                        a.clrsysref as IPP_REFERENCE_NUMBER,
                        a.payment_endtoend_id as SENDER_REFERENCE_NUMBER,
                        a.accp_date_time,
                        a.exhf_id,
                        a.tenant_id,
                        a.processing_system,
                        a.TRAN_REF_ID as ORIGINATOR_REF_NUMBER,
                        case
                            when a.exhf_id is null then Upper('RCT')
                            else Upper('BCT')
                        end as payment_type,
                        a.process_group,
                        ntpl.npsstpl_id,
                        NTPL.process_name as MESSAGE_TYPE,
                        NTPL.PROCESS_REF_NO as T24_FT_REF_NUMBER,
                        To_char(a.created_date, 'YYYY-MM-DD HH:MI:SS:MS AM') as Processed_date,
                        ntpl.process_status as QUEUE,
                        ntpl.status as TRAN_STATUS,
                        cmb.bank_name as BENEFICIARY_BANK,
                        ntpl.T24_RETURN_CODE,
                        CONCAT(ntpl.T24_RETURN_CODE, '-', T24RC.RETURN_DESCRIPTION) as T24_RETURN_DESC,
                        ntpl.CBUAE_RETURN_CODE,
                        CONCAT(ntpl.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) as CBUAE_RETURN_DESC,
                        ntpl.REVERSAL_CODE,
                        CONCAT(ntpl.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) as REVERSAL_DESC,
                        ntpl.process_time 
                    from
                        npss_transactions A
                    inner join npss_transactions b on a.uetr = b.uetr 	
                    inner join npss_trn_process_log ntpl on a.uetr = ntpl.uetr 
                    left join CORE_NC_CODE_DESCRIPTIONS CCD on
                        CCD.CD_CODE = ntpl.REVERSAL_CODE
                        and CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'
                        and CCD.NEED_SYNC = 'Y'
                    left join CORE_NC_RETURN_CODES T24RC on
                        T24RC.RETURN_CODE = ntpl.T24_RETURN_CODE
                        and T24RC.PROCESSING_SYSTEM = 'T24'
                        and T24RC.NEED_SYNC = 'Y'
                    left join CORE_NC_RETURN_CODES CBUAERC on
                        CBUAERC.RETURN_CODE = ntpl.CBUAE_RETURN_CODE
                        and CBUAERC.PROCESSING_SYSTEM = 'CBUAE'
                        and CBUAERC.NEED_SYNC = 'Y'
                    left join core_member_banks cmb on cmb.bic_code = a.cr_sort_code 
                        and cmb.NEED_SYNC = 'Y'
                        and ntpl.process_name = 'Place pacs.007' )VW where process_type = 'OP' and Date(created_date)=CURRENT_DATE- INTERVAL '${params.onOrBefore} days'
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
