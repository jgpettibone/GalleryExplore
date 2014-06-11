galleryExploreApp.controller('ImageGalleryController', function($scope, $http, $window, $location, ImageHTTPService) {

  ImageHTTPService.getImages().then(function(data){
    $scope.images = data;
  });

  $scope.showDetails = function(src) {
    ImageHTTPService.showDetails(src);
    $location.path('/details').replace;
  };

});

