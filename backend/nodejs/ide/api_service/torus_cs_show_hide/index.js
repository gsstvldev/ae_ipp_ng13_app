var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {
//Modified - For client_ip detail hide -on 22-11-2023 by daseen
    

    var reqInstanceHelper = require($REFPATH + 'common/InstanceHelper');
    var reqLogInfo = require($REFPATH + 'log/trace/LogInfo');
    var reqTranDBInstance = require($REFPATH + "instance/TranDBInstance.js");

    var pHeaders = appRequest.headers;
    var serviceName = 'GetvisibleActions';
    reqLogInfo.AssignLogInfoDetail(appRequest, function (objLogInfo, objSessionInfo) {
        reqInstanceHelper.PrintInfo(serviceName, 'Begin', objLogInfo);
        reqTranDBInstance.GetTranDBConn(pHeaders, false, async function (pSession) {
            try {
                reqInstanceHelper.PrintInfo(serviceName, 'Got the db connection', objLogInfo);
                var clientReqParam = appRequest.body.PARAMS;
                var action = {}, lock = {}, list = {};
                action.query = `select cqsa_id,vph_app_code,process_queue_status,action,action_mode,ui_component_name,role_id,role_name from CORE_Q_STATUS_ACTIONS where vph_app_code=? `; //${params.workflow_type}
                action.params = [clientReqParam.AppCode]
                lock.query = `select cqslp_id,vph_app_id,vph_app_code,queue_code,process_queue_status,ui_component_name,locking_mode,locking_count,vph_app_name,tenant_id,screen_module,screen_menu_group,screen_name from CORE_Q_STATUS_LOCK_PARAMS where vph_app_code=? `; //${params.workflow_type}
                lock.params = [clientReqParam.AppCode]
                list.query = `select crlp_id,vph_app_code,vph_app_id,listing_mode,ui_component_name,role_id,role_name,tenant_id,screen_module,screen_menu_group,screen_name from CORE_ROLE_LISTING_PARAMS where vph_app_code=? `; //${params.workflow_type}
                list.params = [clientReqParam.AppCode]
                

                var AppActionBtn = await queryTable(action);
                var AppLockingMode = await queryTable(lock);
                var AppListingMode = await queryTable(list);



                var result = {
                    actionBtn: AppActionBtn,
                    lockingMode: AppLockingMode,
                    listingMode: AppListingMode
                };


                reqInstanceHelper.SendResponse(serviceName, appResponse, result, objLogInfo);

                async function queryTable(pTable) {
                    return new Promise((resolve, reject) => {
                        reqInstanceHelper.PrintInfo(serviceName, 'query the target table', objLogInfo);
                        reqTranDBInstance.ExecuteSQLQueryWithParams(pSession, pTable, objLogInfo, function (res, err) {
                            try {
                                if (res.rows.length) {
                                    reqInstanceHelper.PrintInfo(serviceName, 'Got the result from target table. Rows returned | ' + res.length, objLogInfo);
                                    // reqInstanceHelper.SendResponse(serviceName, appResponse, res, objLogInfo);
                                    resolve(res.rows);
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
