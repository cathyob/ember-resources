import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNameBindings: ['listItemCompleted'],
  listItemCompleted: Ember.computed.alias('item.done'),
  actions: {
    toggleDone () {
      // console.log('Sending Action');
      return this.sendAction('toggleDone', this.get('item'));
    },
    delete () {
      // console.log('Sending delete action');
      return this.sendAction('delete', this.get('item'));
    },
  },
});
