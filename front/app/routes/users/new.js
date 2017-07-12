import Ember from 'ember';
import SaveModelMixin from '../../mixins/users/save-model-mixin';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(SaveModelMixin, AuthenticatedRouteMixin, {
  model: function() {
	return Ember.RSVP.hash({
      user: this.store.createRecord('user'),
    });  	
  },
});
