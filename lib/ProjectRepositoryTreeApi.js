const _ = require('lodash');
module.exports = class ProjectRepositoryTreeApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }


    list(projectId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'repository', 'tree'], params, config);
    }

    getBlob(projectId, sha, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'repository', 'blobs', sha], params, config);
    }

    getRawBlob(projectId, sha, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'repository', 'blobs', sha, 'raw'], params, config);
    }

    getArchive(projectId, archiveFormat, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'repository', 'archive', archiveFormat], params, config);
    }

    compare(projectId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'repository', 'compare'], params, config);
    }

    listContributors(projectId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'repository', 'contributors'], params, config);
    }

    getMergeBase(projectId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'repository', 'merge_base'], params, config);
    }


    addChangelogToFile(projectId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', projectId, 'repository', 'changelog'], data, config);
    }

    getChangelogData(projectId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'repository', 'changelog'], params, config);
    }


};

