angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};

  $scope.addLink = function() {
    Links.postLink($scope.link).then(function() {
      $scope.link.url = '';
    })
    .catch(function (error) {
      $scope.errorMessage = "Invalid URL";
      console.error(error);
    });
  };
});
