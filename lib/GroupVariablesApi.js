const _ = require('lodash');
module.exports = class GroupVariablesApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }


    list(groupId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['groups', groupId, 'variables'], params, config);
    }

    read(groupId, key, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['groups', groupId, 'variables', key], params, config);
    }

    create(groupId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['groups', groupId, 'variables'], data, config);
    }

    remove(groupId, key, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['groups', groupId, 'variables', key], params, config);
    }


};

