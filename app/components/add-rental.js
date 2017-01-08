import Ember from 'ember';

export default Ember.Component.extend({
    init() {
        this._super(...arguments);
        this.set('newRentalValues', {
            title: '',
            owner: '',
            city: '',
            type: '',
            image: '',
            bedrooms: '',
            description: '',
        });
    },
    classNames: ['list-filter'],
    actions: {
        handleAddRental() {
            this.onRentalAdd(this.get('newRentalValues'));
        }
    }
});
