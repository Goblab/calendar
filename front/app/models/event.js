import DS from 'ember-data';

export default DS.Model.extend({
	title: DS.attr('string'),
	startDate: DS.attr('string'),
	endDate: DS.attr('string'),
	description: DS.attr('string'),
	picture: DS.belongsTo('asset'),
	address: DS.attr('string'),
	place: DS.attr(''),
	goblal: DS.attr('boolean')
});
