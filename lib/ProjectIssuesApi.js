const _ = require('lodash');
const ProjectIssueNotesApi = require("./ProjectIssueNotesApi");
module.exports = class ProjectIssuesApi {
    constructor(apiClient) {
        this._apiClient = apiClient;

        this.notes = new ProjectIssueNotesApi(apiClient);
    }

    list(projectId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'issues'], params, config);
    }

    read(projectId, issueId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'issues', issueId], params, config);
    }


    create(projectId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', projectId, 'issues'], data, config);
    }


    update(projectId, issueId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['projects', projectId, 'issues', issueId], data, config);
    }


    delete(projectId, issueId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['projects', projectId, 'issues', issueId], params, config);
    }

    reorder(projectId, issueId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['projects', projectId, 'issues', issueId, 'reorder'], data, config);
    }

    move(projectId, issueId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', projectId, 'issues', issueId, 'move'], data, config);
    }

    clone(projectId, issueId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', projectId, 'issues', issueId, 'clone'], data, config);
    }

    subscribe(projectId, issueId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', projectId, 'issues', issueId, 'subscribe'], data, config);
    }

    unsubscribe(projectId, issueId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', projectId, 'issues', issueId, 'unsubscribe'], data, config);
    }

    createTodoItem(projectId, issueId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', projectId, 'issues', issueId, 'todo'], data, config);
    }

    promoteToEpic(projectId, issueId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', projectId, 'issues', issueId, 'promote'], data, config);
    }

    setTimeEstimate(projectId, issueId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', projectId, 'issues', issueId, 'time_estimate'], data, config);
    }

    resetTimeEstimate(projectId, issueId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', projectId, 'issues', issueId, 'reset_time_estimate'], data, config);
    }

    addSpentTime(projectId, issueId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', projectId, 'issues', issueId, 'add_spent_time'], data, config);
    }

    resetSpentTime(projectId, issueId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', projectId, 'issues', issueId, 'reset_spent_time'], data, config);
    }

    getTimeTrackingStats(projectId, issueId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'issues', issueId, 'time_stats'], params, config);
    }


    listRelatedMergeRequests(projectId, issueId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'issues', issueId, 'related_merge_requests'], params, config);
    }


    listMergeRequestsThatCloseIssue(projectId, issueId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'issues', issueId, 'closed_by'], params, config);
    }

    listParticipants(projectId, issueId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'issues', issueId, 'participants'], params, config);
    }

    getUserAgentDetails(projectId, issueId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'issues', issueId, 'user_agent_detail'], params, config);
    }

    uploadMetricImage(projectId, issueId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        if (_.isNil(config)) {
            config = {};
        }
        _.set(config, ['headers', 'Content-Type'], 'multipart/form-data')
        return apiClient._post(['projects', projectId, 'issues', issueId, 'metric_images'], data, config);
    }

    listMetricImages(projectId, issueId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'issues', issueId, 'metric_images'], params, config);
    }

    deleteMetricImage(projectId, issueId, imageId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'issues', issueId, 'metric_images', imageId], params, config);
    }


    listStateEvents(projectId, issueId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'issues', issueId, 'resource_state_events'], params, config);
    }

    getStateEvent(projectId, issueId, stateEventId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'issues', issueId, 'resource_state_events', stateEventId], params, config);
    }


};

