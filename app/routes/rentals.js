import Ember from 'ember';

export default Ember.Route.extend({
    activate() {
        window.onscroll = this.onScroll.bind(this);
    },

    deactivate() {
        window.onscroll = null;
    },

    onScroll() {
        const isScrolled = this.controller.get('isScrolled');

        if (window.scrollY > 0 && !isScrolled) {
            this.controller.set('isScrolled', true);
        }
        if (window.scrollY === 0 && isScrolled) {
            this.controller.set('isScrolled', false);
        }
    }
});
