galleryExploreApp.controller('OneTourViewController', function($scope, $location) {

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
  };

});
