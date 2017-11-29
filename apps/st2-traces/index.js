'use strict';

var mod = module.exports = angular.module('main.apps.st2Traces', [

]);

var controller = require('./traces.controller.js');
var config = require('./traces.config.js');

mod
    .config(config)
    .controller(controller.name, controller)
;
