const _ = require('lodash');
module.exports = class ProjectSnippetNotesApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }


    list(projectId, snippetId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'snippets', snippetId, 'notes'], params, config);
    }

    read(projectId, snippetId, noteId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'snippets', snippetId, 'notes', noteId], params, config);
    }


    create(projectId, snippetId, noteId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', projectId, 'snippets', snippetId, 'notes', noteId], data, config);
    }

    update(projectId, snippetId, noteId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['projects', projectId, 'snippets', snippetId, 'notes', noteId], data, config);
    }

    delete(projectId, snippetId, noteId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['projects', projectId, 'snippets', snippetId, 'notes', noteId], params, config);
    }

};

