'use strict';
(function () {

  var shapesCtrl = function () {
    this.foo = 'bar';
  };

  var initFabric = function () {
    var canvas = new fabric.Canvas('c');

// create a rectangle object
    var rect = new fabric.Rect({
                                 left  : 100,
                                 top   : 100,
                                 fill  : 'red',
                                 width : 20,
                                 height: 20
                               });

// "add" rectangle onto canvas
    canvas.add(rect);
  };
  initFabric();

  angular.module('shapeSizer', [])
    .controller('shapesCtrl', shapesCtrl);

})();