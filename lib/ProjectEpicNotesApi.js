const _ = require('lodash');
module.exports = class ProjectEpicNotesApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }


    list(projectId, epicId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'epics', epicId, 'notes'], params, config);
    }

    read(projectId, epicId, noteId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'epics', epicId, 'notes', noteId], params, config);
    }


    create(projectId, epicId, noteId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', projectId, 'epics', epicId, 'notes', noteId], data, config);
    }

    update(projectId, epicId, noteId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['projects', projectId, 'epics', epicId, 'notes', noteId], data, config);
    }

    delete(projectId, epicId, noteId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['projects', projectId, 'epics', epicId, 'notes', noteId], params, config);
    }

};

