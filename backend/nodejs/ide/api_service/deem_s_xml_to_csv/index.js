var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');
var app = express.Router();
app.post('/', function (appRequest, appResponse, next) {
    /*  Created By :   Suresh
    Created Date : 30/05/2024
    Reason :XML TO CSV WI:3837 */
    var serviceName = 'DEEM XML TO CSV';
    var reqInstanceHelper = require($REFPATH + 'common/InstanceHelper'); ///  Response,error,info msg printing        
    var reqTranDBInstance = require($REFPATH + "instance/TranDBInstance.js"); /// postgres & oracle DB pointing        
    var reqLogInfo = require($REFPATH + 'log/trace/LogInfo'); /// Log information Detail
    var reqAuditLog = require($REFPATH + 'log/audit/AuditLog');
    var reqDateFormatter = require($REFPATH + 'common/dateconverter/DateFormatter');
    var params = appRequest.body.PARAMS; //  Client input fromm Server
    var headers = appRequest.headers; // header details
    var objSessionLogInfo = null; // set value is null
    var reqAsync = require('async');
    var Client = require('ssh2-sftp-client');
    var mTranConn = "";
    var xml2json = require('xml2json');
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
            objSessionLogInfo.HANDLER_CODE = 'NPSS DEEM XML TO CSV';
            objSessionLogInfo.ACTION = 'ACTION';
            objSessionLogInfo.PROCESS = 'NPSS DEEM XML TO CSV';
            reqInstanceHelper.PrintInfo(serviceName, "........................ api request body..............." + JSON.stringify(params), objSessionLogInfo);
            reqTranDBInstance.GetTranDBConn(headers, false, async function (pSession) {
                mTranConn = pSession; //  assign connection    
                try {
                    let takecsvfiles = await takecsv()
                    let allcnvrtcsv = [];
                    for (let i = 0; i < takecsvfiles.length; i++) {
                        let takexl = takecsvfiles[i].name;
                        removecsv = takexl.replace(".csv", "");
                        allcnvrtcsv.push(removecsv);
                    }
                    console.log(allcnvrtcsv)
                    let takedata = await FTPcnt()
                    if (takedata.length > 0) {
                        if (takedata.length > 0) {
                            let names = takedata.map(item => item.name.replace(".xml", ""));
                            let filteredData = takedata.filter(item => !allcnvrtcsv.includes(item.name.replace(".xml", "")));
                            if (filteredData.length > 0) {
                                console.log(filteredData)
                                for (let i = 0; i < filteredData.length; i++) {
                                    let xml = filteredData[i].data;
                                    let name = filteredData[i].name;
                                    currentfile = name.replace(".xml", "");
                                    let json_parsed = JSON.parse(xml2json.toJson(xml));
                                    if (json_parsed['Document'] && json_parsed['Document']['Signature']) {
                                        delete json_parsed['Document']['Signature'];
                                    }
                                    console.log(json_parsed);
                                    let alldata = Traverse(json_parsed);
                                    if (alldata.length > 0) {
                                        let objkeys = Object.keys(alldata[0]);
                                        let Header = await findHeader(objkeys);
                                        console.log(Header);
                                        let csvContent = await getCSVStream(alldata, Header);
                                        let takecvsdata = await FTPconnection(csvContent, currentfile);
                                        if (takecvsdata === 'SUCCESS') {
                                            objresponse.status = 'SUCCESS';
                                            sendResponse(null, objresponse);
                                        } else {
                                            objresponse.status = 'FAILURE';
                                            sendResponse(null, objresponse);
                                        }
                                    } else {
                                        objresponse.status = 'NO DATA FOUND';
                                        sendResponse(null, objresponse);
                                    }
                                }
                            } else {
                                let objresponse = { status: 'NO NEW FILE FOUND' };
                                sendResponse(null, objresponse);
                            }
                        } else {
                            let objresponse = { status: 'NO DATA FOUND' };
                            sendResponse(null, objresponse);
                        }


                    } else {
                        objresponse.status = 'NO DATA FOUND';
                        sendResponse(null, objresponse);
                    }
                    async function findHeader(arr) {
                        return new Promise((resolve, reject) => {
                            let hdr = [];
                            arr.forEach((x) => {
                                let obj = {
                                    'id': x,
                                    'title': x
                                };
                                hdr.push(obj);
                            });
                            resolve(hdr);
                        });
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
                    async function FTPconnection(csvContent, currentfile) {
                        return new Promise((resolve, reject) => {
                            try {
                                var ip = params.sftp_ip;
                                var port = params.sftp_port;
                                var username = params.sftp_username;
                                //  var filepath = params.sftp_path.trim() + params.sftp_filename + moment().format('DDMMYYYY_HHMMSS') + '.csv'
                                var filepath = params.sftp_read_path.trim() + "/" + currentfile + '.csv'
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
                                var filename = appRequest.body.sftp_filename + moment().format('DDMMYYYY_HHMMSS')
                                //tempfilenamearr = filename.split(',')
                                let sftp = new Client();
                                sftp.connect(connectObj).then(function () {
                                    sftp.put(Buffer.from(file_content), `${filepath}`).then(res => {
                                        //   sftp.put(Buffer.from(file_content), `${filepath}`).then(res => {
                                        reqInstanceHelper.PrintInfo(serviceName, "........................given file written...............", objSessionLogInfo);
                                        resolve('SUCCESS')
                                        //* /   nextobjctfunc(); */
                                    }).catch(err => {
                                        console.log(err, 'Error in file upload for the file ' + filename);
                                    });
                                });
                            } catch (error) {
                                reqInstanceHelper.SendResponse(serviceName, appResponse, null, objSessionLogInfo, 'IDE_SERVICE_10002', 'ERROR IN FILE UPLOAD ', error);
                            }
                        })
                    }
                    async function FTPcnt() {
                        try {
                            const modelfile = 'camt.053';  // File name pattern to look for
                            const ip = params.sftp_ip;  // SFTP server IP address
                            const port = params.sftp_port;  // SFTP port
                            const username = params.sftp_username;  // SFTP username
                            const sftpPath = params.sftp_path;  // Path on the SFTP server where the files might exist
                            const connectObj = {
                                host: ip,
                                port: port,
                                username: username,
                                password: params.sftp_password,
                                passphrase: params.sftp_passphrase
                            };
                            const sftp = new Client();
                            await sftp.connect(connectObj);
                            const fileList = await sftp.list(sftpPath);
                            let downloadedFiles = [];
                            for (const file of fileList) {
                                if (file.name.includes(modelfile)) {
                                    const filePath = `${sftpPath}/${file.name}`;
                                    const fileData = await sftp.get(filePath);
                                    console.log(`File '${file.name}' downloaded successfully from ${sftpPath}.`);
                                    downloadedFiles.push({ name: file.name, data: fileData.toString() });
                                }
                            }

                            sftp.end();
                            return downloadedFiles;

                        } catch (error) {
                            console.error('Error in FTP connection:', error);
                            throw error;
                        }
                    }
                    async function takecsv() {
                        try {
                            const ip = params.sftp_ip;  // SFTP server IP address
                            const port = params.sftp_port;  // SFTP port
                            const username = params.sftp_username;  // SFTP username
                            const sftpPath = params.sftp_read_path;  // Path on the SFTP server where the files might exist
                            const connectObj = {
                                host: ip,
                                port: port,
                                username: username,
                                password: params.sftp_password,
                                passphrase: params.sftp_passphrase
                            };
                            const sftp = new Client();
                            await sftp.connect(connectObj);
                            const fileList = await sftp.list(sftpPath);
                            sftp.end();
                            return fileList;

                        } catch (error) {
                            console.error('Error in FTP connection:', error);
                            throw error;
                        }
                    }
                    async function takexml() {
                        try {
                            const ip = params.sftp_ip;  // SFTP server IP address
                            const port = params.sftp_port;  // SFTP port
                            const username = params.sftp_username;  // SFTP username
                            const sftpPath = params.sftp_path;  // Path on the SFTP server where the files might exist
                            const connectObj = {
                                host: ip,
                                port: port,
                                username: username,
                                password: params.sftp_password,
                                passphrase: params.sftp_passphrase
                            };
                            const sftp = new Client();
                            await sftp.connect(connectObj);
                            const fileList = await sftp.list(sftpPath);
                            sftp.end();
                            return fileList;

                        } catch (error) {
                            console.error('Error in FTP connection:', error);
                            throw error;
                        }
                    }
                    // async function FTPcnt() {
                    //     try {
                    //         modelfile = 'camt.053'
                    //         var ip = params.sftp_ip;
                    //         var port = params.sftp_port;
                    //         var username = params.sftp_username;
                    //         var filepath = params.sftp_path + modelfile
                    //         console.log('............................', filepath);
                    //         var connectObj = {
                    //             "host": ip,
                    //             "port": port,
                    //             "username": username,
                    //             "password": params.sftp_password,
                    //             "passphrase": params.sftp_passphrase
                    //         };
                    //         var sftp = new Client();
                    //         await sftp.connect(connectObj);
                    //         var fileData = await sftp.get(filepath);
                    //         console.log('File downloaded successfully.');
                    //         sftp.end();
                    //         return fileData.toString();
                    //     } catch (error) {
                    //         console.error('Error in FTP connection:', error);
                    //         throw error;
                    //     }
                    // }

                    // first letter capital for header data              
                    function convertCapital(b) {
                        return new Promise((resolve, reject) => {
                            let c = []
                            b.forEach((x) => c.push((x.replaceAll('_', " "))))
                            let response = []
                            c.forEach((str) => response.push((str.replace(/\b[a-z]/g, char => char.toUpperCase())))
                            )
                            console.log(response)
                            resolve(response)
                        })
                    }
                    function Traverse(json_parsed) {
                        let key_list = []
                        key_list = Object.keys(json_parsed['Document']['BkToCstmrStmt']['Stmt']['Ntry'])
                        let ntry_length = Object.keys(json_parsed['Document']['BkToCstmrStmt']['Stmt']['Ntry'])
                        let key_pair = []
                        for (let i = 0; i < ntry_length.length; i++) {
                            key_pair.push({ ['MsgId']: json_parsed['Document']['BkToCstmrStmt']['GrpHdr']['MsgId'] })
                            key_pair[i]['CreDtm'] = json_parsed['Document']['BkToCstmrStmt']['GrpHdr']['CreDtTm']
                            key_pair[i]['Nm'] = json_parsed['Document']['BkToCstmrStmt']['GrpHdr']['MsgRcpt']['Nm']
                            key_pair[i]['AnyBic'] = json_parsed['Document']['BkToCstmrStmt']['GrpHdr']['MsgRcpt']['Id']['OrgId']['AnyBIC']
                            key_pair[i]['PgNb'] = json_parsed['Document']['BkToCstmrStmt']['GrpHdr']['MsgPgntn']['PgNb']
                            key_pair[i]['LastPgInd'] = json_parsed['Document']['BkToCstmrStmt']['GrpHdr']['MsgPgntn']['LastPgInd']
                            key_pair[i]['Id'] = json_parsed['Document']['BkToCstmrStmt']['Stmt']['Id']
                            key_pair[i]['ElctrncSeqNb'] = json_parsed['Document']['BkToCstmrStmt']['Stmt']['ElctrncSeqNb']
                            key_pair[i]['CredDtTm2'] = json_parsed['Document']['BkToCstmrStmt']['Stmt']['CreDtTm']
                            key_pair[i]['FrdDtTm'] = json_parsed['Document']['BkToCstmrStmt']['Stmt']['FrToDt']['FrDtTm']
                            key_pair[i]['ToDtTm'] = json_parsed['Document']['BkToCstmrStmt']['Stmt']['FrToDt']['ToDtTm']
                            key_pair[i]['Id2'] = json_parsed['Document']['BkToCstmrStmt']['Stmt']['Acct']['Id']['Othr']['Id']
                            key_pair[i]['Id3'] = json_parsed['Document']['BkToCstmrStmt']['Stmt']['RltdAcct']['Id']['Othr']['Id']
                            if (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Bal'][i]) {
                                //  }
                                if (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Bal'][i]['Tp']['CdOrPrtry']['Prtry']) {
                                    key_pair[i]['Prtry'] = (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Bal'][i]['Tp']['CdOrPrtry']['Prtry'])
                                }
                                if (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Bal'][i]['Amt']['$t'])
                                    key_pair[i]['Amt'] = (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Bal'][i]['Amt']['$t'])
                                if (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Bal'][i]['Amt']['Ccy'])
                                    key_pair[i]['Ccy'] = (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Bal'][i]['Amt']['Ccy'])
                                if (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Bal'][i]['CdtDbtInd'])
                                    key_pair[i]['CdtDbtInd'] = (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Bal'][i]['CdtDbtInd'])
                                if (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Bal'][i]['Dt']['Dt'])
                                    key_pair[i]['Dt'] = (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Bal'][i]['Dt']['Dt'])
                                if (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Bal'][i]['Dt']['DtTm'])
                                    key_pair[i]['DtTm'] = (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Bal'][i]['Dt']['DtTm'])
                            }
                            key_pair[i]['NbOfNtries'] = json_parsed['Document']['BkToCstmrStmt']['Stmt']['TxsSummry']['TtlNtries']['NbOfNtries']
                            key_pair[i]['Sum'] = json_parsed['Document']['BkToCstmrStmt']['Stmt']['TxsSummry']['TtlNtries']['Sum']
                            key_pair[i]['CdtDbtInd2'] = json_parsed['Document']['BkToCstmrStmt']['Stmt']['TxsSummry']['TtlNtries']['TtlNetNtry']['CdtDbtInd']
                            key_pair[i]['NbOfNtries2'] = json_parsed['Document']['BkToCstmrStmt']['Stmt']['TxsSummry']['TtlCdtNtries']['NbOfNtries']
                            key_pair[i]['Sum2'] = json_parsed['Document']['BkToCstmrStmt']['Stmt']['TxsSummry']['TtlCdtNtries']['Sum']
                            key_pair[i]['NbOfNtries3'] = json_parsed['Document']['BkToCstmrStmt']['Stmt']['TxsSummry']['TtlDbtNtries']['NbOfNtries']
                            key_pair[i]['Sum3'] = json_parsed['Document']['BkToCstmrStmt']['Stmt']['TxsSummry']['TtlDbtNtries']['Sum']
                            if (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Bal'][i]) {

                                //  }
                                if (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Bal'][i]['Tp']['CdOrPrtry']['Prtry']) {
                                    key_pair[i]['Prtry'] = (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Bal'][i]['Tp']['CdOrPrtry']['Prtry'])
                                }
                                if (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Bal'][i]['Amt']['$t'])
                                    key_pair[i]['Amt'] = (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Bal'][i]['Amt']['$t'])
                                if (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Bal'][i]['Amt']['Ccy'])
                                    key_pair[i]['Ccy'] = (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Bal'][i]['Amt']['Ccy'])

                                if (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Bal'][i]['CdtDbtInd'])
                                    key_pair[i]['CdtDbtInd'] = (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Bal'][i]['CdtDbtInd'])

                                if (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Bal'][i]['Dt']['Dt'])
                                    key_pair[i]['Dt'] = (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Bal'][i]['Dt']['Dt'])
                                if (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Bal'][i]['Dt']['DtTm'])
                                    key_pair[i]['DtTm'] = (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Bal'][i]['Dt']['DtTm'])
                                // }
                            }
                            key_pair[i]['NbOfNtries'] = json_parsed['Document']['BkToCstmrStmt']['Stmt']['TxsSummry']['TtlNtries']['NbOfNtries']
                            key_pair[i]['Sum'] = json_parsed['Document']['BkToCstmrStmt']['Stmt']['TxsSummry']['TtlNtries']['Sum']
                            key_pair[i]['CdtDbtInd2'] = json_parsed['Document']['BkToCstmrStmt']['Stmt']['TxsSummry']['TtlNtries']['TtlNetNtry']['CdtDbtInd']
                            key_pair[i]['NbOfNtries2'] = json_parsed['Document']['BkToCstmrStmt']['Stmt']['TxsSummry']['TtlCdtNtries']['NbOfNtries']
                            key_pair[i]['Sum2'] = json_parsed['Document']['BkToCstmrStmt']['Stmt']['TxsSummry']['TtlCdtNtries']['Sum']
                            key_pair[i]['NbOfNtries3'] = json_parsed['Document']['BkToCstmrStmt']['Stmt']['TxsSummry']['TtlDbtNtries']['NbOfNtries']
                            key_pair[i]['Sum3'] = json_parsed['Document']['BkToCstmrStmt']['Stmt']['TxsSummry']['TtlDbtNtries']['Sum']
                            /* key_list=Object.keys(json_parsed['Document']['BkToCstmrStmt']['Stmt']['Ntry'])
                            for(let i in key_list)
                            { */
                            if (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Ntry'][i]) {
                                if (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Ntry'][i]['AcctSvcrRef']) {
                                    key_pair[i]['NtryRef'] = (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Ntry'][i]['AcctSvcrRef'])
                                }
                                if (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Ntry'][i]['Amt']['$t']) {
                                    key_pair[i]['Amt2'] = (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Ntry'][i]['Amt']['$t'])
                                }
                                if (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Ntry'][i]['Amt']['Ccy']) {
                                    key_pair[i]['Ccy2'] = (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Ntry'][i]['Amt']['Ccy'])
                                }
                                if (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Ntry'][i]['CdtDbtInd'])
                                    key_pair[i]['CdtDbtInd3'] = (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Ntry'][i]['CdtDbtInd'])

                                if (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Ntry'][i]['Sts']['Cd'])
                                    key_pair[i]['Cd'] = (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Ntry'][i]['Sts']['Cd'])

                                if (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Ntry'][i]['BookgDt']['Dt'])
                                    key_pair[i]['Dt2'] = (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Ntry'][i]['BookgDt']['Dt'])

                                if (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Ntry'][i]['BookgDt']['DtTm'])
                                    key_pair[i]['DtTm2'] = (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Ntry'][i]['BookgDt']['DtTm'])

                                if (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Ntry'][i]['ValDt']['Dt'])
                                    key_pair[i]['Dt3'] = (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Ntry'][i]['ValDt']['Dt'])
                                if (
                                    json_parsed['Document']['BkToCstmrStmt']['Stmt']['Ntry'][i]['ValDt']['DtTm'])
                                    key_pair[i]['DtTm3'] = (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Ntry'][i]['ValDt']['DtTm'])

                                if (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Ntry'][i]['NtryRef']) {
                                    key_pair[i]['AcctSvcrRef'] = (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Ntry'][i]['NtryRef'])
                                }

                                if (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Ntry'][i]['BkTxCd']['Prtry']['Cd']) {
                                    key_pair[i]['Cd2'] = (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Ntry'][i]['BkTxCd']['Prtry']['Cd'])
                                }

                                if (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Ntry'][i]['AmtDtls']['InstdAmt']['Amt']['$t']) {
                                    key_pair[i]['Amt4'] = (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Ntry'][i]['AmtDtls']['InstdAmt']['Amt']['$t'])
                                }
                                if (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Ntry'][i]['AmtDtls']['TxAmt']['Amt']['$t']) {
                                    key_pair[i]['Amt3'] = (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Ntry'][i]['AmtDtls']['TxAmt']['Amt']['$t'])
                                }

                                if (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Ntry'][i]['AmtDtls']['TxAmt']['Amt']['Ccy']) {
                                    key_pair[i]['Ccy3'] = (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Ntry'][i]['AmtDtls']['TxAmt']['Amt']['Ccy'])
                                }

                                if (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Ntry'][i]['AmtDtls']['TxAmt']['Amt']['$t']) {
                                    key_pair[i]['Amt5'] = (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Ntry'][i]['AmtDtls']['TxAmt']['Amt']['$t'])
                                }

                                if (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Ntry'][i]['AmtDtls']['InstdAmt']['Amt']['$t']) {
                                    key_pair[i]['Ccy4'] = (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Ntry'][i]['AmtDtls']['InstdAmt']['Amt']['$t'])
                                }

                                if (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Ntry'][i]['NtryDtls']['TxDtls']['Refs']['MsgId']) {
                                    key_pair[i]['MsgId2'] = (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Ntry'][i]['NtryDtls']['TxDtls']['Refs']['MsgId'])
                                }

                                if (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Ntry'][i]['NtryDtls']['TxDtls']['Refs']['AcctSvcrRef']) {
                                    key_pair[i]['AcctSvcrRef2'] = (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Ntry'][i]['NtryDtls']['TxDtls']['Refs']['AcctSvcrRef'])
                                }

                                if (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Ntry'][i]['NtryDtls']['TxDtls']['Refs']['PmtInfId']) {
                                    key_pair[i]['PmtInfId'] = (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Ntry'][i]['NtryDtls']['TxDtls']['Refs']['PmtInfId'])
                                }

                                if (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Ntry'][i]['NtryRef'])
                                    key_pair[i]['InstrId'] = (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Ntry'][i]['NtryRef'])
                                if (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Ntry'][i]['NtryDtls']['TxDtls']['Refs']['EndToEndId']) {
                                    key_pair[i]['EndToEndId'] = (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Ntry'][i]['NtryDtls']['TxDtls']['Refs']['EndToEndId'])
                                }

                                if (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Ntry'][i]['NtryDtls']['TxDtls']['Refs']['TxId']) {
                                    key_pair[i]['TxId'] = (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Ntry'][i]['NtryDtls']['TxDtls']['Refs']['TxId'])
                                }

                                if (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Ntry'][i]['NtryDtls']['TxDtls']['Refs']['ClrSysRef']) {
                                    key_pair[i]['ClrSysRef'] = (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Ntry'][i]['NtryDtls']['TxDtls']['Refs']['ClrSysRef'])
                                }

                                if (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Ntry'][i]['NtryDtls']['TxDtls']['Refs']['UETR']) {
                                    key_pair[i]['UETR'] = (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Ntry'][i]['NtryDtls']['TxDtls']['Refs']['UETR'])
                                }

                                if (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Ntry'][i]['NtryDtls']['TxDtls']['Amt']['$t']) {
                                    key_pair[i]['Amt6'] = (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Ntry'][i]['NtryDtls']['TxDtls']['Amt']['$t'])
                                }

                                if (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Ntry'][i]['NtryDtls']['TxDtls']['Amt']['Ccy']) {
                                    key_pair[i]['Ccy5'] = (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Ntry'][i]['NtryDtls']['TxDtls']['Amt']['Ccy'])
                                }

                                if (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Ntry'][i]['NtryDtls']['TxDtls']['CdtDbtInd']) {
                                    key_pair[i]['CdtDbtInd4'] = (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Ntry'][i]['NtryDtls']['TxDtls']['CdtDbtInd'])
                                }

                                if (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Ntry'][i]['NtryDtls']['TxDtls']['RltdAgts']['CdtrAgt']['FinInstnId']['BICFI']) {
                                    key_pair[i]['BICFI'] = (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Ntry'][i]['NtryDtls']['TxDtls']['RltdAgts']['CdtrAgt']['FinInstnId']['BICFI'])
                                }
                                if (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Ntry'][i]['NtryDtls']['TxDtls']['RltdAgts']['DbtrAgt']['FinInstnId']['BICFI']) {
                                    key_pair[i]['BICFI2'] = (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Ntry'][i]['NtryDtls']['TxDtls']['RltdAgts']['DbtrAgt']['FinInstnId']['BICFI'])
                                }

                                if (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Ntry'][i]['NtryDtls']['TxDtls']['RltdAgts']['InstdAgt']['FinInstnId']['BICFI']) {
                                    key_pair[i]['BICFI3'] = (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Ntry'][i]['NtryDtls']['TxDtls']['RltdAgts']['InstdAgt']['FinInstnId']['BICFI'])
                                }
                                if (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Ntry'][i]['NtryDtls']['TxDtls']['RltdAgts']['InstgAgt']['FinInstnId']['BICFI']) {
                                    key_pair[i]['BICFI4'] = (json_parsed['Document']['BkToCstmrStmt']['Stmt']['Ntry'][i]['NtryDtls']['TxDtls']['RltdAgts']['InstgAgt']['FinInstnId']['BICFI'])
                                }
                            }

                            //}
                        }
                        return key_pair
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
