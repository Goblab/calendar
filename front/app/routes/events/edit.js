import Ember from 'ember';
import SaveModelMixin from '../../mixins/roles/save-model-mixin';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(SaveModelMixin, AuthenticatedRouteMixin, {
  model: function(params) {
    return this.store.find('event', params.event_id);
  }
});
