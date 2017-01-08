import Ember from 'ember';

export default Ember.Controller.extend({
  isScrolled: false,
  actions: {
    filterByCity(param) {
      if (param !== '') {
        return this.get('store').query('rental', { city: param });
      } else {
        return this.get('store').findAll('rental');
      }
    },
    addNewRental(rental) {
      let rentalx =  this.get('store').createRecord('rental', rental);
      rentalx.save().then((data) => {
        console.log(data);
      }).catch((error) => {
        console.log(error);
      });
    }
  }
});