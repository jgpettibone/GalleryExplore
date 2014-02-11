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
    otherwise({
      redirectTo: '/'
    });
}]);


galleryExploreApp.service('ImageService', function() {
  return {
    src: "../images/1980-24-1.jpg",
    index: 0,
    images: [
      {src:"../images/1980-24-1.jpg", collection:"Africa", desc:"Plaque Mask", culture:"Bwa", country:"Burkina Faso", tags:"mask"},
      {src:"../images/1980-24-2a-b.jpg", collection:"Africa", desc:"Mask Representing a Hawk", culture:"Mossi", country:"Burkina Faso", tags:"mask"},
      {src:"../images/1980-31.jpg", collection:"Africa", desc:"Plaque: Girl with Leopard", culture:"Edo", country:"Benin", tags:""},
      {src:"../images/1980-73.jpg", collection:"Africa", desc:"Master Drum For Civic Brotherhood", culture:"Ekumfi", country:"Ghana", tags:"drum"},
      {src:"../images/1981-21-9.jpg", collection:"Africa", desc:"Sowei Mask for Sande Society", culture:"Mende", country:"Sierra Leone", tags:"mask,female"},
      {src:"../images/1984-5.jpg", collection:"Africa", desc:"Divination Bowl", culture:"Yoruba", country:"Nigeria", tags:"ritual"},
      {src:"../images/1985-62.jpg", collection:"Africa", desc:"Eshu Dance Staff", culture:"Yoruba", country:"Nigeria", tags:"staff"},
      {src:"../images/1986-16-1.jpg", collection:"Africa"},
      {src:"../images/1986-16-5.jpg", collection:"Africa"},
      {src:"../images/1986-57-6a-b.jpg", collection:"Africa"},
      {src:"../images/1988-26.jpg", collection:"Africa"},
      {src:"../images/1988-42.jpg", collection:"Africa"},
      {src:"../images/1989-23.jpg", collection:"Africa"},
      {src:"../images/1990-13.jpg", collection:"Africa"},
      {src:"../images/1991-13.jpg", collection:"Africa"},
      {src:"../images/1991-84.jpg", collection:"Africa"},
      {src:"../images/1992-70.jpg", collection:"Africa"},
      {src:"../images/1993-102.jpg", collection:"Africa"},
      {src:"../images/1994-131.jpg", collection:"Africa"},
      {src:"../images/1995-48.jpg", collection:"Africa"},
      {src:"../images/1995-92-3.jpg", collection:"Africa"},
      {src:"../images/2000-3.jpg", collection:"Africa"},
      {src:"../images/2002-71.jpg", collection:"Africa"},
      {src:"../images/2003-65.jpg", collection:"Africa"},
      {src:"../images/2004-109.jpg", collection:"Africa"},
      {src:"../images/2004-1101.jpg", collection:"Africa"},
      {src:"../images/2004-93.jpg", collection:"Africa"},
      {src:"../images/2005-23a-d1.jpg", collection:"Africa"},
      {src:"../images/2005-26-1.jpg", collection:"Africa", desc:"Divination Tapper", culture:"Yoruba", country:"Nigeria", tags:'ritual'},
      {src:"../images/2007-6.jpg", collection:"Africa"},
      {src:"../images/2008-38-17.jpg", collection:"Africa"},
      {src:"../images/2008-38-28.jpg", collection:"Africa"},
      {src:"../images/2008-38-76.jpg", collection:"Africa"},
      {src:"../images/2009-8.jpg", collection:"Africa"},
      {src:"../images/45549.jpg", collection:"Africa"},
      {src:"../images/57-13-19.jpg", collection:"Africa", desc:"Chief's Chair", culture:"Chokwe", country:"Angola", tags:'chair'},
      {src:"../images/59-12-11.jpg", collection:"Africa", desc:"Seated Figure, nkisi", culture:"Kongo", country:"DRC,Democratic Republic of the Congo", tags:'figure'},
      {src:"../images/59-12-8a-b.jpg", collection:"Africa", desc:"Tobacco Mortar", culture:"Chokwe", country:"Angola", tags:'tobacco,drug'},
      {src:"../images/73-9.jpg", collection:"Africa", desc:"Hornbill Mask", culture:"Poro", country:"Liberia", tags:"mask"},
      {src:"../images/74-81.jpg", collection:"Africa", desc:"Cocoa Pod Coffin", artist: "Kane Kwei", culture:"Ga", country:"Ghana", tags:'coffin'},
      {src:"../images/76-12-1.jpg", collection:"Africa", dec: "Water Spirit Mask", culture: "Ijebu", country:"Nigeria", tags:"mask"},
      {src:"../images/76-8.jpg", collection:"Africa", desc:"Hip Ornament: Leopard Head", culture:"Edo", country:"Benin", tags:""},
      {src:"../images/l07-129-1.jpg", collection:"Africa"},
      {src:"../images/l10-57-3.jpg", collection:"Africa"},
      {src:"../images/l10-58-4.jpg", collection:"Africa"},
      {src:"../images/1.jpg", collection:"Oceania"},
      {src:"../images/2000-172-1.jpg", collection:"Oceania"},
      {src:"../images/2000-172-2.jpg", collection:"Oceania"},
      {src:"../images/2000-172-3.jpg", collection:"Oceania"},
      {src:"../images/2000-172-5.jpg", collection:"Oceania"},
      {src:"../images/2000-172-61.jpg", collection:"Oceania"},
      {src:"../images/2001-62-101.jpg", collection:"Oceania"},
      {src:"../images/2001-62-11.jpg", collection:"Oceania"},
      {src:"../images/2001-62-12.jpg", collection:"Oceania"},
      {src:"../images/2001-62-6.jpg", collection:"Oceania"},
      {src:"../images/2001-62-9.jpg", collection:"Oceania"},
      {src:"../images/2004-10-2a-c.jpg", collection:"Oceania"},
      {src:"../images/2004-114-1.jpg", collection:"Oceania"},
      {src:"../images/2005-140-4.jpg", collection:"Oceania"},
      {src:"../images/2005-140-52.jpg", collection:"Oceania"},
      {src:"../images/2007-44-104.jpg", collection:"Oceania"},
      {src:"../images/2007-44-13.jpg", collection:"Oceania"},
      {src:"../images/2007-44-14.jpg", collection:"Oceania"},
      {src:"../images/2007-44-17.jpg", collection:"Oceania"},
      {src:"../images/2007-44-27.jpg", collection:"Oceania"},
      {src:"../images/2007-44-31.jpg", collection:"Oceania"},
      {src:"../images/2007-44-33.jpg", collection:"Oceania"},
      {src:"../images/2007-44-42.jpg", collection:"Oceania"},
      {src:"../images/2007-44-5.jpg", collection:"Oceania"},
      {src:"../images/2007-44-511.jpg", collection:"Oceania"},
      {src:"../images/2007-44-58.jpg", collection:"Oceania"},
      {src:"../images/2007-44-61.jpg", collection:"Oceania"},
      {src:"../images/2007-44-79.jpg", collection:"Oceania"},
      {src:"../images/2007-44-8.jpg", collection:"Oceania"},
      {src:"../images/55241.jpg", collection:"Oceania"},
      {src:"../images/5525.jpg", collection:"Oceania"},
      {src:"../images/71-19-23.jpg", collection:"Oceania"},
      {src:"../images/71-19-3.jpg", collection:"Oceania"},
      {src:"../images/2007-44-38.jpg", collection:"Oceania"},
      {src:"../images/l05-1-123.jpg", collection:"Oceania"},
      {src:"../images/l05-1-127.jpg", collection:"Oceania"},
      {src:"../images/l05-1-15.jpg", collection:"Oceania"},
      {src:"../images/l05-1-157a-b.jpg", collection:"Oceania"},
      {src:"../images/l05-1-159.jpg", collection:"Oceania"},
      {src:"../images/l05-1-173.jpg", collection:"Oceania"},
      {src:"../images/l05-1-18.jpg", collection:"Oceania"},
      {src:"../images/l05-1-19.jpg", collection:"Oceania"},
      {src:"../images/l05-1-235.jpg", collection:"Oceania"},
      {src:"../images/l05-1-2422.jpg", collection:"Oceania"},
      {src:"../images/l05-1-35.jpg", collection:"Oceania"},
      {src:"../images/l05-1-432.jpg", collection:"Oceania"},
      {src:"../images/l05-1-462.jpg", collection:"Oceania"},
      {src:"../images/l05-1-67.jpg", collection:"Oceania"},
      {src:"../images/l05-1-682.jpg", collection:"Oceania"}
    ]
  }
})

galleryExploreApp.controller('ImageDetailsController', function($scope, ImageService) {

  for (var i = 0; i < ImageService.images.length; i++) {
    // console.log(ImageService.images[i].src);
    if (ImageService.images[i].src === ImageService.src) {
      // console.log('found!');
      $scope.image = ImageService.images[i];
      break;
    }
  }

  // $scope.image = ImageService.images[ImageService.index];

  $scope.addTag = function(tag) {
    if ($scope.image.tags !== undefined) {
      $scope.image.tags += "," + tag;      
    } else {
      $scope.image.tags = tag;    
    }
    // $scope.save();
  };

//  $location.path('/details');

});

galleryExploreApp.controller('ImageGalleryController', function($scope, $location, ImageService) {

  $scope.images = ImageService.images;

  $scope.showDetails = function(src, index) {
    ImageService.src = src;
    ImageService.index = index;
    console.log('done:', ImageService.src, src, index);
    $scope.save();
    // $location.path('/details');
  };

  $scope.save = function() {
    $location.path('/details');
  }

});

