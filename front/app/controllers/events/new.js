import Ember from 'ember';

export default Ember.Controller.extend({
 	lat: -36.75494243654723,
    lng: -34.8359375,
    zoom: 4,


    markers: Ember.computed('model', 'model.place', function () {
    	var place = null;
    	var model = this.get('model');
    	var _this = this;
    	if (model) {
	    	place = model.get('place');
	    	if (place) {
	    		Ember.run.next(function () {
					_this.set('lat', parseFloat(place.lat));
					_this.set('lng', parseFloat(place.lng));
					_this.set('zoom', 14);
	    		}, this)
	    		return [place];
	    	} else {
	    		return [];
	    	}
    	}
    }),

	actions: {
		didUpdatePlace: function (argument) {
			this.get('model').set('place', argument);
		},
	}
});
