const _ = require('lodash');
module.exports = class ProjectPipelineTriggersApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }


    list(projectId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'triggers'], params, config);
    }

    read(projectId, triggerId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'triggers', triggerId], params, config);
    }

    create(projectId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', projectId, 'triggers'], data, config);
    }


    update(projectId, triggerId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['projects', projectId, 'triggers', triggerId], data, config);
    }


    delete(projectId, triggerId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['projects', projectId, 'triggers', triggerId], params, config);
    }


};

