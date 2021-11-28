const _ = require('lodash');
module.exports = class ProjectRepositorySubmodulesApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }


    update(projectId, submodule, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'repository', 'submodules', submodule], data, config);
    }


};

