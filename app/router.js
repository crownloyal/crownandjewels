import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('login');
  
  this.route('posts', { path: '/blog' }, function() {
  	this.route('post', { path: '/:post_id' });
  	this.route('new');
  });
});

export default Router;
