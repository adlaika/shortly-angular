angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $routeParams, Links) {
  $scope.data = {};
  $scope.getLinks = function() {
    Links.getLinks().then(function(data) {
      $scope.data.links = data;
    });
  };

  $scope.redirectLink = function() {
    Links.redirectLink($routeParams.code).then(function(data) {
      console.log('redirected!');
    });
  };

  //init
  (function() {
    $scope.getLinks();
  })();
});

