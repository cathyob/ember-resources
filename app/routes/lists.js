import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('list');
  },
  actions: {
    editList (list) {
      // console.log('Got to the route to edit lists');
      this.transitionTo('list-edit', list);
    }
  },
});
