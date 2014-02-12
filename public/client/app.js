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
    when('/onetour', {
      templateUrl: 'client/partials/onetour.html',
      controller: 'OneTourViewController'
    }).
     when('/create', {
      templateUrl: 'client/partials/tour.html',
      controller: 'TourCreateController'
    }).
    otherwise({
      redirectTo: '/'
    });
}]);


galleryExploreApp.controller('ImageDetailsController', function($scope, $http, $window, $location) {

  $scope.research = [
  {id:5, src:"../images/1980-73.jpg", r:[{name:"Curator's Notes", path:"../research/test_paper.txt"},{name:"Research Paper", path:"../research/test_paper2.txt"}]},  
  {id:35, src:"../images/2009-8.jpg", r:[{name:"Curator's Notes", path:"../research/test_paper.txt"},{name:"Research Paper", path:"../research/test_paper2.txt"}]},
  {id:58, src:"../images/2001-62-9.jpg", r:[{name:"Curator's Notes", path:"../research/test_paper.txt"},{name:"Research Paper", path:"../research/test_paper2.txt"}]},
  {id:64, src:"../images/2007-44-13.jpg", r:[{name:"Curator's Notes", path:"../research/test_paper.txt"},{name:"Research Paper", path:"../research/test_paper2.txt"}]},
  {id:65, src:"../images/2007-44-14.jpg", r:[{name:"Curator's Notes", path:"../research/test_paper.txt"},{name:"Research Paper", path:"../research/test_paper2.txt"}]},
  {id:86, src:"../images/l05-1-159.jpg", r:[{name:"Curator's Notes", path:"../research/test_paper.txt"},{name:"Research Paper", path:"../research/test_paper2.txt"}]}
  ];

  // $scope.research = [
  // {id:5, src:"../images/1980-73.jpg", r:[{name:"Curator's Notes", path:"../research/1980.73.pdf"},{name:"Research Paper", path:"../research/master-drum.pdf"}]},  
  // {id:35, src:"../images/2009-8.jpg", r:[{name:"Curator's Notes", path:"../research/2009.8.pdf"}, {name:"Curator's Notes 2", path:"../research/Art_and_Oracle.pdf"}, {name:"Study Group Notes", path:"../research/AOA_Study_GALLERY_WALKTHROUGH.doc"},{name:"Research Paper", path:"../research/2009.8_Harp_Pettibone.doc"}]},
  // {id:58, src:"../images/2001-62-9.jpg", r:[{name:"Curator's Notes", path:"../research/2001.62.6.pdf"}, {name:"Curator's Notes 2", path:"../research/2001.62.6SlitDrum.pdf"},{name:"Research Paper", path:"../research/slit-drum.pdf"}]},
  // {id:64, src:"../images/2007-44-13.jpg", r:[{name:"Curator's Notes", path:"../research/2007.44.13.pdf"},{name:"Research Paper", path:"../research/hand-drums.pdf"}]},
  // {id:65, src:"../images/2007-44-14.jpg", r:[{name:"Curator's Notes", path:"../research/2007.44.14.pdf"},{name:"Research Paper", path:"../research/hand-drums.pdf"}]},
  // {id:86, src:"../images/l05-1-159.jpg", r:[{name:"Curator's Notes", path:"../research/test_paper.txt"},{name:"Research Paper", path:"../research/slit-drum.pdf"}]}
  // ];


  $http({
    method: 'GET',
    url: '/details'
  })
  .then(function(obj){
    $scope.image = obj.data;
    for (var i = 0; i < $scope.research.length; i++) {
      if ($scope.research[i].src === $scope.image.src) {
        $scope.image.research = $scope.research[i].r;
        break;
      }
    }
  });

  $scope.showDoc = function(path){
    $window.open(path);
  };

  $scope.addTag = function(tag, src) {
    $http({
      method: 'POST',
      url: '/tags',
      data: {src: src, tags: tag}
    }).then(function(data){
      // console.log(data, data.data['tags']);
      $scope.image.tags = data.data['tags'];
    });
  };

  $scope.addImage = function(img) {

    $http({
      method: 'POST',
      url: '/saved',
      data: img
    });

  };

  $scope.save = function() {
    $location.path("http://www.google.com");
  }

});

galleryExploreApp.controller('TourViewController', function($scope, $window, $location) {

  $scope.tours = [
    {tourid: 1, tourname: 'AOA Masterpieces - Three Pieces In 30 Minutes', museum:'deyoung'},
    {tourid: 2, tourname: 'Oceania - Three Pieces In 30 Minutes', museum:'deyoung'},
    {tourid: 3, tourname: 'Female Figures, Female Rituals, Female Artists', museum:'deyoung'}
  ];

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
    $window.open('/#/onetour');
  };

});


galleryExploreApp.controller('OneTourViewController', function($scope, $location) {

  $scope.tours = [
    {tourid: 1, tourname: 'AOA Masterpieces - Three Pieces In 30 Minutes', museum:'deyoung'},
    {tourid: 2, tourname: 'Oceania - Three Pieces In 30 Minutes', museum:'deyoung'},
    {tourid: 3, tourname: 'Female Figures, Female Rituals, Female Artists', museum:'deyoung'}
  ];

//2 - female cult hook, string bag, yipwon, slit drum, female house post 

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
  };

});

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
  }

});

