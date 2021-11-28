const _ = require('lodash');
module.exports = class ProjectRepositoryBranchesApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }


    list(projectId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'repository', 'branches'], params, config);
    }

    read(projectId, branch, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'repository', 'branches', branch], params, config);
    }

    create(projectId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', projectId, 'repository', 'branches'], data, config);
    }

    delete(projectId, branch, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['projects', projectId, 'repository', 'branches', branch], params, config);
    }



};

