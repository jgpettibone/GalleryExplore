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


galleryExploreApp.controller('ImageDetailsController', function($scope, $http) {

  $http({
    method: 'GET',
    url: '/details'
  })
  .then(function(obj){
    $scope.image = obj.data;
  });

  $scope.addTag = function(tag, src) {
    $http({
      method: 'POST',
      url: '/tags',
      data: {src: src, tags: tag}
    });
  };


});

galleryExploreApp.controller('TourCreateController', function($scope) {

});

galleryExploreApp.controller('ImageGalleryController', function($scope, $http, $location) {
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
    $location.path('/details');
  }

});

