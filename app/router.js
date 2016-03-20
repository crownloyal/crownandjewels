import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('login');
  
  this.route('posts', { path: '/blog' });
  this.route('post', { path: 'blog/:post_id' });
  this.route('new', { path: 'blog/new' });
});

export default Router;
