const _ = require('lodash');
module.exports = class ProjectPackagesApi {
    constructor(apiClient) {
        this._apiClient = apiClient;

    }

    list(projectId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'packages'], params, config);
    }

    read(projectId, packageId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'packages', packageId], params, config);
    }

    listFiles(projectId, packageId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'packages', packageId, 'package_files'], params, config);
    }

    delete(projectId, packageId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['projects', projectId, 'packages', packageId], params, config);
    }

    deleteFile(projectId, packageId, packageFileId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['projects', projectId, 'packages', packageId, 'package_files', packageFileId], params, config);
    }



};

