export default Ember.Object.create({

  getProducts() {

    return new Ember.RSVP.Promise((resolve, reject) => {
      $.getJSON("/api/products")
        .done(resolve)
        .fail(reject);
    });
  }

});
