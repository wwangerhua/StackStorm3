'use strict';

import component from './rerun-popup.component.js';

module.exports =
  function st2Rerun(reactDirective) {
    var overrides = {
      restrict: 'ECA',
        // link:function (scope,element,attrs) {
        //     var input = angular.element(document.getElementById('test16'));
        //     var input2 = angular.element(document.getElementById('test17'));
        //     // console.log(input);
        //     input2.on('click',function () {
        //         console.log(input.value);
        //         console.log(scope);
        //         console.log(element);
        //         console.log(attrs);
        //
        //     });
        // }
    };

    const a = reactDirective(component, null, overrides);
    return a;
  };
