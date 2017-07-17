import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import { CanMixin } from 'ember-can';

export default Ember.Route.extend(CanMixin, AuthenticatedRouteMixin, {
  _listName: 'model',

  actions: {
    remove: function(model) {
      if(confirm('Are you sure?')) {
        model.destroyRecord();
      }
    }
  },

  model: function() {
    if (this.can('view admin')) {
      return this.store.findAll('event');
    } else {
       return this.store.query('event', {owner: this.get('session').get('account').get('id')});
    }
  },
});
