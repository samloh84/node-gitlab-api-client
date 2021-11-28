const _ = require('lodash');
module.exports = class GroupIssuesApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }

    list(groupId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['groups', groupId, 'issues'], params, config);
    }

};

