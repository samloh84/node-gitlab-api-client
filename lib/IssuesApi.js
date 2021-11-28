const _ = require('lodash');
module.exports = class IssuesApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }

    list( params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['issues'], params, config);
    }

    read(issueId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['issues',issueId], params, config);
    }

};

