const _ = require('lodash');

module.exports = class ProjectJobArtifactsApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }

    list(projectId, jobId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'jobs', jobId, 'artifacts'], params, config);
    }

    download(projectId, refName, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'jobs', 'artifacts', refName, 'download'], params, config);
    }


    downloadByPath(projectId, jobId, artifactPath, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'jobs', jobId, 'artifacts', artifactPath], params, config);
    }


    downloadFromTagOrBranch(projectId, refName, artifactPath, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'jobs', 'artifacts', refName, 'raw', artifactPath], params, config);
    }

    keep(projectId, jobId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', projectId, 'jobs', jobId, 'artifacts', 'keep'], data, config);
    }

    delete(projectId, jobId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['projects', projectId, 'jobs', jobId, 'artifacts'], data, config);
    }


}