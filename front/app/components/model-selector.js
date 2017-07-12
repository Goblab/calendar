import Ember from 'ember';

export default Ember.Component.extend({
	store: Ember.inject.service('store'),
	optionValuePath: 'content',
	optionLabelPath: 'content.name',

	filterName: null,
	filterValue: null,


	provinceFilter: null,
	sectionFilter: null,
	townFilter: null,

	data: Ember.computed('modelName', 'provinceFilter', 'sectionFilter', 'townFilter', 'filterName', 'filterValue', function () {
		var q = {};

		if (this.get('provinceFilter')) {
			q.province = this.get('provinceFilter').get('id');
		}
		if (this.get('sectionFilter')) {
			q.province = this.get('sectionFilter').get('id');
		}
		if (this.get('townFilter')) {
			q.province = this.get('townFilter').get('id');
		}		
		if (this.get('filterName') && this.get('filterValue')) {
			q[this.get('filterName')] = this.get('filterValue');
		}

		return this.get('store').query(this.get('modelName'), q);
	}),
});