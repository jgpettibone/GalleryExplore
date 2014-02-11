var galleryExploreApp = angular.module('galleryExploreApp', [
  'ngRoute'
]);

galleryExploreApp.config(['$routeProvider',
  function($routeProvider) {
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
    when('/create', {
      templateUrl: 'client/partials/tour.html',
      controller: 'TourCreateController'
    }).
    otherwise({
      redirectTo: '/'
    });
}]);


// galleryExploreApp.service('ImageService'), function($scope) {

//   this.tourImages = [];

// };

galleryExploreApp.controller('ImageDetailsController', function($scope, $http, $window, $location) {

  $scope.research = [
  {id:5, src:"../images/1980-73.jpg", r:[{name:"Curator's Notes", path:"../research/test_paper.txt"},{name:"Research Paper", path:"../research/test_paper2.txt"}]},  
  {id:35, src:"../images/2009-8.jpg", r:[{name:"Curator's Notes", path:"../research/test_paper.txt"},{name:"Research Paper", path:"../research/test_paper2.txt"}]},
  {id:58, src:"../images/2001-62-9.jpg", r:[{name:"Curator's Notes", path:"../research/test_paper.txt"},{name:"Research Paper", path:"../research/test_paper2.txt"}]},
  {id:64, src:"../images/2007-44-13.jpg", r:[{name:"Curator's Notes", path:"../research/test_paper.txt"},{name:"Research Paper", path:"../research/test_paper2.txt"}]},
  {id:65, src:"../images/2007-44-14.jpg", r:[{name:"Curator's Notes", path:"../research/test_paper.txt"},{name:"Research Paper", path:"../research/test_paper2.txt"}]},
  {id:86, src:"../images/l05-1-159.jpg", r:[{name:"Curator's Notes", path:"../research/test_paper.txt"},{name:"Research Paper", path:"../research/test_paper2.txt"}]}
  ];

  $http({
    method: 'GET',
    url: '/details'
  })
  .then(function(obj){
    $scope.image = obj.data;
    // console.log('image = ', $scope.image.src);
    for (var i = 0; i < $scope.research.length; i++) {
      // console.log('other src = ', $scope.research[i].src);
      if ($scope.research[i].src === $scope.image.src) {
        $scope.image.research = $scope.research[i].r;
        break;
      } 
    }
    console.log('research = ', $scope.image.research);
  });

  $scope.showDoc = function(path){
    $window.open(path);
    // $location.path("http://www.google.com");
    // $scope.save();
  };

  $scope.addTag = function(tag, src) {
    $http({
      method: 'POST',
      url: '/tags',
      data: {src: src, tags: tag}
    }).then(function(){
      $scope.save();
      $scope.tag = "";
      // $scope.image.tags;
    });
  };

  $scope.save = function() {
    // $location.path('/details');
    $location.path("http://www.google.com");
  }

});

galleryExploreApp.controller('TourViewController', function($scope, $location) {

  $scope.tours = [
    {tourid: 1, tourname: 'AOA Masterpieces - Three In 30', museum:'deyoung'},
    {tourid: 2, tourname: 'Oceania - Three In 30', museum:'deyoung'},
    {tourid: 3, tourname: 'Female Figures, Female Rituals, Female Artists', museum:'deyoung'}
  ];

//1 - dogon, yipwon, slit drum, stela
//2 - female cult hook, string bag, yipwon, slit drum, female house post 
//3 - female cult hook, female giving birth, mourning costume, bilum, female house post, sowei mask, odundo pot, harp, bowstand

  $scope.tourimage = [
  {tourid: 2, order:1, src:"../images/l05-1-67.jpg"},
  {tourid: 2, order:2, src:"../images/2007-44-79.jpg"},
  {tourid: 2, order:3, src:"../images/2000-172-1.jpg"},
  {tourid: 2, order:4, src:"../images/2001-62-9.jpg"},
  {tourid: 2, order:5, src:"../images/l05-1-19.jpg"}
  ];

  $scope.talkingpts = [

  ];

  $scope.selectTour = function(tour){
    // console.log('Tour! ', tour);
    // $scope.save();
  };

  // $scope.save = function() {
  //   $location.path('/tourslist');
  // };

});

galleryExploreApp.controller('TourCreateController', function($scope) {

});

galleryExploreApp.controller('ImageGalleryController', function($scope, $http, $window, $location) {
  $http({
    method: 'GET',
    url: '/images'
  }).then(function(obj){
    $scope.images = obj.data;
  });


  $scope.showDetails = function(src) {
    $http({
      method: 'POST',
      url: '/detailimage',
      data: {src: src}
    });
    $scope.save();
  };

  $scope.save = function() {
    $window.open('/#/details');
    // $location.path('/details');
  }

});

