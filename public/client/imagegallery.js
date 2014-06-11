galleryExploreApp.controller('ImageGalleryController', function($scope, $http, $window, $location, ImageService) {

  ImageService.getImages().then(function(data){
    $scope.images = data;
  });

  $scope.showDetails = function(src) {
    ImageService.showDetails(src);
    $location.path('/details').replace;
  };

});

