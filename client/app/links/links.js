angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};
  $scope.getLinks = function() {
    Links.getLinks().then(function(resp) {
      $scope.data.links = resp;
    });
  };

  //init
  (function() {
    $scope.getLinks();
  })();
});

