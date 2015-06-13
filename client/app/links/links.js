angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $routeParams, Links) {
  $scope.data = {};

  $scope.getLinks = function() {
    Links.getLinks().then(function(data) {
      $scope.data.links = data;
    });
  };

  //init
  (function() {
    console.log($routeParams);
    if ($routeParams.code) {
      console.log('redirect fired')
      Links.redirectLink($routeParams.code);
    }
    $scope.getLinks();
  })();
});

