galleryExploreApp.controller('TourCreateController', function($scope, $location, $http, ImageHTTPService) {

  $scope.tour = {};
  $scope.message = "";

  ImageHTTPService.getSaveds().then(function(data){
    $scope.tourimages = data;
    $scope.notes = $scope.tourimages.talkingpts;
    checkTourLength($scope.tourimages);
  });

  $scope.submitName = function(tourname){
    $scope.tour.tourname = tourname;
    $scope.tourname = '';
  }

  $scope.removeImage = function(image) {
    ImageHTTPService.removeImage(image).then(function(data){
      $scope.tourimages = data;
      checkTourLength($scope.tourimages);
    });
  };

  $scope.changeOrder = function(order, id) {
    ImageHTTPService.changeOrder(order, id).then(function(data){
      $scope.tourimages = data;
    });
  };

  $scope.getOrder = function(image) {
    return image.order;
  };

  var checkTourLength = function(tour) {
    if (tour.length === 0)
      $scope.message = 'Use Explore Images to add art to the tour.';
  };

});
