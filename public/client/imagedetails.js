galleryExploreApp.controller('ImageDetailsController', function($scope, $http, $window, $location, ImageHTTPService) {

  $scope.notes = {};
  $scope.tags = {};

  ImageHTTPService.getDetails().then(function(data){
    $scope.image = data;
    $scope.notes[$scope.image.id] = $scope.image.talkingpts;
  });

  $scope.addTag = function(tag, id) {
    ImageHTTPService.addTag(tag, id).then(function(data){
      $scope.image.tags = data['tags'];
    });
    $scope.tag = null;
  };

  $scope.addTalkingPts = function(notes, id) {
    ImageHTTPService.addTalkingPts(notes, id).then(function(data){
      $scope.image = data;
      $scope.notes[$scope.image.id] = $scope.image.talkingpts;
    });
  };

  $scope.addImage = function(img) {
    ImageHTTPService.addImage(img);
    $location.path('/create').replace;
  };

  // $scope.expand = function(img) {
  //   console.log('hello');
  //   // $window.open(img);
  // };

  $scope.close = function() {
    $location.path('/').replace;
  };

});

