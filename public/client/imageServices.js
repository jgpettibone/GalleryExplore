angular.module('ImageServices', [])
  .service('ImageHTTPService', function ($http){

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
      }, 

      getSaveds: function() {
        return $http.get('/saved').then(function(obj){
          return obj.data;
        })
      },

      removeImage: function(image) {
        return $http.post('/remove', image).then(function(obj){
          return obj.data;
        })
      },

      changeOrder: function(order, id) {
        return $http.post('/order', {order: order, id: id}).then(function(obj){
          return obj.data;
        })
      }

    }

  });

