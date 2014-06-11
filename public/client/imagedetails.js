galleryExploreApp.controller('ImageDetailsController', function($scope, $http, $window, $location, ImageHTTPService) {

  ImageHTTPService.getDetails().then(function(data){
    $scope.image = data;
    $scope.notes = $scope.image.talkingpts;
  });

  $scope.addTag = function(tag, src) {
    ImageHTTPService.addTag(tag, src).then(function(data){
      $scope.image.tags = data['tags'];
    });
    $scope.tag = null;
  };

  $scope.addTalkingPts = function(notes, src) {
    ImageHTTPService.addTalkingPts(notes, src).then(function(data){
      $scope.image.talkingpts = data['talkingpts'];
      $scope.notes = data['talkingpts'];
    });
  };

  $scope.addImage = function(img) {
    ImageHTTPService.addImage(img);
  };

  $scope.expand = function(img) {
    console.log('hello');
    // $window.open(img);
  };

});

