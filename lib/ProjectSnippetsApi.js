const _ = require('lodash');
const ProjectSnippetNotesApi = require("./ProjectSnippetNotesApi");
module.exports = class ProjectSnippetsApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
        this.notes = new ProjectSnippetNotesApi(apiClient);
    }


    list(projectId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'snippets'], params, config);
    }

    read(projectId, snippetId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'snippets', snippetId], params, config);
    }

    create(projectId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', projectId, 'snippets'], data, config);
    }


    update(projectId, snippetId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['projects', projectId, 'snippets', snippetId], data, config);
    }


    delete(projectId, snippetId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['projects', projectId, 'snippets', snippetId], params, config);
    }

    getContent(projectId, snippetId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'snippets', snippetId, 'raw'], params, config);
    }

    getFileContent(projectId, snippetId, ref, filePath, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'snippets', snippetId, 'files', ref, filePath, 'raw'], params, config);
    }

    getUserAgentDetails(projectId, snippetId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'snippets', snippetId, 'user_agent_detail'], params, config);
    }


};

