const _ = require('lodash');
module.exports = class ProjectIssueNotesApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }


    list(projectId, issueId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'issues', issueId, 'notes'], params, config);
    }

    read(projectId, issueId, noteId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'issues', issueId, 'notes', noteId], params, config);
    }


    create(projectId, issueId, noteId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', projectId, 'issues', issueId, 'notes', noteId], data, config);
    }

    update(projectId, issueId, noteId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['projects', projectId, 'issues', issueId, 'notes', noteId], data, config);
    }

    delete(projectId, issueId, noteId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['projects', projectId, 'issues', issueId, 'notes', noteId], params, config);
    }

};

