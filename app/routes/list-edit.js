import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveList (list) {
      console.log('Getting to saveList')
      list.save()
      .then(() => this.transitionTo('lists'));
    }
  },
});
