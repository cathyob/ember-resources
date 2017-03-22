import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    edit () {
      // console.log('Editing');
      this.sendAction('edit', this.get('list'));
    },
  }
});
