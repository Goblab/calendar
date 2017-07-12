import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('login');

  this.route('events', function () {
    this.route('index');
    this.route("new");
    this.route("edit", {
      path: ":event_id/edit"
    });
    this.route("show", {
      path: ":event_id"
    });
  });

  this.route("users", function() {
    this.route("new");

    this.route("edit", {
      path: ":user_id/edit"
    });

    this.route("show", {
      path: ":user_id"
    });
  });
});

export default Router;
