import DS from 'ember-data';
import config from '../config/environment';

export default DS.Model.extend({
	owner: DS.belongsTo('user', {async: true}),
	fileName: DS.attr('string'),
	path: DS.attr('string'),
	type: DS.attr('string'),

	url: function () {
		return config.adapter.fileUrl + this.get('path');
	}.property('fileName', 'path'),

	properties: function () {
		return {id: this.get('id'), fileName: this.get('fileName'), url: this.get('url')};
	}.property('type', 'fileName', 'path', 'url')
});