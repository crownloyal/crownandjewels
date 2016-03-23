import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		return store.findRecord('post', params.id);
	}
});
