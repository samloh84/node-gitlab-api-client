const _ = require('lodash');
module.exports = class ProjectRepositoryTagsApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }


    list(projectId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'repository', 'tags'], params, config);
    }
    
    

    read(projectId, tag, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'repository', 'tags', tag], params, config);
    }


    create(projectId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', projectId, 'repository', 'tags'], data, config);
    }


    delete(projectId, tag, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['projects', projectId, 'repository', 'tags', tag], params, config);
    }


};

