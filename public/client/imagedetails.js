galleryExploreApp.controller('ImageDetailsController', function($scope, $http, $window, $location, ImageService) {

  ImageService.getDetails().then(function(data){
    $scope.image = data;
    $scope.notes = $scope.image.talkingpts;
  });

  $scope.addTag = function(tag, src) {
    ImageService.addTag(tag, src).then(function(data){
      $scope.image.tags = data['tags'];
    });
    $scope.tag = null;
  };

  $scope.addTalkingPts = function(notes, src) {
    ImageService.addTalkingPts(notes, src).then(function(data){
      $scope.image.talkingpts = data['talkingpts'];
      $scope.notes = data['talkingpts'];
    });
  };

  $scope.addImage = function(img) {
    ImageService.addImage(img);
  };

});

