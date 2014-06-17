imageServices.service('ImageHTTPService', function ($http){

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

    addTag: function(tag, id) {
      return $http.post('/tags', {id: id, tags: tag}).then(function(obj){
        return obj.data;
      });
    },

    addTalkingPts: function(notes, id) {
      return $http.post('/talking', {id: id, talkingpts: notes}).then(function(obj){
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

    getTourImages: function(tourname) {
      return $http.post('/alltourimages', tourname).then(function(obj){
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
    },

    saveTourName: function(tourname) {
      return $http.post('/tourname', {tourname: tourname}).then(function(obj){
        return obj.data;
      })
    },

    saveTourImage: function(tourid, imageid, order) {
      return $http.post('/tourimage', {tour_id: tourid, image_id: imageid, order: order});
    },

    getTours: function() {
      return $http.get('/tours').then(function(obj){
        return obj.data;
      }); 

    }

  }

});

