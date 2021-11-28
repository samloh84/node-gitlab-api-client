const _ = require('lodash');
module.exports = class GroupPushRulesApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }


    list(groupId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['groups', groupId, 'push_rule'], params, config);
    }

    add(groupId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['groups', groupId, 'push_rule'], data, config);
    }

    update(groupId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['groups', groupId, 'push_rule'], data, config);
    }

    delete(groupId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['groups', groupId, 'push_rule'], params, config);
    }


};

