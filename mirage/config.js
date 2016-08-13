export default function() {

  this.get('/api/products', function(q) {
    return {
      name: 'My Product',
      isHome: false,
      isOffice: true
    };

  })

}
