const _ = require('lodash');
module.exports = class ProjectProtectedBranchesApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }


    list(projectId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'protected_branches'], params, config);
    }

    read(projectId, branch, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'protected_branches', branch], params, config);
    }

    create(projectId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', projectId, 'protected_branches'], data, config);
    }

    remove(projectId, branch, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['projects', projectId, 'protected_branches', branch], params, config);
    }

    requireCodeOwnerApprovals(projectId, branch, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._patch(['projects', projectId, 'protected_branches', branch], data, config);
    }

};

