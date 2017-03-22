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
  },
});
