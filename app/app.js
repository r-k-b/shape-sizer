'use strict';
(function () {

  var shapesCtrl = function() {
    this.foo = 'bar';
  };

  angular.module('shapeSizer', [])
    .controller('shapesCtrl', shapesCtrl);

})();