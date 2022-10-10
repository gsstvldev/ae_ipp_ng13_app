var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {

    var reqInstanceHelper = require($REFPATH + 'common/InstanceHelper');
    var reqLogInfo =  require($REFPATH + 'log/trace/LogInfo');
    var reqTranDBInstance = require($REFPATH + "instance/TranDBInstance.js");

    var pHeaders = appRequest.headers;
    var serviceName = 'GetvisibleActions';
    reqLogInfo.AssignLogInfoDetail(appRequest, function (objLogInfo, objSessionInfo) {
        reqInstanceHelper.PrintInfo(serviceName, 'Begin', objLogInfo);
        reqTranDBInstance.GetTranDBConn(pHeaders, false, async function (pSession) {
            try {
                reqInstanceHelper.PrintInfo(serviceName, 'Got the db connection', objLogInfo);
                var clientReqParam = appRequest.body.PARAMS;


                var pCond = {
                    vph_app_code: clientReqParam.AppCode
                };


                var AppActionBtn = await queryTable('CORE_Q_STATUS_ACTIONS', pCond);
                var AppLockingMode = await queryTable('CORE_Q_STATUS_LOCK_PARAMS', pCond);
                var AppListingMode = await queryTable('CORE_ROLE_LISTING_PARAMS', pCond);



                var result = {
                    actionBtn: AppActionBtn,
                    lockingMode: AppLockingMode,
                    listingMode: AppListingMode
                };
                

                reqInstanceHelper.SendResponse(serviceName, appResponse, result, objLogInfo);

                async function queryTable(pTable, pCond) {
                    return new Promise((resolve, reject) => {
                        reqInstanceHelper.PrintInfo(serviceName, 'query the target table', objLogInfo);
                        reqTranDBInstance.GetTableFromTranDB(pSession, pTable, pCond, objLogInfo, function (res, err) {
                            try {
                                if (res.length) {
                                    reqInstanceHelper.PrintInfo(serviceName, 'Got the result from target table. Rows returned | ' + res.length, objLogInfo);
                                    // reqInstanceHelper.SendResponse(serviceName, appResponse, res, objLogInfo);
                                    resolve(res);
                                } else {
                                    // reqInstanceHelper.SendResponse(serviceName, appResponse, '', objLogInfo, 'ERR-001', 'Setup not found for queue | ' + clientReqParam.Status, '', 'FAILURE');
                                    resolve([]);
                                }
                            } catch (error) {
                                reqInstanceHelper.PrintInfo(serviceName, 'Exception occured ' + error, objLogInfo);
                                reqInstanceHelper.SendResponse(serviceName, appResponse, '', objLogInfo, 'ERR-002', 'Exception occured  ', error, 'FAILURE');

                            }
                        });

                    });
                }
            } catch (error) {
                reqInstanceHelper.PrintInfo(serviceName, 'Exception occured ' + error, objLogInfo);
                reqInstanceHelper.SendResponse(serviceName, appResponse, '', objLogInfo, 'ERR-003', 'Exception occured  ', error, 'FAILURE');
            }
        });
    });

});

module.exports = app;
