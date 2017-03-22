import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['listr'],
  classNameBindings: ['listDetailHidden'],
  listDetailHidden: false,
  actions: {
    toggleListDetail () {
      return this.toggleProperty('listDetailHidden');
    },
    toggleItemDone (item) {
      // console.log('Got to shopping list to toggle done');
      return this.sendAction('toggleItemDone', item);
    },
    deleteItem (item) {
      console.log('Got to shopping list to delete');
      return this.sendAction('deleteItem', item);
    }
  },
});
