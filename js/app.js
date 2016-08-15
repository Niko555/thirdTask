"use strict";

var app = angular.module('mainModule', []);

app.controller('mainCtrl', function ($scope) {
    $scope.mode = 'table1';
    $scope.table1 = [];
    $scope.table2 = [];
    CompleteTheTables();
    DrawGraphicOfTable1($scope.table1);

    $scope.ChooseTable1 = function () {
        $scope.mode = 'table1';
        DrawGraphicOfTable1($scope.table1);
    };

    $scope.ChooseTable2 = function () {
        $scope.mode = 'table2';
        DrawGraphicOfTable2($scope.table2);
    };

    function CompleteTheTables() {
        // Complete the first table
        while ($scope.table1.length < 5) {
            var randomX = Math.ceil(Math.random() * 10);
            var randomY = Math.ceil(Math.random() * 10);
            $scope.table1.push({x: randomX, y: randomY});
        }

        // Complete the second table
        while ($scope.table2.length < 5) {
            var randomX = 2 * Math.ceil(Math.random() * 5);
            var randomY = Math.ceil(Math.random() * 10);
            var arrayOfX = [];

            // Array of unique X in table2
            angular.forEach($scope.table2, function (item) {
                arrayOfX.push(item.x);
            });

            if (arrayOfX.indexOf(randomX) == -1) {
                $scope.table2.push({x: randomX, y: randomY});
            }
        }
    };

});
