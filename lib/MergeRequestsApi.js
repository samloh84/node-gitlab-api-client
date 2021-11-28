const _ = require('lodash');
module.exports = class MergeRequestsApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }


    list(params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['merge_requests'], params, config);
    }


};

