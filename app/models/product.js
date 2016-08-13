const PRODUCT_TYPE = {
  isHome: 'home',
  isOffice: 'office',
  isHobby: 'hobby'
};

export default Ember.ObjectProxy.extend({

  type: Ember.computed('content', function() {

    const content = this.get('content');
    const keys = Object.keys(content);
    const type = keys.filter( key => content[key] ).filter( key => PRODUCT_TYPE[key]);

    return PRODUCT_TYPE[type[0]];
  })
});
