import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';


export default DS.RESTAdapter.extend(DataAdapterMixin, {
  authorizer: 'authorizer:oauth2',	
  namespace: 'api',
  coalesceFindRequests: true,
  host: 'http://104.236.221.70:1337',

  pathForType: function(type) {
    return Ember.String.dasherize(this._super(type));
  }
});
