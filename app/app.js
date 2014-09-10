'use strict';
(function () {

    var shapesCtrl = function () {
        this.foo = 'bar';
    };

    var initFabric = function () {
        var canvas = new fabric.Canvas('c');

        // create a rectangle object
        var rect = new fabric.Rect({
            left: 100,
            top: 100,
            fill: 'grey',
            width: 40,
            height: 40
        });

        // "add" rectangle onto canvas
        canvas.add(rect);
    };
    initFabric();

    angular.module('shapeSizer', [])
        .controller('shapesCtrl', shapesCtrl);

})();