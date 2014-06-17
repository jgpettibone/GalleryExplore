imageServices.service('TourService', function(){

  var _tour;

  return {

    getTourname: function() {
      return _tour.tourname;
    },

    getTourID: function() {
      return _tour.id;
    },

    setTour: function(tour) {
      _tour = tour;
    },

    getTour: function() {
      return _tour;
    }

  }

});


