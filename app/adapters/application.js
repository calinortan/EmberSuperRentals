import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    host: 'http://localhost:8080/REST-API-Spring',
    headers: {
        Accept: 'application/json'
    },

    createRecord(store, type, snapshot) {
        return this._super(store, type, snapshot);
    }
});
