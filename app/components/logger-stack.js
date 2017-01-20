import Ember from 'ember';

export default Ember.Component.extend({

  logs: Ember.computed.alias('logger.logStack'),

  actions: {
    rerender() {
      this.rerender();
    },

    clear() {
      this.get('logger').clear();
    }
  }

});
