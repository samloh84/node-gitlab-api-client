const _ = require('lodash');
module.exports = class ProjectProtectedEnvironmentsApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }


    list(projectId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'protected_environments'], params, config);
    }

    read(projectId, branch, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'protected_environments', branch], params, config);
    }

    create(projectId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', projectId, 'protected_environments'], data, config);
    }

    remove(projectId, branch, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['projects', projectId, 'protected_environments', branch], params, config);
    }


};

