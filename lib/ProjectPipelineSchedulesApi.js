const _ = require('lodash');
module.exports = class ProjectPipelineSchedulesApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }


    list(projectId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'pipeline_schedules'], params, config);
    }

    read(projectId, pipelineScheduleId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'pipeline_schedules', pipelineScheduleId], params, config);
    }

    create(projectId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', projectId, 'pipeline_schedules'], data, config);
    }


    update(projectId, pipelineScheduleId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['projects', projectId, 'pipeline_schedules', pipelineScheduleId], data, config);
    }

    takeOwnership(projectId, pipelineScheduleId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', projectId, 'pipeline_schedules', pipelineScheduleId, 'take_ownership'], data, config);
    }

    runImmediately(projectId, pipelineScheduleId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', projectId, 'pipeline_schedules', pipelineScheduleId, 'play'], data, config);
    }


    delete(projectId, pipelineScheduleId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['projects', projectId, 'pipeline_schedules', pipelineScheduleId], params, config);
    }

    listVariables(projectId, pipelineScheduleId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'pipeline_schedules', pipelineScheduleId, 'variables'], params, config);
    }

    createVariable(projectId, pipelineScheduleId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', projectId, 'pipeline_schedules', pipelineScheduleId, 'variables'], data, config);
    }

    updateVariable(projectId, pipelineScheduleId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['projects', projectId, 'pipeline_schedules', pipelineScheduleId, 'variables'], data, config);
    }

    deleteVariable(projectId, pipelineScheduleId, key, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['projects', projectId, 'pipeline_schedules', pipelineScheduleId, 'variables', key], params, config);
    }


};

