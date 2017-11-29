'use strict';

var mod = module.exports = angular.module('main.apps.st2Event', [

]);

var controller = require('./event.controller.js');
var config = require('./event.config.js');

mod
    .config(config)
    .controller(controller.name, controller)
;
