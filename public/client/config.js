galleryExploreApp.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
  // $locationProvider.html5Mode(true);
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
    when('/onetour', {
      templateUrl: 'client/partials/onetour.html',
      controller: 'OneTourViewController'
    }).
     when('/create', {
      templateUrl: 'client/partials/tour.html',
      controller: 'TourCreateController'
    }).
    otherwise({
      redirectTo: '/'
    });
}]);
