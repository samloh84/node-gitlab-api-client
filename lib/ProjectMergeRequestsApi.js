const _ = require('lodash');
const ProjectMergeRequestNotesApi = require("./ProjectMergeRequestNotesApi");
const ProjectMergeRequestApprovalsApi = require("./ProjectMergeRequestApprovalsApi");
module.exports = class ProjectMergeRequestsApi {
    constructor(apiClient) {
        this._apiClient = apiClient;

        this.approvals = new ProjectMergeRequestApprovalsApi(apiClient);
        this.notes = new ProjectMergeRequestNotesApi(apiClient);
    }


    list(projectId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'merge_requests'], params, config);
    }

    read(projectId, mergeRequestId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'merge_requests', mergeRequestId], params, config);
    }


    listParticipants(projectId, mergeRequestId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'merge_requests', mergeRequestId, 'participants'], params, config);
    }

    listCommits(projectId, mergeRequestId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'merge_requests', mergeRequestId, 'commits'], params, config);
    }

    listChanges(projectId, mergeRequestId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'merge_requests', mergeRequestId, 'commits'], params, config);
    }

    listPipelines(projectId, mergeRequestId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'merge_requests', mergeRequestId, 'pipelines'], params, config);
    }

    createPipeline(projectId, mergeRequestId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', projectId, 'merge_requests', mergeRequestId, 'pipelines'], data, config);
    }


    create(projectId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', projectId, 'merge_requests'], data, config);
    }

    update(projectId, mergeRequestId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['projects', projectId, 'merge_requests',mergeRequestId], data, config);
    }

    delete(projectId, mergeRequestId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['projects', projectId, 'merge_requests',mergeRequestId], params, config);
    }



    accept(projectId, mergeRequestId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['projects', projectId, 'merge_requests',mergeRequestId, 'merge'], data, config);
    }

    mergeToDefaultMergeRefPath(projectId, mergeRequestId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'merge_requests',mergeRequestId, 'merge_ref'], params, config);
    }

    cancelMergeWhenPipelineSucceeds(projectId, mergeRequestId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', projectId, 'merge_requests',mergeRequestId, 'cancel_merge_when_pipeline_succeeds'], data, config);
    }



    rebase(projectId, mergeRequestId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['projects', projectId, 'merge_requests',mergeRequestId, 'rebase'], data, config);
    }

    listIssuesThatCloseOnMerge(projectId, mergeRequestId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'merge_requests',mergeRequestId, 'closes_issues'], params, config);
    }

    subscribe(projectId, mergeRequestId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', projectId, 'merge_requests',mergeRequestId, 'subscribe'], data, config);
    }

    unsubscribe(projectId, mergeRequestId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', projectId, 'merge_requests',mergeRequestId, 'unsubscribe'], data, config);
    }

    createTodoItem(projectId, mergeRequestId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', projectId, 'merge_requests',mergeRequestId, 'todo'], data, config);
    }

    listDiffVersions(projectId, mergeRequestId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'merge_requests',mergeRequestId, 'versions'], params, config);
    }

    getDiffVersion(projectId, mergeRequestId, versionId, params,config){
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'merge_requests',mergeRequestId, 'versions',versionId], params, config);
    }
    setTimeEstimate(projectId, mergeRequestId, data,config){
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', projectId, 'merge_requests',mergeRequestId, 'time_estimate'], data, config);
    }

    resetTimeEstimate(projectId, mergeRequestId, data,config){
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', projectId, 'merge_requests',mergeRequestId, 'reset_time_estimate'], data, config);
    }

    addSpentTime(projectId, mergeRequestId, data,config){
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', projectId, 'merge_requests',mergeRequestId, 'add_spent_time'], data, config);
    }
    resetSpentTime(projectId, mergeRequestId, data,config){
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', projectId, 'merge_requests',mergeRequestId, 'reset_spent_time'], data, config);
    }
    getTimeTrackingStats(projectId, mergeRequestId, params,config){
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'merge_requests',mergeRequestId, 'time_stats'], params, config);
    }

    listStateEvents(projectId, mergeRequestId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'merge_requests', mergeRequestId, 'resource_state_events'], params, config);
    }

    getStateEvent(projectId, mergeRequestId, stateEventId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'merge_requests', mergeRequestId, 'resource_state_events', stateEventId], params, config);
    }

};

