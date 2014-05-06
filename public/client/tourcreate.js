galleryExploreApp.controller('TourCreateController', function($scope, $location, $http) {

  $scope.tour = {};
  $scope.message = "";


  $http({
    method: 'GET',
    url: '/saved'
  }).then(function(obj){
    $scope.tourimages = obj.data;
    if ($scope.tourimages.length === 0) {
      $scope.message = "Explore Images to add images to this tour!";
    }
  });

  $scope.submitName = function(tourname){
    $scope.tour.tourname = tourname;
    $scope.tourname = '';
  }

  $scope.removeImage = function(image) {
    $http({
      method: 'POST',
      url: '/remove',
      data: image
    }).then(function(data){
      $scope.tourimages = data.data;
      if ($scope.tourimages.length === 0) {
        $scope.message = "Explore Images to add images to this tour!";
      }
    });
  };

  $scope.changeOrder = function(order, id) {
    $http({
      method: 'POST',
      url: '/order',
      data: {order: order, id: id}
    }).then(function(data){
      $scope.tourimages=data.data;
    });
  };

  $scope.getOrder = function(image) {
    return image.order;
  };

});
