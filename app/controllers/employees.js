import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		filterByName(param) {
		  if (param !== '') {
			return this.get('store').query('employees', { name: param });
		  } else {
			return this.get('store').findAll('employees');
		  }
		}
	}
});