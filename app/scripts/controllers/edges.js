'use strict';

angular.module('swFrontApp')
  .controller('EdgesController', function ($scope, edges, categories, ranks) {
    $scope.edges = edges.query();
    $scope.categories = categories.query();
    $scope.ranks = ranks.query();

    $scope.filterBy = {
      search: '',
      category: $scope.categories[0],
      rank: $scope.ranks[0]
    };

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
