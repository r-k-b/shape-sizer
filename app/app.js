'use strict';
(function () {
    var shapeCanvas;

    var shapeModListener = function() {};

    var initFabric = function () {
        shapeCanvas = new fabric.Canvas('c');

        // create a rectangle object
        var rect = new fabric.Rect({
            left: 100,
            top: 100,
            fill: 'red',
            width: 40,
            height: 40
        });

        // "add" rectangle onto canvas
        shapeCanvas.add(rect);

        // fire on load
        shapeModListener();

        // add listeners
        shapeCanvas.on('object:modified', shapeModListener);
        /*shapeCanvas.on('object:moving', shapeModListener);
        shapeCanvas.on('object:scaling', shapeModListener);
        shapeCanvas.on('object:rotating', shapeModListener);*/
    };
    angular.element(document).ready(initFabric);

    var shapesCtrl = function () {
        var vm = this;
        vm.addRect = function() {
            var rect = new fabric.Rect({
                left: 20,
                top: 20,
                fill: 'red',
                width: 30,
                height: 30
            });
            shapeCanvas.add(rect);
        };

        vm.area = 12;
        vm.perimeter = 6;
        vm.costPerM2 = .0050;

        //noinspection JSUnusedGlobalSymbols
        vm.canvasShapes = function() {
            if(typeof shapeCanvas !== 'undefined') {
                return shapeCanvas.getObjects();
            }
            return [null];
        };

        vm.calcPrice = function () {
            return vm.area * vm.costPerM2;
        };

        shapeModListener = function(options, event) {
            var area = 0,
                perimeter = 0;
            var getNewGeometry = function (value, key) {
                area += value.currentHeight * value.currentWidth;
                perimeter += value.currentHeight * 2 + value.currentWidth * 2;
            };

            angular.forEach(shapeCanvas.getObjects(), getNewGeometry);
            vm.area = area;
            vm.perimeter = perimeter;

            var scope = angular.element(document.getElementById('c')).scope();
            scope.$apply();
        };
    };

    angular.module('shapeSizer', [])
        .controller('shapesCtrl', shapesCtrl);

})();