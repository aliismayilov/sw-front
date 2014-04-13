'use strict';

angular.module('swFrontApp')
  .controller('EdgesController', function ($scope, edges) {
    $scope.edges = edges.query();

    var selectedEdge = null;

    $scope.selectEdge = function(edge) {
      selectedEdge = (selectedEdge === edge) ? null : edge;
    };

    $scope.isSelected = function(edge) {
      return edge === selectedEdge;
    };

    $scope.displayRequirements = function(reqs) {
      var resultString = '';
      reqs.forEach(function (req) {
        if (resultString !== '') {resultString += ', '};
        if (req.name) {
          resultString += req.name + ' ';
        };
        resultString += req.value;
      });
      return resultString;
    };
  });
