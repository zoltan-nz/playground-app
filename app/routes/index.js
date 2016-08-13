import Ember from 'ember';
import ApplicationAdapter from '../adapters/application';
import Product from '../models/product';

export default Ember.Route.extend({

  model() {
    return ApplicationAdapter.getProducts().then(
      response => {
        console.log('response', response);
        return new Product({content: response});
      }
    )
  }

});
