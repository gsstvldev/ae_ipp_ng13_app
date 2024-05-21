var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {








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
    
                    var TakeData = `select
                        distinct UETR,
                        PROCESS_STATUS,
                        STATUS,
                        CREATED_DATE,
                        VALUE_DATE,
                        DEPARTMENT_CODE,
                        DBTR_IBAN,
                        DBTR_ACCT_NAME,
                        CDTR_IBAN,
                        CDTR_ACCT_NAME,
                        CR_SORT_CODE,
                        CHANNEL_ID,
                        BENEFICIARY_BANK,
                        API_SUCCESS_FAILURE,
                        INTRBK_STTLM_AMNT,
                        PURPOSE_CODES,
                        CHANNEL_REFNO,
                        FN_CARD_DECRYPT_AND_MASK_RPT(CR_ACCT_IDENTIFICATION) as CR_ACCT_IDENTIFICATION,
                        FN_CARD_DECRYPT_AND_MASK_RPT(DBTR_ACCT_NO) as DBTR_ACCT_NO,
                        CB_ERRORS,
                        CORE_BANK_ERRORS,
                        MAKER,
                        CHECKER,
                        PROCESS_GROUP,
                        TRANSACTION_ID,
                        CATEGORY_PURPOSE,
                        FT_CI_REFERENCE_NUMBER,
                        PROCESS_TYPE,
                        CLRSYSREF,
                        PAYMENT_ENDTOEND_ID,
                        Batch_Payment_Flag,
                        OUTWARD_FILE_NAME
                    from
                        (
                        select
                            NTPL.UETR,
                            NT.PROCESS_STATUS,
                            NT.STATUS,
                            NT.CREATED_DATE,
                            NT.VALUE_DATE,
                            NT.DEPARTMENT_CODE,
                            NT.OUTWARD_FILE_NAME,
                            case
                                when NT.process_group = 'BCT' then 'Y'
                                else 'N'
                            end as Batch_Payment_Flag,
                            case
                                when NT.PROCESS_GROUP = 'IBAN' then 'WEBI'
                                when NT.PROCESS_GROUP = 'P2P' then 'MP2P'
                                when NT.PROCESS_GROUP = 'P2B' then 'MP2B'
                                when NT.PROCESS_GROUP = 'MANUAL' then 'WEBI'
                            end as PURPOSE_CODES,
                            NT.PAYMENT_ENDTOEND_ID,
                            NT.DBTR_IBAN,
                            NT.DBTR_ACCT_NAME,
                            NT.CDTR_IBAN,
                            NT.CDTR_ACCT_NAME,
                            NT.CR_SORT_CODE,
                            NT.CHANNEL_ID,
                            NT.CHANNEL_REFNO,
                            NT.PROCESS_TYPE,
                            NT.TENANT_ID,
                            NT.DT_CODE,
                            NT.DTT_CODE,
                            NT.MAKER,
                            NT.CHECKER,
                            NT.CR_ACCT_IDENTIFICATION,
                            NT.DBTR_ACCT_NO,
                            NT.PROCESS_GROUP,
                            NT.CATEGORY_PURPOSE,
                            NT.INTRBK_STTLM_AMNT,
                            A13.CBUAERETURNCODE as CB_ERRORS,
                            A11.T24RETURNCODE as CORE_BANK_ERRORS,
                            A15.PROCESS_REF_NO as CLRSYSREF,
                            CMB.BANK_NAME as BENEFICIARY_BANK,
                            CSE.S_DESCRIPTION,
                            NTPL.PROCESS_NAME,
                            case
                                when NT.PROCESS_GROUP in ('P2B', 'P2P') then NT.TRAN_REF_ID
                                when NT.PROCESS_GROUP in ('IBAN') then NT.MIDDLEWARE_REF_NO
                            end as TRANSACTION_ID,
                            case
                                when NT.PROCESS_GROUP in ('IBAN') then NT.TRAN_REF_ID
                                when NT.PROCESS_GROUP in ('P2B', 'P2P') then NT.PAYMENT_ENDTOEND_ID
                            end as FT_CI_REFERENCE_NUMBER,
                            case
                                when NT.PROCESS_STATUS not in ('RCTRejected') then 'Success'
                                when NT.PROCESS_STATUS = 'RCTRejected' then 'Failure'
                            end as API_SUCCESS_FAILURE
                        from
                            <TRAN_DB>.NPSS_TRANSACTIONS NT
                        inner join <TRAN_DB>.NPSS_TRN_PROCESS_LOG NTPL on
                            NT.UETR = NTPL.UETR
                        left join (
                            select
                                NPSSTPL_ID,
                                UETR,
                                CBUAERETURNCODE
                            from
                                (
                                select
                                    A3.NPSSTPL_ID,
                                    A3.UETR,
                                    A3.STATUS,
                                    A3.CBUAE_RETURN_CODE,
                                    CONCAT(A3.CBUAE_RETURN_CODE,
                                    '-',
                                    CNEC1.ERROR_DESCRIPTION) as CBUAERETURNCODE
                                from
                                    (
                                    select
                                        NPSSTPL_ID,
                                        STATUS,
                                        UETR,
                                        CBUAE_RETURN_CODE,
                                        ROW_NUM
                                    from
                                        (
                                        select
                                            NPSSTPL_ID,
                                            UETR,
                                            STATUS,
                                            CBUAE_RETURN_CODE,
                                            row_number() over (partition by UETR
                                        order by
                                            NPSSTPL_ID desc) as ROW_NUM
                                        from
                                            <TRAN_DB>.NPSS_TRN_PROCESS_LOG A01) F
                                    where
                                        ROW_NUM = 1 ) A3
                                left join CORE_NC_ERROR_CODES CNEC1 on
                                    CNEC1.ERROR_CODE = A3.CBUAE_RETURN_CODE
                                    and CNEC1.PROCESSING_SYSTEM = 'CBUAE'
                                where
                                    A3.STATUS in ('OP_AC_REV_POSTING_FAILURE', 'OP_P2P_REV_POSTING_FAILURE', 'OP_P2B_REV_POSTING_FAILURE', 'OP_AC_STATUS_REJECTED', 'OP_P2P_STATUS_REJECTED', 'OP_P2B_STATUS_REJECTED', 'OP_AC_RET_POSTING_FAILURE')
                                order by
                                    NPSSTPL_ID desc) A13) A13 on
                            A13.UETR = NT.UETR
                        left join (
                            select
                                NPSSTPL_ID,
                                UETR,
                                T24RETURNCODE
                            from
                                (
                                select
                                    A2.NPSSTPL_ID,
                                    A2.UETR,
                                    A2.T24_RETURN_CODE,
                                    CONCAT(A2.T24_RETURN_CODE,
                                    '-',
                                    CNEC.ERROR_DESCRIPTION) as T24RETURNCODE
                                from
                                    (
                                    select
                                        NPSSTPL_ID,
                                        UETR,
                                        T24_RETURN_CODE,
                                        ROW_NUM
                                    from
                                        (
                                        select
                                            NPSSTPL_ID,
                                            UETR,
                                            T24_RETURN_CODE,
                                            row_number() over (partition by UETR
                                        order by
                                            NPSSTPL_ID desc) as ROW_NUM
                                        from
                                            <TRAN_DB>.NPSS_TRN_PROCESS_LOG A1) F
                                    where
                                        ROW_NUM = 1 ) A2
                                left join CORE_NC_ERROR_CODES CNEC on
                                    CNEC.ERROR_CODE = A2.T24_RETURN_CODE
                                where
                                    A2.T24_RETURN_CODE is not null
                                order by
                                    NPSSTPL_ID desc) A12) A11 on
                            A11.UETR = NT.UETR
                        left join CORE_MEMBER_BANKS CMB on
                            CMB.BIC_CODE = NT.CR_SORT_CODE
                            and CMB.NEED_SYNC = 'Y'
                        left join (
                            select
                                A15.NPSSTPL_ID,
                                A15.UETR,
                                A15.PROCESS_REF_NO
                            from
                                (
                                select
                                    A5.NPSSTPL_ID,
                                    A5.UETR,
                                    A5.PROCESS_REF_NO
                                from
                                    (
                                    select
                                        NPSSTPL_ID,
                                        UETR,
                                        PROCESS_REF_NO,
                                        ROW_NUM
                                    from
                                        (
                                        select
                                            NPSSTPL_ID,
                                            UETR,
                                            PROCESS_REF_NO,
                                            row_number() over (partition by UETR
                                        order by
                                            NPSSTPL_ID desc) as ROW_NUM
                                        from
                                            <TRAN_DB>.NPSS_TRN_PROCESS_LOG A05
                                        where
                                            A05.PROCESS_NAME = 'Receive Pacs002'
                                            and A05.PROCESS_TYPE = 'OP' ) F
                                    where
                                        F.ROW_NUM = 1 ) A5
                                order by
                                    A5.NPSSTPL_ID desc) A15) A15 on
                            A15.UETR = NT.UETR
                        inner join CORE_SYSTEM_EXTN CSE on
                            CSE.DEPARTMENT_CODE = NT.DEPARTMENT_CODE) V1
                    where
                        PROCESS_TYPE = 'OP'  and Date(created_date)=CURRENT_DATE `
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
