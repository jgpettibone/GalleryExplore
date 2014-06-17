galleryExploreApp.controller('OneTourViewController', function($scope, $location, ImageHTTPService, TourService) {

  $scope.tour = TourService.getTour();
  $scope.message = '';
  $scope.notes = {};
  $scope.tourimages;

  if (!$scope.tour) {
    // instead this should persist differently
  }
  else {
    ImageHTTPService.getTourImages($scope.tour.id).then(function(data){
      $scope.tourimages = data;
      console.log('tourimages = ', $scope.tourimages);
      populateTalkingPts($scope.tourimages);
      checkTourLength($scope.tourimages);
    });    
  }

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


 // ImageHTTPService.getTourImages(TourService.getTourID()).then(function(data){
  //   $scope.tourimages = data;
  //   populateTalkingPts($scope.tourimages);
  //   checkTourLength($scope.tourimages);
  // });

  // $scope.saveTour = function(tourname){
  //   var tourimages = $scope.tourimages;
  //   console.log('tourname = ', $scope.tourname, ' & tour len = ', tourimages.length);
  //   if (!$scope.tourname) { 
  //     $scope.message = 'This tour needs a name before it can be saved';
  //   }
  //   else if (tourimages.length === 0) {
  //     $scope.message = 'This tour needs artwork before it can be saved';
  //   }
  //   else {
  //     $scope.message = '';
  //     ImageHTTPService.saveTourName($scope.tourname).then(function(data){
  //       var tourid = data['id'];
  //       for (var i = 0; i < tourimages.length; i++) {
  //         ImageHTTPService.saveTourImage(tourid, tourimages[i].id, tourimages[i].order);
  //       }      
  //     });
  //   }
  // };

  // $scope.addTag = function(tag, id) {
  //   ImageHTTPService.addTag(tag, id).then(function(data){
  //     var tours = $scope.tourimages;
  //     for (var i = 0; i < tours.length; i++) {
  //       if (tours[i].id === id) tours[i].tags = data['tags']
  //     }      
  //   });
  //   $scope.tag = null;
  // };


  // $scope.addTalkingPts = function(notes, id) {
  //   console.log('notes = ', notes);
  //   ImageHTTPService.addTalkingPts(notes, id).then(function(data){
  //     $scope.notes[$scope.image.id] = data['talkingpts'];
  //   });
  // };


  // $scope.removeImage = function(image) {
  //   ImageHTTPService.removeImage(image).then(function(data){
  //     $scope.tourimages = data;
  //     checkTourLength($scope.tourimages);
  //   });
  // };

  // $scope.changeOrder = function(order, id) {
  //   ImageHTTPService.changeOrder(order, id).then(function(data){
  //     $scope.tourimages = data;
  //   });
  // };

  // $scope.getOrder = function(image) {
  //   return image.order;
  // };

  // $scope.findArt = function() {
  //   $location.path('/').replace;
  // };

