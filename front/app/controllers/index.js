import Ember from 'ember';
 
export default Ember.Controller.extend({
  seccionals: true,

  occurrences: Ember.computed('model.@each', 'seccionals', function () {
    var events = Ember.A();
    if (this.get('model')) {
      this.get('model').forEach(function (event) {
        var canAdd = true;

        if (this.get('seccionals')) {
          if (!event.get('goblal')) {
            canAdd = false;
          }
        }

        var ev = Ember.Object.create({
          title: event.get('title'),
          startsAt: moment(event.get('startDate')),
          endsAt: moment(event.get('endDate')),
          id: event.get('id'),
          description: event.get('description'),
          address: event.get('address'),
          isDraggable: false
        });

        if (canAdd) {
          events.push(ev);
        }
      }, this);
    } 
    return events;
  }),
 



  actions: {
    calendarAddOccurrence: function(occurrence) {
      /*
      this.get('occurrences').pushObject(Ember.Object.create({
        title: occurrence.get('title'),
        startsAt: occurrence.get('startsAt'),
        endsAt: occurrence.get('endsAt')
      }));
      */
    },
 
    calendarUpdateOccurrence: function(occurrence, properties) {
      //occurrence.setProperties(properties);
    },
 
    calendarRemoveOccurrence: function(occurrence) {
      //this.get('occurrences').removeObject(occurrence);
    }
  }
});