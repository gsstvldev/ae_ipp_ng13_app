var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');
var app = express.Router();
app.post('/', function (appRequest, appResponse, next) {
    /*  Created By :   Suresh
    Created Date : 30/05/2024
    Reason :XML TO CSV WI:3837 */
    var serviceName = 'DEEM XML TO CSV SCH';
    const { Writable } = require('stream');
    var reqInstanceHelper = require($REFPATH + 'common/InstanceHelper'); ///  Response,error,info msg printing        
    var reqTranDBInstance = require($REFPATH + "instance/TranDBInstance.js"); /// postgres & oracle DB pointing    
    const { createObjectCsvStringifier } = require('csv-writer');
    var reqLogInfo = require($REFPATH + 'log/trace/LogInfo'); /// Log information Detail
    var reqAuditLog = require($REFPATH + 'log/audit/AuditLog');
    var reqDateFormatter = require($REFPATH + 'common/dateconverter/DateFormatter');
    var params = appRequest.body.PARAMS; //  Client input fromm Server
    var headers = appRequest.headers; // header details
    const reqAsync = require('async');
    var objSessionLogInfo = null; // set value is null
    try {
        const { createObjectCsvStringifier } = require('csv-writer');
        var Client = require('ssh2-sftp-client');
        var moment = require('moment');
    } catch (error) {
        console.error('Error loading csv-writer module:', error);
    }
    var mTranConn = "";
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
            objSessionLogInfo.HANDLER_CODE = 'NPSS DEEM XML TO CSV SCH';
            objSessionLogInfo.ACTION = 'ACTION';
            objSessionLogInfo.PROCESS = 'NPSS DEEM XML TO CSV SCH';
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
                    let takedata = await FTPcnt()
                    if (takedata.length > 0) {
                        if (takedata.length > 0) {
                            let names = takedata.map(item => item.name.replace(".xml", ""));
                            let filteredData = takedata.filter(item => !allcnvrtcsv.includes(item.name.replace(".xml", "")));
                            if (filteredData.length > 0) {
                                let successfulFiles = [];
                                let failedFiles = [];
                                try {
                                    var xml2js = require('xml2js');
                                    await reqAsync.forEachOfSeries(filteredData, async function (item) {
                                        let xml = item.data;
                                        let name = item.name;
                                        let currentfile = name.replace(".xml", "");
                                        let json_parsed;
                                        try {
                                            json_parsed = await new Promise((resolve, reject) => {
                                                var parser = new xml2js.Parser({ strict: false, trim: true });
                                                parser.parseString(xml, function (err, result) {
                                                    if (err) reject(err);
                                                    else resolve(result);
                                                });
                                            });
                                        } catch (err) {
                                            console.error('Error parsing XML:', err);
                                            failedFiles.push(currentfile);
                                            return;
                                        }
                                        try {
                                            if (json_parsed && json_parsed['DOCUMENT'] && json_parsed['DOCUMENT']['SIGNATURE']) {
                                                delete json_parsed['DOCUMENT']['SIGNATURE'];
                                            }
                                            let alldata = Traverse(json_parsed);
                                            reqInstanceHelper.PrintInfo(currentfile, JSON.stringify(json_parsed));
                                            if (alldata && alldata.length > 0) {
                                                let objkeys = Object.keys(alldata[0]);
                                                let Header;
                                                try {
                                                    Header = await findHeader(objkeys);
                                                    console.log('Header:', Header);
                                                    let csvContent = await getCSVStream(alldata, Header);
                                                    let takecvsdata = await FTPconnection(csvContent, currentfile);
                                                    if (takecvsdata === 'SUCCESS') {
                                                        successfulFiles.push(currentfile);
                                                    } else {
                                                        failedFiles.push(currentfile);
                                                    }
                                                } catch (err) {
                                                    console.error('Error in processing:', err);
                                                    failedFiles.push(currentfile);
                                                }
                                            } else {
                                                failedFiles.push(currentfile);
                                            }
                                        } catch (err) {
                                            console.error('Error in processing item:', err);
                                            failedFiles.push(currentfile);
                                        }
                                    });
                                    if (successfulFiles.length > 0 && failedFiles.length == 0) {
                                        console.log('Successful files:', successfulFiles);
                                        let objresponse = {
                                            status: 'SUCCESS',
                                            data: 'All files processed successfully'
                                        };
                                        sendResponse(null, objresponse);
                                    } else {
                                        console.log('Failed files:', failedFiles);
                                        let objresponse = {
                                            status: 'FAILURE',
                                            data: failedFiles + '  ' + 'Error in this files'
                                        };
                                        sendResponse(null, objresponse);
                                    }
                                } catch (err) {
                                    console.error('Error in async Function:', err);
                                    let objresponse = {
                                        status: 'FAILURE',
                                        data: 'Error in async processing'
                                    };
                                    sendResponse(err, objresponse);
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
                                // console.log('............................', filepath)
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
                            reqInstanceHelper.PrintInfo(serviceName, "........................sftp file list..............." + fileList, objSessionLogInfo);
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
                        key_list = Object.keys(json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['NTRY'])
                        //key_list = Object.keys(json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT']['NTRY'])
                        let NTRY_length = Object.keys(json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['NTRY'])
                        let key_pair = []
                        for (let i = 0; i < NTRY_length.length; i++) {
                            key_pair.push({ ['MSGID']: json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['GRPHDR'][0]['MSGID'][0] })
                            key_pair[i]['CREDTM'] = json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['GRPHDR'][0]['CREDTTM'][0]
                            key_pair[i]['NM'] = json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['GRPHDR'][0]['MSGRCPT'][0]['NM'][0]
                            key_pair[i]['ANYBIC'] = json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['GRPHDR'][0]['MSGRCPT'][0]['ID'][0]['ORGID'][0]['ANYBIC'][0]
                            key_pair[i]['PGNB'] = json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['GRPHDR'][0]['MSGPGNTN'][0]['PGNB'][0]
                            key_pair[i]['LASTPGIND'] = json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['GRPHDR'][0]['MSGPGNTN'][0]['LASTPGIND'][0]
                            key_pair[i]['ID'] = json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['ID'][0]
                            key_pair[i]['ELCTRNCSEQNB'] = json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['ELCTRNCSEQNB'][0]
                            key_pair[i]['CREDDTTM2'] = json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['CREDTTM'][0]
                            key_pair[i]['FRDDTTM'] = json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['FRTODT'][0]['FRDTTM'][0]
                            key_pair[i]['TODTTM'] = json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['FRTODT'][0]['TODTTM'][0]
                            key_pair[i]['ID2'] = json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['ACCT'][0]['ID'][0]['OTHR'][0]['ID'][0]
                            key_pair[i]['ID3'] = json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['RLTDACCT'][0]['ID'][0]['OTHR'][0]['ID'][0]
                            if (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['BAL'][i]) {
                                //  }
                                if (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['BAL'][i]['TP'][0]['CDORPRTRY'][0]['PRTRY'][0]) {
                                    key_pair[i]['PRTRY'] = (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['BAL'][i]['TP'][0]['CDORPRTRY'][0]['PRTRY'][0])
                                }
                                if (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['BAL'][i]['AMT'][0]['_'])
                                    key_pair[i]['AMT'] = (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['BAL'][i]['AMT'][0]['_'])
                                if (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['BAL'][i]['AMT'][0]['$']['CCY'])
                                    key_pair[i]['CCY'] = (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['BAL'][i]['AMT'][0]['$']['CCY'])
                                if (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['BAL'][i]['CDTDBTIND'][0])
                                    key_pair[i]['CDTDBTIND'] = (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['BAL'][i]['CDTDBTIND'][0])
                                if (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['BAL'][i]['DT'][0]['DT'][0])
                                    key_pair[i]['DT'] = (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['BAL'][i]['DT'][0]['DT'][0])
                                if (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['BAL'][i]['DT'][0]['DTTM'][0])
                                    key_pair[i]['DTTM'] = (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['BAL'][i]['DT'][0]['DTTM'][0])
                            }
                            key_pair[i]['NBOFNTRIES'] = json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['TXSSUMMRY'][0]['TTLNTRIES'][0]['NBOFNTRIES'][0]
                            key_pair[i]['SUM'] = json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['TXSSUMMRY'][0]['TTLNTRIES'][0]['SUM'][0]
                            key_pair[i]['CDTDBTIND2'] = json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['TXSSUMMRY'][0]['TTLNTRIES'][0]['TTLNETNTRY'][0]['CDTDBTIND'][0]
                            key_pair[i]['NBOFNTRIES2'] = json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['TXSSUMMRY'][0]['TTLCDTNTRIES'][0]['NBOFNTRIES'][0]
                            key_pair[i]['SUM2'] = json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['TXSSUMMRY'][0]['TTLCDTNTRIES'][0]['SUM'][0]
                            key_pair[i]['NBOFNTRIES3'] = json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['TXSSUMMRY'][0]['TTLDBTNTRIES'][0]['NBOFNTRIES'][0]
                            key_pair[i]['SUM3'] = json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['TXSSUMMRY'][0]['TTLDBTNTRIES'][0]['SUM'][0]
                            if (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['BAL'][i]) {

                                //  }
                                if (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['BAL'][i]['TP'][0]['CDORPRTRY'][0]['PRTRY'][0]) {
                                    key_pair[i]['PRTRY'] = (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['BAL'][i]['TP'][0]['CDORPRTRY'][0]['PRTRY'][0])
                                }
                                if (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['BAL'][i]['AMT'][0]['_'])
                                    key_pair[i]['AMT'] = (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['BAL'][i]['AMT'][0]['_'])
                                if (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['BAL'][i]['AMT'][0]['$']['CCY'])
                                    key_pair[i]['CCY'] = (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['BAL'][i]['AMT'][0]['$']['CCY'])

                                if (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['BAL'][i]['CDTDBTIND'][0])
                                    key_pair[i]['CDTDBTIND'] = (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['BAL'][i]['CDTDBTIND'][0])

                                if (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['BAL'][i]['DT'][0]['DT'][0])
                                    key_pair[i]['DT'] = (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['BAL'][i]['DT'][0]['DT'][0])
                                if (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['BAL'][i]['DT'][0]['DTTM'][0])
                                    key_pair[i]['DTTM'] = (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['BAL'][i]['DT'][0]['DTTM'][0])
                                // }
                            }
                            key_pair[i]['NBOFNTRIES'] = json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['TXSSUMMRY'][0]['TTLNTRIES'][0]['NBOFNTRIES'][0]
                            key_pair[i]['SUM'] = json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['TXSSUMMRY'][0]['TTLNTRIES'][0]['SUM'][0]
                            key_pair[i]['CDTDBTIND2'] = json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['TXSSUMMRY'][0]['TTLNTRIES'][0]['TTLNETNTRY'][0]['CDTDBTIND'][0]
                            key_pair[i]['NBOFNTRIES2'] = json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['TXSSUMMRY'][0]['TTLCDTNTRIES'][0]['NBOFNTRIES'][0]
                            key_pair[i]['SUM2'] = json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['TXSSUMMRY'][0]['TTLCDTNTRIES'][0]['SUM'][0]
                            key_pair[i]['NBOFNTRIES3'] = json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['TXSSUMMRY'][0]['TTLDBTNTRIES'][0]['NBOFNTRIES'][0]
                            key_pair[i]['SUM3'] = json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['TXSSUMMRY'][0]['TTLDBTNTRIES'][0]['SUM'][0]
                            /* key_list=Object.keys(json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT']['NTRY'])
                            for(let i in key_list)
                            { */
                            if (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['NTRY'][i]) {
                                if (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['NTRY'][i]['ACCTSVCRREF'][0]) {
                                    key_pair[i]['NTRYREF'] = (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['NTRY'][i]['ACCTSVCRREF'][0])
                                }
                                if (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['NTRY'][i]['AMT'][0]['_']) {
                                    key_pair[i]['AMT2'] = (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['NTRY'][i]['AMT'][0]['_'])
                                }
                                if (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['NTRY'][i]['AMT'][0]['$']['CCY']) {
                                    key_pair[i]['CCY2'] = (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['NTRY'][i]['AMT'][0]['$']['CCY'])
                                }
                                if (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['NTRY'][i]['CDTDBTIND'][0])
                                    key_pair[i]['CDTDBTIND3'] = (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['NTRY'][i]['CDTDBTIND'][0])

                                if (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['NTRY'][i]['STS'][0]['CD'][0])
                                    key_pair[i]['CD'] = (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['NTRY'][i]['STS'][0]['CD'][0])

                                if (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['NTRY'][i]['BOOKGDT'][0]['DT'][0])
                                    key_pair[i]['DT2'] = (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['NTRY'][i]['BOOKGDT'][0]['DT'][0])

                                if (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['NTRY'][i]['BOOKGDT'][0]['DTTM'][0])
                                    key_pair[i]['DTTM2'] = (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['NTRY'][i]['BOOKGDT'][0]['DTTM'][0])

                                if (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['NTRY'][i]['VALDT'][0]['DT'][0])
                                    key_pair[i]['DT3'] = (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['NTRY'][i]['VALDT'][0]['DT'][0])

                                if (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['NTRY'][i]['VALDT'][0]['DTTM'][0])
                                    key_pair[i]['DTTM3'] = (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['NTRY'][i]['VALDT'][0]['DTTM'][0])

                                if (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['NTRY'][i]['NTRYREF'][0]) {
                                    key_pair[i]['ACCTSVCRREF'] = (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['NTRY'][i]['NTRYREF'][0])
                                }

                                if (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['NTRY'][i]['BKTXCD'][0]['PRTRY'][0]['CD'][0]) {
                                    key_pair[i]['CD2'] = (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['NTRY'][i]['BKTXCD'][0]['PRTRY'][0]['CD'][0])
                                }

                                if (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['NTRY'][i]['AMTDTLS'][0]['INSTDAMT'][0]['AMT'][0]['_']) {
                                    key_pair[i]['AMT4'] = (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['NTRY'][i]['AMTDTLS'][0]['INSTDAMT'][0]['AMT'][0]['_'])
                                }
                                if (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['NTRY'][i]['AMTDTLS'][0]['TXAMT'][0]['AMT'][0]['_']) {
                                    key_pair[i]['AMT3'] = (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['NTRY'][i]['AMTDTLS'][0]['TXAMT'][0]['AMT'][0]['_'])
                                }

                                if (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['NTRY'][i]['AMTDTLS'][0]['TXAMT'][0]['AMT'][0]['$']['CCY']) {
                                    key_pair[i]['CCY3'] = (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['NTRY'][i]['AMTDTLS'][0]['TXAMT'][0]['AMT'][0]['$']['CCY'])
                                }

                                if (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['NTRY'][i]['AMTDTLS'][0]['TXAMT'][0]['AMT'][0]['_']) {
                                    key_pair[i]['AMT5'] = (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['NTRY'][i]['AMTDTLS'][0]['TXAMT'][0]['AMT'][0]['_'])
                                }

                                if (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['NTRY'][i]['AMTDTLS'][0]['INSTDAMT'][0]['AMT'][0]['_']) {
                                    key_pair[i]['CCY4'] = (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['NTRY'][i]['AMTDTLS'][0]['INSTDAMT'][0]['AMT'][0]['_'])
                                }

                                if (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['NTRY'][i]['NTRYDTLS'][0]['TXDTLS'][0]['REFS'][0]['MSGID'][0]) {
                                    key_pair[i]['MSGID2'] = (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['NTRY'][i]['NTRYDTLS'][0]['TXDTLS'][0]['REFS'][0]['MSGID'][0])
                                }

                                if (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['NTRY'][i]['NTRYDTLS'][0]['TXDTLS'][0]['REFS'][0]['ACCTSVCRREF'][0]) {
                                    key_pair[i]['ACCTSVCRREF2'] = (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['NTRY'][i]['NTRYDTLS'][0]['TXDTLS'][0]['REFS'][0]['ACCTSVCRREF'][0])
                                }

                                if (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['NTRY'][i]['NTRYDTLS'][0]['TXDTLS'][0]['REFS'][0]['PMTINFID'][0]) {
                                    key_pair[i]['PMTINFID'] = (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['NTRY'][i]['NTRYDTLS'][0]['TXDTLS'][0]['REFS'][0]['PMTINFID'][0])
                                }

                                if (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['NTRY'][i]['NTRYREF'][0])
                                    key_pair[i]['INSTRD'] = (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['NTRY'][i]['NTRYREF'][0])
                                if (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['NTRY'][i]['NTRYDTLS'][0]['TXDTLS'][0]['REFS'][0]['ENDTOENDID'][0]) {
                                    key_pair[i]['ENDTOENDID'] = (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['NTRY'][i]['NTRYDTLS'][0]['TXDTLS'][0]['REFS'][0]['ENDTOENDID'][0])
                                }

                                if (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['NTRY'][i]['NTRYDTLS'][0]['TXDTLS'][0]['REFS'][0]['TXID'][0]) {
                                    key_pair[i]['TXID'] = (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['NTRY'][i]['NTRYDTLS'][0]['TXDTLS'][0]['REFS'][0]['TXID'][0])
                                }

                                if (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['NTRY'][i]['NTRYDTLS'][0]['TXDTLS'][0]['REFS'][0]['CLRSYSREF'][0]) {
                                    key_pair[i]['CLRSYSREF'] = (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['NTRY'][i]['NTRYDTLS'][0]['TXDTLS'][0]['REFS'][0]['CLRSYSREF'][0])
                                }

                                if (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['NTRY'][i]['NTRYDTLS'][0]['TXDTLS'][0]['REFS'][0]['UETR']) {
                                    key_pair[i]['UETR'] = (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['NTRY'][i]['NTRYDTLS'][0]['TXDTLS'][0]['REFS'][0]['UETR'])
                                }

                                if (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['NTRY'][i]['NTRYDTLS'][0]['TXDTLS'][0]['AMT'][0]['_']) {
                                    key_pair[i]['AMT6'] = (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['NTRY'][i]['NTRYDTLS'][0]['TXDTLS'][0]['AMT'][0]['_'])
                                }

                                if (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['NTRY'][i]['NTRYDTLS'][0]['TXDTLS'][0]['AMT'][0]['$']['CCY']) {
                                    key_pair[i]['CCYS'] = (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['NTRY'][i]['NTRYDTLS'][0]['TXDTLS'][0]['AMT'][0]['$']['CCY'])
                                }

                                if (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['NTRY'][i]['NTRYDTLS'][0]['TXDTLS'][0]['CDTDBTIND'][0]) {
                                    key_pair[i]['CDTDBTIND4'] = (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['NTRY'][i]['NTRYDTLS'][0]['TXDTLS'][0]['CDTDBTIND'][0])
                                }

                                if (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['NTRY'][i]['NTRYDTLS'][0]['TXDTLS'][0]['RLTDAGTS'][0]['CDTRAGT'][0]['FININSTNID'][0]['BICFI'][0]) {
                                    key_pair[i]['BICFI'] = (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['NTRY'][i]['NTRYDTLS'][0]['TXDTLS'][0]['RLTDAGTS'][0]['CDTRAGT'][0]['FININSTNID'][0]['BICFI'][0])
                                }
                                if (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['NTRY'][i]['NTRYDTLS'][0]['TXDTLS'][0]['RLTDAGTS'][0]['DBTRAGT'][0]['FININSTNID'][0]['BICFI'][0]) {
                                    key_pair[i]['BICFI2'] = (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['NTRY'][i]['NTRYDTLS'][0]['TXDTLS'][0]['RLTDAGTS'][0]['DBTRAGT'][0]['FININSTNID'][0]['BICFI'][0])
                                }

                                if (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['NTRY'][i]['NTRYDTLS'][0]['TXDTLS'][0]['RLTDAGTS'][0]['INSTDAGT'][0]['FININSTNID'][0]['BICFI'][0]) {
                                    key_pair[i]['BICFI3'] = (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['NTRY'][i]['NTRYDTLS'][0]['TXDTLS'][0]['RLTDAGTS'][0]['INSTDAGT'][0]['FININSTNID'][0]['BICFI'][0])
                                }
                                if (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['NTRY'][i]['NTRYDTLS'][0]['TXDTLS'][0]['RLTDAGTS'][0]['INSTGAGT'][0]['FININSTNID'][0]['BICFI'][0]) {
                                    key_pair[i]['BICFI4'] = (json_parsed['DOCUMENT']['BKTOCSTMRSTMT'][0]['STMT'][0]['NTRY'][i]['NTRYDTLS'][0]['TXDTLS'][0]['RLTDAGTS'][0]['INSTGAGT'][0]['FININSTNID'][0]['BICFI'][0])
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
