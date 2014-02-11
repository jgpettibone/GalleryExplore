var galleryExploreApp = angular.module('galleryExploreApp', [
  'ngRoute'
]);

galleryExploreApp.config(['$routeProvider',
  function($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'client/partials/gallery.html',
      controller: 'ImageGalleryController'
    }).
    when('/details', {
      templateUrl: 'client/partials/details.html',
      controller: 'ImageDetailsController'
    }).
    when('/create', {
      templateUrl: 'client/partials/tour.html',
      controller: 'TourCreateController'
    }).
    otherwise({
      redirectTo: '/'
    });
}]);


galleryExploreApp.service('ImageService', function() {
  return {
    src: "../images/1980-24-1.jpg",
  }
})

galleryExploreApp.controller('ImageDetailsController', function($scope, $http, ImageService) {

  // console.log('ImageService.src', ImageService.src);

  $http({
    method: 'POST',
    url: '/details',
    data: {src: ImageService.src}
  }).then(function(obj){
    $scope.image = obj.data;
    // console.log(obj.data);
  });

  $scope.addTag = function(tag, src) {
    $http({
      method: 'POST',
      url: '/tags',
      data: {src: src, tags: tag}
    }).then(function(obj){
      // $scope.image = obj.data;
      // console.log(obj.data);
    });
  };


});

galleryExploreApp.controller('TourCreateController', function($scope, ImageService) {

  $scope.tourimages = ImageService.tourimages;

});

galleryExploreApp.controller('ImageGalleryController', function($scope, $http, $location, ImageService) {
  $http({
    method: 'GET',
    url: '/images'
  }).then(function(obj){
    $scope.images = obj.data;
  });


  $scope.showDetails = function(src) {
    ImageService.src = src;
    $scope.save();
  };

  $scope.save = function() {
    $location.path('/details');
  }

});

