import Ember from 'ember';

export default Ember.Route.extend({
	model: function (argument) {
		return this.store.findAll('event');
	}
});
