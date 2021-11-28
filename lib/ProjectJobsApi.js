

const _ = require('lodash');
const ProjectJobArtifactsApi = require("./ProjectJobArtifactsApi");

module.exports = class ProjectJobsApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
        this.artifacts = new ProjectJobArtifactsApi(apiClient);
    }

    list(projectId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'jobs'], params, config);
    }

    read(projectId,jobId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'jobs',jobId], params, config);
    }

    getLogFile(projectId,jobId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'jobs',jobId,'trace'], params, config);
    }
    cancel(projectId,jobId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', projectId, 'jobs',jobId,'cancel'], data, config);
    }
    retry(projectId,jobId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', projectId, 'jobs',jobId,'retry'], data, config);
    }
    erase(projectId,jobId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', projectId, 'jobs',jobId,'erase'], data, config);
    }

    play(projectId,jobId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', projectId, 'jobs',jobId,'play'], data, config);
    }


};

