var galleryExploreApp = angular.module('galleryExploreApp', [
  'ngRoute'
]);

galleryExploreApp.config(['$routeProvider',
  function($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'client/partials/gallery.html',
      controller: 'ImageGalleryController'
    }).otherwise({
      redirectTo: '/'
    });
}]);


galleryExploreApp.controller('ImageGalleryController', function($scope) {
  // in the meantime, use some external photos
  $scope.images = [
    {src: 'http://farm9.staticflickr.com/8042/7918423710_e6dd168d7c_b.jpg', desc: 'Image 01'},
    {src: 'http://farm9.staticflickr.com/8449/7918424278_4835c85e7a_b.jpg', desc: 'Image 02'},
    {src: 'http://farm9.staticflickr.com/8457/7918424412_bb641455c7_b.jpg', desc: 'Image 03'},
    {src: 'http://farm9.staticflickr.com/8179/7918424842_c79f7e345c_b.jpg', desc: 'Image 04'},
    {src: 'http://farm9.staticflickr.com/8315/7918425138_b739f0df53_b.jpg', desc: 'Image 05'},
    {src: 'http://farm9.staticflickr.com/8461/7918425364_fe6753aa75_b.jpg', desc: 'Image 06'}
  ];

  // $scope.showPhoto = function(src) {
  //   return src;
  // }; 

});

// shortlyApp.config(['$routeProvider',
//   function($routeProvider, $cookieStore) {
//   $routeProvider.
//     when('/', function(){
//       if($cookieStore.get('user')){
//         return {
//           templateUrl: 'client/partials/listUrls.html',
//           controller: 'UrlListCtrl'
//         };
//       } else {
//         return {
//           templateUrl: 'client/partials/login.html',
//           controller: 'LoginCtrl'
//         };
//       }
//     }).
//     when('/create', {
//       templateUrl: 'client/partials/createUrl.html',
//       controller: 'UrlCreateCtrl'
//     }).
//     when('/login', {
//       templateUrl: 'client/partials/login.html',
//       controller: 'LoginCtrl'
//     }).
//     when('/register', {
//       templateUrl: 'client/partials/register.html',
//       controller: 'RegisterCtrl'
//     }).
//     otherwise({
//       redirectTo: '/'
//     });
// }]);

// shortlyApp.controller('UrlListCtrl', function($scope, $http) {
//   $http({
//     method: 'GET',
//     url: '/links'
//   }).then(function(obj){
//     $scope.links = obj.data;
//   });
//   $scope.setOrderBy = function(key, reverse) {
//     $scope.orderBy = key;
//     $scope.reverse = !reverse;
//   };
// });

// shortlyApp.controller('UrlCreateCtrl', function($scope, $http) {
//   $scope.shorten = function(url) {
//     $http({
//       method: 'POST',
//       url: '/links',
//       data: {url: url}
//     }).then(function(data){
//       console.log(data);
//     });
//   };
// });

// shortlyApp.controller('LoginCtrl', function($scope, $http, $cookieStore) {
//   $scope.authenticate = function(username, password) {
//     $http({
//       method: 'POST',
//       url: '/login',
//       data: {username: username, password: password}
//     }).success(function(data){
//       $cookieStore.put('user', data.token);
//       console.log($cookieStore.get('user'));
//     });
//   };
// });

// shortlyApp.controller('RegisterCtrl', function($scope, $http, $cookieStore) {
//   $scope.register = function(username, password, passwordConfirmation) {
//     $http({
//       method: 'POST',
//       url: '/register',
//       data: {username: username, password: password, passwordConfirmation: passwordConfirmation}
//     }).success(function(data){
//       $cookieStore.put('user', data.token);
//       console.log($cookieStore.get('user'));
//     });
//   };
// });

// // shortlyApp.service('UserService', function(){
// //   var currentUser;
// //   var self = this;
// //   this.setCurrentUser = function(user) {
// //     currentUser = user;
// //   };
// //   this.currentUser = function() {
// //     return currentUser;
// //   };
// // });

