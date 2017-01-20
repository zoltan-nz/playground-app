import Ember from 'ember';

export default Ember.Service.extend({

  logStack: null,

  init() {
    this._super(...arguments);

    this.logStack = [];
  },

  add(message) {
    this.logStack.pushObject(message);
  },

  clear() {
    Ember.set(this, 'logStack', []);
  }
});
