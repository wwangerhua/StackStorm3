'use strict';

var template = require('./template.html');

module.exports =
  function st2FormObject() {
    return {
      restrict: 'C',
      require: ['ngModel', '^?form'],
      scope: {
        'spec': '=',
        'options': '=',
        'ngModel': '=',
        'disabled': '='
      },
      templateUrl: template,
      link: function (scope, element, attrs, ctrls) {
        var ctrl = ctrls[0];
        var form = ctrls[1];

        scope.name = ctrl.$name;

        ctrl.$render = function () {
          scope.rawResult = JSON.stringify(ctrl.$viewValue, null, 2);
        };

        scope.$watch('rawResult', function (rawResult) {
          var innerCtrl = form[ ctrl.$name + '__inner' ];

          var model;

          try {
            model = JSON.parse(rawResult);
            innerCtrl && innerCtrl.$setValidity('json', true);
          } catch (e) {
            innerCtrl && innerCtrl.$setValidity('json', false);
          }

          ctrl.$setViewValue(model);
        });
      }
    };
  };
