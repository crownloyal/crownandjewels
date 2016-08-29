import Ember from 'ember';

export default Ember.Controller.extend({
	text: '',
	excerpt: '',
	action: {
		updateExcerpt: function() {
			this.set('excerpt', excerptField);
		},
		updateText: function(){
			this.set('text', textField)
		}
	}
});
