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
    when('/tours', {
      templateUrl: 'client/partials/tours.html',
      controller: 'TourViewController'
    }).
    when('/create', {
      templateUrl: 'client/partials/tour.html',
      controller: 'TourCreateController'
    }).
    otherwise({
      redirectTo: '/'
    });
}]);


galleryExploreApp.controller('ImageDetailsController', function($scope, $http, $location) {

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
    }).then(function(){
      $scope.save();
    });
  };

  $scope.save = function() {
    $location.path('/details');
  }

});

galleryExploreApp.controller('TourViewController', function($scope) {

  $scope.tours = [
    {tourid: 1, tourname: 'AOA Masterpieces - Three In 30', museum:'deyoung'},
    {tourid: 2, tourname: 'Oceania - Three In 30', museum:'deyoung'},
    {tourid: 3, tourname: 'Female Figures, Female Rituals, Female Artists', museum:'deyoung'}
  ];

//1 - dogon, yipwon, slit drum, stela
//2 - female cult hook, string bag, yipwon, slit drum, female house post 
//3 - female cult hook, female giving birth, mourning costume, bilum, female house post, sowei mask, odundo pot, harp, bowstand

  $scope.talkingpts = [

  ];

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

