'use strict';
angular.module('main')
  .constant('st2Config', {

    hosts: [ {
        name: 'Dev Env',
        url: 'http://118.190.138.169/api',
        auth: 'http://118.190.138.169/auth'
    },{
      name: 'Express',
        url: 'http://118.190.138.169/api',
        auth: 'http://118.190.138.169/auth'
    }]

  });
