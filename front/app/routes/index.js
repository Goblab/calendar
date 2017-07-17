import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import { CanMixin } from 'ember-can';
export default Ember.Route.extend(CanMixin, AuthenticatedRouteMixin, {

	model: function (argument) {
	    if (this.can('view admin')) {
	      return this.store.query('event', {goblal: true});
	    } else {
	       return this.store.query('event', {owner: this.get('session').get('account').get('id')});
	    }		
	},

	/**
	 * @override: ember lifecycle
	 */
	setupController: function(controller, model) {
	  this._super(controller, model);
	  if (this.can('view admin')) {
	  	controller.set('users', this.store.findAll('user'));
	  }
	},

	actions: {
	  loadData: function (userId) {
	  	this.get('controller').set('model', this.store.query('event', {owner: userId}));
	  },
	  loadSeccionals: function (userId) {
	  	this.get('controller').set('model', this.store.query('event', {goblal: true}));
	  },	  
	}
});
