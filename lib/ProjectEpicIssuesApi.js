const _ = require('lodash');
module.exports = class ProjectEpicIssuesApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }


    list(projectId, epicId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'epics', epicId, 'issues'], params, config);
    }

    assign(projectId, epicId, issueId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'epics', epicId, 'issues', issueId], params, config);
    }


    remove(projectId, epicId, epicIssueId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['projects', projectId, 'epics', epicId, 'issues', epicIssueId], params, config);
    }

    update(projectId, epicId, epicIssueId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['projects', projectId, 'epics', epicId, 'issues', epicIssueId], data, config);
    }

};

