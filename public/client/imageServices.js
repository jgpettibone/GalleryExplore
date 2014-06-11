angular.module('ImageServices', [])
  .service('ImageService', function ($http){

    return {

      getImages: function() {
        return $http.get('/images').then(function(obj){
          return obj.data;
        }); 
      },

      showDetails: function(src) {
        return $http.post('/detailimage', {src: src});
      },

      getDetails: function() {
        return $http.get('/details').then(function(obj){
          return obj.data;
        });
      }

    }

  });

