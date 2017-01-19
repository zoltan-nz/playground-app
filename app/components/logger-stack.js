import Ember from 'ember';

export default Ember.Component.extend({

  logs: null,

  actions: {
    rerender() {
      this.rerender();
    }
  }

});
