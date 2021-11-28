const _ = require('lodash');
module.exports = class ProjectRepositoryFilesApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }


    get(projectId, filePath, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'repository', 'files', filePath], params, config);
    }

    getBlame(projectId, filePath, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'repository', 'files', filePath, 'blame'], params, config);
    }

    getRaw(projectId, filePath, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'repository', 'files', filePath, 'raw'], params, config);
    }

    create(projectId, filePath, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', projectId, 'repository', 'files', filePath], data, config);
    }

    update(projectId, filePath, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['projects', projectId, 'repository', 'files', filePath], data, config);
    }

    delete(projectId, filePath, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['projects', projectId, 'repository', 'files', filePath], params, config);
    }


};

