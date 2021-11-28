const _ = require('lodash');
module.exports = class ProjectMergeRequestNotesApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }


    list(projectId, mergeRequestId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'merge_requests', mergeRequestId, 'notes'], params, config);
    }

    read(projectId, mergeRequestId, noteId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'merge_requests', mergeRequestId, 'notes', noteId], params, config);
    }


    create(projectId, mergeRequestId, noteId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', projectId, 'merge_requests', mergeRequestId, 'notes', noteId], data, config);
    }

    update(projectId, mergeRequestId, noteId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['projects', projectId, 'merge_requests', mergeRequestId, 'notes', noteId], data, config);
    }

    delete(projectId, mergeRequestId, noteId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['projects', projectId, 'merge_requests', mergeRequestId, 'notes', noteId], params, config);
    }

};

