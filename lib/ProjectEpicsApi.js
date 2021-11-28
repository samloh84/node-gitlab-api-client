const _ = require('lodash');
const ProjectEpicNotesApi = require("./ProjectEpicNotesApi");
const ProjectEpicIssuesApi = require("./ProjectEpicIssuesApi");
module.exports = class ProjectEpicsApi {
    constructor(apiClient) {
        this._apiClient = apiClient;

        this.notes = new ProjectEpicNotesApi(apiClient);
        this.issues = new ProjectEpicIssuesApi(apiClient);
    }

    list(projectId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'epics'], params, config);
    }

    read(projectId, epicId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'epics', epicId], params, config);
    }


    create(projectId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', projectId, 'epics'], data, config);
    }


    update(projectId, epicId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['projects', projectId, 'epics', epicId], data, config);
    }


    delete(projectId, epicId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['projects', projectId, 'epics', epicId], params, config);
    }

    createTodoItem(projectId, epicId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', projectId, 'epics', epicId, 'todo'], data, config);
    }
};

