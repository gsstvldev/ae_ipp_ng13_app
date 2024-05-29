var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function (appRequest, appResponse, next) {








    /*  Created By :   Subramanian
    Created Date : 21/05/2024
    Reason :NPSS  AMB OP Transaction Details Report Sftp csv file creations wi:3816
    */
    var serviceName = 'NPSS  AMB OP Transaction Details Report';
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
            objSessionLogInfo.HANDLER_CODE = 'NPSS  AMB OP Transaction Details Report';
            objSessionLogInfo.ACTION = 'ACTION';
            objSessionLogInfo.PROCESS = 'NPSS AMB OP Transaction Details Report';
            reqInstanceHelper.PrintInfo(serviceName, "........................ api request body..............." + JSON.stringify(params), objSessionLogInfo);
            //reqInstanceHelper.PrintInfo(serviceName, "........................ api request headers..............."+JSON.stringify(headers), objSessionLogInfo);
            // Get DB Connection 
            reqTranDBInstance.GetTranDBConn(headers, false, function (pSession) {
                mTranConn = pSession; //  assign connection     


                try {

                    var TakeData = `SELECT
                    DISTINCT UETR,
                    process_status,
                    status,
                    created_date,
                    value_date,
                    DEPARTMENT_NAME,
                    payment_endtoend_id,
                    Debtor_Account,
                    Debtor_Name,
                    Creditor_Account,
                    Creditor_Name,
                    cr_sort_code,
                    SOURCE_CHANNEL,
                    BENEFICIARY_BANK,
                    API_Success_Failure,
                    TRANSACTION_AMOUNT_RANGE,
                    Purpose_codes,
                    SENDER_REFERENCE_NUMBER,
                    FN_CARD_DECRYPT_AND_MASK_RPT(CR_ACCT_IDENTIFICATION) AS CR_ACCT_IDENTIFICATION,
                    FN_CARD_DECRYPT_AND_MASK_RPT(DBTR_ACCT_NO) AS DBTR_ACCT_NO,
                    CB_ERRORS,
                    Core_Bank_Errors,
                    maker,
                    checker,
                    process_group,
                    Transaction_id,
                    CATEGORY_PURPOSE,
                    OUTWARD_FILE_NAME,
                    T24_FT_REFERENCE_NUMBER,
                        End_to_End_ID,
                    process_type,clrsysref,
                    Batch_Payment_Flag
                FROM (
                    SELECT
                        NTPL.UETR,
                        NT.process_status,
                        NT.status,
                        NT.created_date,
                        NT.value_date,
                        nt.department_code AS DEPARTMENT_NAME,
                        case when NT.process_group='IBAN' then 'WEBI'
                             when NT.process_group='P2P' then 'MP2P'
                             when NT.process_group='P2B' then 'MP2B'
                             when NT.process_group='MANUAL' then 'WEBI'
                             end AS Purpose_codes,
                        NT.payment_endtoend_id,
                        NT.dbtr_iban AS Debtor_Account,
                        NT.dbtr_acct_name AS Debtor_Name,
                        NT.cdtr_iban AS Creditor_Account,
                        NT.cdtr_acct_name AS Creditor_Name,
                        NT.cr_sort_code,
                        NT.channel_id AS SOURCE_CHANNEL,
                        NT.channel_refno AS SENDER_REFERENCE_NUMBER,
                        NT.process_type,
                        NT.tenant_id,
                        NT.maker,
                        NT.checker,
                        NT.cr_acct_identification,
                        NT.dbtr_acct_no,
                        NT.process_group,
                        NT.CATEGORY_PURPOSE,
                        NT.OUTWARD_FILE_NAME,
                        NT.intrbk_sttlm_amnt AS TRANSACTION_AMOUNT_RANGE,
                        a13.CBUAERETURNCODE AS CB_ERRORS,
                        a11.T24RETURNCODE AS Core_Bank_Errors,
                        a15.PROCESS_REF_NO as clrsysref, 
                        nt.PAYMENT_ENDTOEND_ID AS End_to_End_ID,
                        cmb.bank_name AS BENEFICIARY_BANK,
                        cse.s_description,
                        ntpl.process_name,
                        CASE
                            when NT.process_group ='BCT' THEN 'Y'
                      else 'N'
                        END AS Batch_Payment_Flag,
                        CASE
                            WHEN NT.process_group IN ('P2B', 'P2P') THEN nt.TRAN_REF_ID
                            WHEN NT.process_group IN ('IBAN') THEN nt.MIDDLEWARE_REF_NO
                        END AS Transaction_id,
                        CASE
                            WHEN NT.process_group IN ('IBAN','BCT') THEN nt.TRAN_REF_ID
                            WHEN NT.process_group IN ('P2B', 'P2P') THEN nt.PAYMENT_ENDTOEND_ID
                        END AS T24_FT_REFERENCE_NUMBER,
                        CASE
                            WHEN nt.process_status NOT IN ('RCTRejected') THEN 'Success'
                            WHEN nt.process_status = 'RCTRejected' THEN 'Failure'
                        END AS API_Success_Failure
                    FROM
                       npss_transactions nt
                    INNER JOIN NPSS_TRN_PROCESS_LOG NTPL ON NT.UETR = NTPL.uetr
                    LEFT JOIN (
                        SELECT
                            npsstpl_id,
                            uetr,
                            CBUAERETURNCODE
                        FROM
                            (
                                SELECT
                                    A3.npsstpl_id,
                                    A3.uetr,
                                    A3.status,
                                    A3.CBUAE_RETURN_CODE,
                                    CONCAT(a3.CBUAE_RETURN_CODE, '-', cnec1.error_description) AS CBUAERETURNCODE
                                FROM (
                                    SELECT
                                        npsstpl_id,
                                        status,
                                        uetr,
                                        CBUAE_RETURN_CODE,
                                        ROW_NUM
                                    FROM (
                                        SELECT
                                            npsstpl_id,
                                            uetr,
                                            status,
                                            CBUAE_RETURN_CODE,
                                            ROW_NUMBER() OVER (PARTITION BY uetr ORDER BY npsstpl_id DESC) AS row_num
                                        FROM
                                             npss_trn_process_log a01
                                    ) F
                                    WHERE ROW_NUM = 1
                                ) A3
                                LEFT JOIN core_nc_error_codes cnec1 ON cnec1.error_code = A3.CBUAE_RETURN_CODE and cnec1.processing_system='CBUAE'
                                WHERE A3.status IN ('OP_AC_REV_POSTING_FAILURE', 'OP_P2P_REV_POSTING_FAILURE', 'OP_P2B_REV_POSTING_FAILURE', 'OP_AC_STATUS_REJECTED', 'OP_P2P_STATUS_REJECTED', 'OP_P2B_STATUS_REJECTED', 'OP_AC_RET_POSTING_FAILURE')
                                ORDER BY npsstpl_id DESC
                            ) a13
                    ) a13 ON a13.uetr = nt.uetr
                    LEFT JOIN (
                        SELECT
                            npsstpl_id,
                            uetr,
                            T24RETURNCODE
                        FROM
                            (
                                SELECT
                                    A2.npsstpl_id,
                                    A2.uetr,
                                    A2.T24_RETURN_CODE,
                                    CONCAT(A2.T24_RETURN_CODE, '-', cnec.error_description) AS T24RETURNCODE
                                FROM (
                                    SELECT
                                        npsstpl_id,
                                        uetr,
                                        T24_RETURN_CODE,
                                        ROW_NUM
                                    FROM (
                                        SELECT
                                            npsstpl_id,
                                            uetr,
                                            T24_RETURN_CODE,
                                            ROW_NUMBER() OVER (PARTITION BY uetr ORDER BY npsstpl_id DESC) AS row_num
                                        FROM
                                            npss_trn_process_log a1
                                    ) F
                                    WHERE ROW_NUM = 1
                                ) A2
                                LEFT JOIN core_nc_error_codes cnec ON cnec.error_code = A2.T24_RETURN_CODE
                                WHERE A2.T24_RETURN_CODE IS NOT NULL
                                ORDER BY npsstpl_id DESC
                            ) a12
                    ) a11 ON a11.uetr = nt.uetr
                    LEFT JOIN core_member_banks cmb ON cmb.bic_code = nt.cr_sort_code AND cmb.NEED_SYNC = 'Y'
                    LEFT JOIN (
                        SELECT
                            A15.npsstpl_id,
                            A15.uetr,
                            A15.PROCESS_REF_NO
                        FROM (
                            SELECT
                                A5.npsstpl_id,
                                A5.uetr,
                                A5.PROCESS_REF_NO
                            FROM (
                                SELECT
                                    npsstpl_id,
                                    uetr,
                                    PROCESS_REF_NO,
                                    ROW_NUM
                                FROM (
                                    SELECT
                                        npsstpl_id,
                                        uetr,
                                        PROCESS_REF_NO,
                                        ROW_NUMBER() OVER (PARTITION BY uetr ORDER BY npsstpl_id DESC) AS row_num
                                    FROM
                                      npss_trn_process_log A05
                                    WHERE A05.process_name = 'Receive Pacs002' AND A05.process_type = 'OP'
                                ) F
                                WHERE F.row_num = 1
                            ) A5
                            ORDER BY A5.npsstpl_id DESC
                        ) A15
                    ) a15 ON a15.uetr = nt.uetr
                    INNER JOIN CORE_SYSTEM_EXTN CSE ON CSE.department_code = nt.DEPARTMENT_CODE
                ) V1
                WHERE process_type = 'OP' and Date(created_date)=current_date - INTERVAL'${params.onOrBefore} days'`
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


                    // first letter capital for header data               
                    function convertCapital(b) {
                        return new Promise((resolve, reject) => {
                            let c = []
                            b.forEach((x) => c.push((x.replaceAll('_', " "))))
                            let response = []
                            for (let key in c) {
                                if (c[key].includes(" ")) {
                                    let newarr = c[key].split(" ")
                                    let res = []
                                    for (let val in newarr) {
                                        if (val == newarr.length - 1) {
                                            res += ((newarr[val].charAt(0).toUpperCase() + newarr[val].slice(1)))
                                        } else {
                                            res += ((newarr[val].charAt(0).toUpperCase() + newarr[val].slice(1) + " "))
                                        }
                                    }
                                    response.push(res)
                                } else {
                                    response.push(c[key].charAt(0).toUpperCase() + c[key].slice(1))
                                }
                            }
                            resolve(response)
                        })
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
