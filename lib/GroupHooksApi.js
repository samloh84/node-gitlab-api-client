const _ = require('lodash');
module.exports = class GroupHooksApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }


    list(groupId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['groups', groupId, 'hooks'], params, config);
    }

    read(groupId, hookId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['groups', groupId, 'hooks', hookId], params, config);
    }

    create(groupId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['groups', groupId, 'hooks'], data, config);
    }


    update(groupId, hookId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['groups', groupId, 'hooks', hookId], data, config);
    }


    delete(groupId, hookId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['groups', groupId, 'hooks', hookId], params, config);
    }

};

