import Ember from 'ember';

export default Ember.Controller.extend({
	store: Ember.inject.service('store'),

	actions: {
		addRoster: function () {
			var roster = this.get('store').createRecord('roster', {election: this.get('model').get('election'), tract: this.get('model')});
			this.get('model').get('rosters').pushObject(roster);
		},

		deleteRoster: function (roster) {
			this.get('model').get('rosters').removeObject(roster);
			if (roster.get('isNew') === true) {
				roster.rollbackAttributes();
			} else {
				roster.destroyRecord();
			}
		},

		addCandidate: function (roster) {
			var candidate = this.get('store').createRecord('candidate', {
				roster: roster, 
				startDate: this.get('model').get('startDate'), 
				endDate: this.get('model').get('endDate'),
				province: this.get('model').get('province'),
				section: this.get('model').get('section'),
				town: this.get('model').get('town'),
			});
			roster.get('candidates').pushObject(candidate);			
		},
	}
});
