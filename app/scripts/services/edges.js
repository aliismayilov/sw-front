'use strict';

angular.module('swFrontApp').service('edges', function() {
  this.query = function() {
    return [
      {
        name: 'Attractive',
        description: 'Attractive...',
        category: {
          name: 'Background'
        },
        requirements: [
          { name: null, value: 'Novice' },
          { name: 'Vigor', value: 'd6' }
        ]
      },
      {
        name: 'Very attractive',
        description: 'Very attractive...',
        category: {
          name: 'Background'
        },
        requirements: [
          { name: null, value: 'Novice' },
          { name: null, value: 'Attractive' }
        ]
      },
      {
        name: 'Brave',
        description: 'Brave...',
        category: {
          name: 'Background'
        },
        requirements: [
          { name: null, value: 'Novice' },
          { name: 'Spirit', value: 'd6' }
        ]
      },
      {
        name: 'Block',
        description: 'Block...',
        category: {
          name: 'Combat'
        },
        requirements: [
          { name: null, value: 'Seasoned' },
          { name: 'Fighting', value: 'd8' }
        ]
      },
      {
        name: 'Brawler',
        description: 'Brawler...',
        category: {
          name: 'Combat'
        },
        requirements: [
          { name: null, value: 'Novice' },
          { name: 'Strength', value: 'd6' }
        ]
      },
      {
        name: 'Command',
        description: 'Command...',
        category: {
          name: 'Leadership'
        },
        requirements: [
          { name: null, value: 'Novice' },
          { name: 'Smart', value: 'd6' }
        ]
      },
      {
        name: 'Hold the Line!',
        description: 'Hold the Line!...',
        category: {
          name: 'Leadership'
        },
        requirements: [
          { name: null, value: 'Seasoned' },
          { name: 'Smart', value: 'd8' },
          { name: null, value: 'Command' }
        ]
      }
    ];
  };
});
