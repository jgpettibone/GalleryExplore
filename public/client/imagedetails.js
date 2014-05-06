galleryExploreApp.controller('ImageDetailsController', function($scope, $http, $window, $location) {

  $http({
    method: 'GET',
    url: '/details'
  })
  .then(function(obj){
    $scope.image = obj.data;
  });

  $scope.showDoc = function(path){
    $window.open(path);
  };

  $scope.addTag = function(tag, src) {
    $http({
      method: 'POST',
      url: '/tags',
      data: {src: src, tags: tag}
    }).then(function(data){
      $scope.image.tags = data.data['tags'];
    });
  };

  $scope.addImage = function(img) {
    $http({
      method: 'POST',
      url: '/saved',
      data: img
    });
  };

  $scope.save = function() {
    $location.path("http://www.google.com");
  }

});

