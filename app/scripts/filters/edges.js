'use strict';

angular.module('swFrontApp').filter('edges', function() {
  return function(edges, filterBy) {

    var getRank = function(reqs) {
      for(var i = 0; i < reqs.length; i++) {
        if (reqs[i].mode === 'rank') {
          return reqs[i].value;
        }
      }
    };

    return edges.filter(function(element, index, array) {
      var category = (filterBy.category.name === 'All' || element.category.name === filterBy.category.name);
      var rank = (filterBy.rank.name === 'All' || getRank(element.requirements) === filterBy.rank.name );
      return category && rank;
    });
  };
});
