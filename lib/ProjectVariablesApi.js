const _ = require('lodash');
module.exports = class ProjectVariablesApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }


    list(projectId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'variables'], params, config);
    }

    read(projectId, key, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'variables', key], params, config);
    }

    create(projectId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', projectId, 'variables'], data, config);
    }

    remove(projectId, key, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['projects', projectId, 'variables', key], params, config);
    }


};

