import Ember from 'ember';
 
export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  seccionals: true,

  occurrences: Ember.computed('model.@each', function () {
    var events = Ember.A();
    if (this.get('model')) {
      this.get('model').forEach(function (event) {
        var ev = Ember.Object.create({
          title: event.get('title'),
          startsAt: moment(event.get('startDate')),
          endsAt: moment(event.get('endDate')),
          id: event.get('id'),
          description: event.get('description'),
          address: event.get('address'),
          isDraggable: false
        });
        events.push(ev);
      }, this);
    } 
    return events;
  }),
 

  userList: Ember.computed('users.@each', function () {
    var ar = [];
    var _this = this;
    this.get('users').forEach(function (user) {
      if (user.get('id') != _this.get('session').get('account').get('id')) {
        ar.push(user);
      }
    });
    return ar;
  }),



  actions: {
    calendarAddOccurrence: function(occurrence) {
    },
 
    calendarUpdateOccurrence: function(occurrence, properties) {
    },
 
    calendarRemoveOccurrence: function(occurrence) {
    }
  }
});