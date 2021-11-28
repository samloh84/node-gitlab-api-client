const _ = require('lodash');
module.exports = class GroupWikisApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }

    list(groupId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['groups', groupId, 'wikis'], params, config);
    }

    read(groupId, slug, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['groups', groupId, 'wikis', slug], params, config);
    }

    create(groupId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['groups', groupId, 'wikis'], data, config);
    }

    update(groupId, slug, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['groups', groupId, 'wikis', slug], data, config);
    }


    delete(groupId, slug, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['groups', groupId, 'wikis', slug], params, config);
    }

    uploadAttachment(groupId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        if (_.isNil(config)) {
            config = {};
        }
        _.set(config, ['headers', 'Content-Type'], 'multipart/form-data')
        return apiClient._post(['groups', groupId, 'wikis', 'attachments'], data, config);
    }

};

