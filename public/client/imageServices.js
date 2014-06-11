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
      },

      addTag: function(tag, src) {
        return $http.post('/tags', {src: src, tags: tag}).then(function(obj){
          return obj.data;
        });
      },

      addTalkingPts: function(notes, src) {
        return $http.post('/talking', {src: src, talkingpts: notes}).then(function(obj){
          return obj.data;
        });
      },

      addImage: function(img) {
        return $http.post('/saved', img);
      }


    }

  });

