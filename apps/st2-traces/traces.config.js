'use strict';

var template = require('./template.html');

module.exports = function st2TracesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/traces');

    const baseState = {
        title: 'Traces'
    };

    $stateProvider
        .state('traces', Object.assign({}, baseState, {
            abstract: true,
            url: '/traces',
            icon: 'icon-info',
            controller: 'st2TracesCtrl',
            templateUrl: template,
            position: 1
        }))
        .state('traces.list', Object.assign({}, baseState, {
            url: '?page&status&action&rule&trigger&trigger_type'
        }))
        .state('traces.general', Object.assign({}, baseState, {
            url: '/{id:\\w+}/general?page&status&action&rule&trigger&trigger_type'
        }))
        .state('traces.code', Object.assign({}, baseState, {
            url: '/{id:\\w+}/code?page&status&action&rule&trigger&trigger_type'
        }))
        .state('traces.rerun', Object.assign({}, baseState, {
            url: '/{id:\\w+}/rerun?page&status&action&rule&trigger&trigger_type'
        }))

    ;

};
