const _ = require('lodash');
module.exports = class ProjectMembersApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }


    list(projectId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'members'], params, config);
    }

    listAll(projectId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'members', 'all'], params, config);
    }

    read(projectId, userId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'members', userId], params, config);
    }

    readAll(projectId, userId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'members', 'all', userId], params, config);
    }

    add(projectId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', projectId, 'members'], data, config);
    }


    update(projectId, userId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['projects', projectId, 'members', userId], data, config);
    }


    remove(projectId, userId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['projects', projectId, 'members', userId], params, config);
    }

};

