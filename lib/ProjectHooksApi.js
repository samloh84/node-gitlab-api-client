const _ = require('lodash');
module.exports = class ProjectHooksApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }


    list(projectId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'hooks'], params, config);
    }

    read(projectId, hookId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'hooks', hookId], params, config);
    }

    create(projectId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', projectId, 'hooks'], data, config);
    }


    update(projectId, hookId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['projects', projectId, 'hooks', hookId], data, config);
    }


    delete(projectId, hookId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['projects', projectId, 'hooks', hookId], params, config);
    }

};

