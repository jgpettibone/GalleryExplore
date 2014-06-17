imageServices.service('TourService', function(){

  var tourname;

  return {

    setTourname: function(name) {
      tourname = name;
    },

    getTourname: function() {
      return tourname;
    }

  }

});


