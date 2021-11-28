const _ = require('lodash');

module.exports = class ProjectPipelinesApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }

    list(projectId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'pipelines'], params, config);
    }

    read(projectId, pipelineId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'pipelines', pipelineId], params, config);
    }


    listVariables(projectId, pipelineId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'pipelines', pipelineId, 'variables'], params, config);
    }

    getTestReport(projectId, pipelineId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'pipelines', pipelineId, 'test_report'], params, config);
    }

    getTestReportSummary(projectId, pipelineId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'pipelines', pipelineId, 'test_report_summary'], params, config);
    }


    create(projectId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', projectId, 'pipelines'], data, config);
    }

    retry(projectId, pipelineId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', projectId, 'pipelines', pipelineId, 'retry'], data, config);
    }

    cancel(projectId, pipelineId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', projectId, 'pipelines', pipelineId, 'cancel'], data, config);
    }

    delete(projectId, pipelineId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['projects', projectId, 'pipelines', pipelineId], params, config);
    }

    listJobs(projectId, pipelineId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'pipelines', pipelineId, 'jobs'], params, config);
    }

    listBridges(projectId, pipelineId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'pipelines', pipelineId, 'bridges'], params, config);
    }

};

