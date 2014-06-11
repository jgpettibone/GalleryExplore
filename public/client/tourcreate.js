galleryExploreApp.controller('TourCreateController', function($scope, $location, $http, ImageService) {

  $scope.tour = {};
  $scope.message = "";

  ImageService.getSaveds().then(function(data){
    $scope.tourimages = data;
    $scope.notes = $scope.tourimages.talkingpts;
    checkTourLength($scope.tourimages);
  });

  $scope.submitName = function(tourname){
    $scope.tour.tourname = tourname;
    $scope.tourname = '';
  }

  $scope.removeImage = function(image) {
    ImageService.removeImage(image).then(function(data){
      $scope.tourimages = data;
      checkTourLength($scope.tourimages);
    });
  };

  $scope.changeOrder = function(order, id) {
    ImageService.changeOrder(order, id).then(function(data){
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
