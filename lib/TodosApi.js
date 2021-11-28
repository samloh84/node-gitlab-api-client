const _ = require('lodash');
module.exports = class TodosApi {
    constructor(apiClient) {
        this._apiClient = apiClient;

    }

    list(params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['todos'], params, config);
    }


    markAsDone(todoId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['todos', todoId], data, config);
    }

    markAllAsDone(data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['todos', 'mark_as_done'], data, config);
    }


};

