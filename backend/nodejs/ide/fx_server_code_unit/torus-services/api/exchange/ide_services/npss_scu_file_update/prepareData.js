var $MODULEPATH = '../../../../../node_modules/';
var express = require($MODULEPATH + 'express');
var Path = require($MODULEPATH + 'path');
var $REFPATH = Path.join(__dirname, '../../../../../torus-references/');
var app = express.Router();

function prepareData(params, callback) {
callback(params);

}
module.exports = { prepareData: prepareData };