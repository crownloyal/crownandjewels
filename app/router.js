import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('posts', { path: '/blog', resetNamespace: true }, function() {
        this.route('post', { path: ':post_id' });
        this.route('new');
    });
  this.route('login');
});

export default Router;
