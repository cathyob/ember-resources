import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.get('store').findRecord('list', params.list_id);
  },
  actions: {
    toggleItemDone (item) {
      // console.log('Got to the route to toggle');
      item.toggleProperty('done');
      item.save();
    },
    deleteItemDone (item) {
      console.log('Got to the route to delete');
      item.destroyRecord();
    }
  },
});
