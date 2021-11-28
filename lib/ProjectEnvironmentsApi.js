const _ = require('lodash');
module.exports = class ProjectEnvironmentsApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }


    list(projectId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'environments'], params, config);
    }

    read(projectId, environmentId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'environments', environmentId], params, config);
    }

    create(projectId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', projectId, 'environments'], data, config);
    }


    update(projectId, environmentId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['projects', projectId, 'environments', environmentId], data, config);
    }


    delete(projectId, environmentId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['projects', projectId, 'environments', environmentId], params, config);
    }


    deleteMultipleStoppedReviewApps(projectId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['projects', projectId, 'environments', 'review_apps'], params, config);
    }

    stop(projectId, environmentId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', projectId, 'environments', environmentId, 'stop'], data, config);
    }


};

