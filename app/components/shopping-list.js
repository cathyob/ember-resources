import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['listr'],
  classNameBindings: ['listDetailHidden'],
  listDetailHidden: false,
  newItem: {
    content: null,
    done: false,
  },
  actions: {
    toggleListDetail () {
      return this.toggleProperty('listDetailHidden');
    },
    toggleItemDone (item) {
      // console.log('Got to shopping list to toggle done');
      return this.sendAction('toggleItemDone', item);
    },
    deleteItem (item) {
      // console.log('Got to shopping list to delete');
      return this.sendAction('deleteItem', item);
    },
    createItem () {
      // console.log('Got to shopping list to add item');
      // console.log('NEW ITEM!', this.get('newItem'));
      let data = this.get('newItem');
      data.list = this.get('list');
      this.sendAction('createItem', data);
      this.set('newItem.content', null);
    },
  },
});
