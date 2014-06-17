galleryExploreApp.controller('TourViewController', function($scope, $window, $location, ImageHTTPService, TourService) {

  ImageHTTPService.getTours().then(function(data){
    $scope.tours = data;
  });

  $scope.selectTour = function(tour){
    TourService.setTour(tour);
    $location.path('/onetour').replace;
  };

});

