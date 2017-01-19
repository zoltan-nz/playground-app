import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    addNewLog(message) {
      this.logger.add(message);
    }
  }
});
