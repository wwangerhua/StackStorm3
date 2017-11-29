'use strict';

var template = require('./template.html');

module.exports = function st2EventConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/event');

    const baseState = {
        title: 'Event'
    };

    $stateProvider
        .state('event', Object.assign({}, baseState, {
            abstract: true,
            url: '/event',
            icon: 'icon-view',
            controller: 'st2EventCtrl',
            templateUrl: template,
            position: 1
        }))
        .state('event.list', Object.assign({}, baseState, {
            url: '?page&status&action&rule&trigger&trigger_type'
        }))
        .state('event.general', Object.assign({}, baseState, {
            url: '/{id:\\w+}/general?page&status&action&rule&trigger&trigger_type'
        }))
        .state('event.code', Object.assign({}, baseState, {
            url: '/{id:\\w+}/code?page&status&action&rule&trigger&trigger_type'
        }))
        .state('event.rerun', Object.assign({}, baseState, {
            url: '/{id:\\w+}/rerun?page&status&action&rule&trigger&trigger_type'
        }))

    ;

};
