var $MODULEPATH = '../../../../../node_modules/';
var express = require($MODULEPATH + 'express');
var Path = require($MODULEPATH + 'path');
var $REFPATH = Path.join(__dirname, '../../../../../torus-references/');
var app = express.Router();

function downloaExtension(params, callback) {
console.log('Success');

}
module.exports = { downloaExtension: downloaExtension };