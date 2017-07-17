import Ember from 'ember';
import SaveModelMixin from '../../mixins/roles/save-model-mixin';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(SaveModelMixin, AuthenticatedRouteMixin, {
  model: function() {
	return this.store.createRecord('event', {owner: this.get('session').get('account')});
  }
});
