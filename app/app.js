'use strict';
(function () {
    var shapeCanvas;
    var initFabric = function () {
        shapeCanvas = new fabric.Canvas('c');

        // create a rectangle object
        var rect = new fabric.Rect({
            left: 100,
            top: 100,
            fill: 'grey',
            width: 40,
            height: 40
        });

        // "add" rectangle onto canvas
        shapeCanvas.add(rect);

        // add listeners
        var shapeModListener = function(options, event) {
            console.log(options);
        };
        shapeCanvas.on('object:modified', shapeModListener);
        shapeCanvas.on('object:moving', shapeModListener);
        shapeCanvas.on('object:scaling', shapeModListener);
        shapeCanvas.on('object:rotating', shapeModListener);
    };
    angular.element(document).ready(initFabric);

    var shapesCtrl = function () {
        this.addRect = function() {
            var rect = new fabric.Rect({
                left: 20,
                top: 20,
                fill: 'red',
                width: 30,
                height: 30
            });
            shapeCanvas.add(rect);
        };

        this.area = 12;
        this.perimeter = 6;
        this.costPerM2 = 50;
        this.quoteValue = this.area * this.costPerM2;

        //noinspection JSUnusedGlobalSymbols
        this.canvasShapes = function() {
            if(typeof shapeCanvas !== 'undefined') {
                return shapeCanvas.getObjects();
            }
            return [];
        };
    };

    angular.module('shapeSizer', [])
        .controller('shapesCtrl', shapesCtrl);

})();