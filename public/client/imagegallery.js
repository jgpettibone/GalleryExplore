galleryExploreApp.controller('ImageGalleryController', function($scope, $http, $window, $location) {
  $http({
    method: 'GET',
    url: '/images'
  }).then(function(obj){
    $scope.images = obj.data;
  });
  
  $scope.showDetails = function(src) {
    $http({
      method: 'POST',
      url: '/detailimage',
      data: {src: src}
    });
    $scope.save();
  };

  $scope.save = function() {
    $window.open('/#/details');
  }

});

