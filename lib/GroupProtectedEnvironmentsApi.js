const _ = require('lodash');
module.exports = class GroupProtectedEnvironmentsApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }


    list(groupId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['groups', groupId, 'protected_environments'], params, config);
    }

    read(groupId, branch, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['groups', groupId, 'protected_environments', branch], params, config);
    }

    create(groupId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['groups', groupId, 'protected_environments'], data, config);
    }

    remove(groupId, branch, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['groups', groupId, 'protected_environments', branch], params, config);
    }


};

