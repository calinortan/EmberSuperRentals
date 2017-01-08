import DS from 'ember-data';

export default DS.RESTSerializer.extend({

    serialize(snapshot, options) {
        const json = this._super(...arguments);

        return json;
    },

    serializeIntoHash: function (data, type, record, options) {
        const json = this.serialize(record, options);
        Object.assign(data, json);
    },

/**
 * this hook should be enough but for purpose of exercise
 * other hooks were left
 */
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        console.log('normalize RENTAL');
        const normalizedPayload = {
            rentals: payload
        };
        return this._super(store, primaryModelClass, normalizedPayload, id, requestType);
    },

    // normalizeCreateRecordResponse(store, primaryModelClass, payload, id, requestType) {
    //     console.log('normalizeCreateRecordResponse');
    //     const normalizedPayload = {
    //         rentals: payload
    //     };
    //     return this._super(store, primaryModelClass, normalizedPayload, id, requestType);
    // },
    // normalizeFindAllResponse(store, primaryModelClass, payload, id, requestType) {
    //     console.log('normalizeFindAllResponse');
    //     const normalizedPayload = {
    //         rentals: payload
    //     };
    //     return this._super(store, primaryModelClass, normalizedPayload, id, requestType);
    // },
    // normalizeQueryResponse(store, primaryModelClass, payload, id, requestType) {
    //     console.log('normalizeQuerResponse');
    //     const normalizedPayload = {
    //         rentals: payload
    //     };
    //     return this._super(store, primaryModelClass, normalizedPayload, id, requestType);
    // }

});
