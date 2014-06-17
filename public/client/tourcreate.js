galleryExploreApp.controller('TourCreateController', function($scope, $location, $http, ImageHTTPService) {

  $scope.tour = {};
  $scope.message = '';
  $scope.notes = {};
  $scope.tourimages;

  ImageHTTPService.getSaveds().then(function(data){
    $scope.tourimages = data;
    populateTalkingPts($scope.tourimages);
    checkTourLength($scope.tourimages);
  });

  $scope.saveTour = function(tourname){
    console.log('tourname = ', $scope.tourname);
    if (!$scope.tourname) { 
      $scope.message = 'This tour needs a name before it can be saved';
    }
    else {
      $scope.message = '';
    }
  };

  $scope.addTag = function(tag, id) {
    ImageHTTPService.addTag(tag, id).then(function(data){
      var tours = $scope.tourimages;
      for (var i = 0; i < tours.length; i++) {
        if (tours[i].id === id) tours[i].tags = data['tags']
      }      
    });
    $scope.tag = null;
  };


  $scope.addTalkingPts = function(notes, id) {
    console.log('notes = ', notes);
    ImageHTTPService.addTalkingPts(notes, id).then(function(data){
      $scope.notes[$scope.image.id] = data['talkingpts'];
    });
  };


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

  $scope.findArt = function() {
    $location.path('/').replace;
  };

  var checkTourLength = function(tours) {
    if (tours.length === 0)
      $scope.message = 'Click on Find More Artwork to find art to add to the tour.';
  };

  var populateTalkingPts = function(tours) {
    for (var i = 0; i < tours.length; i++) {
      $scope.notes[tours[i].id] = tours[i].talkingpts;
    }
  };

});
