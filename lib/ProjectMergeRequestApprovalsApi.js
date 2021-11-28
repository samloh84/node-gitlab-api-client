const _ = require('lodash');
module.exports = class ProjectMergeRequestApprovalsApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }


    list(projectId, mergeRequestId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'merge_requests', mergeRequestId, 'approvals'], params, config);
    }

    getApprovalState(projectId, mergeRequestId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'merge_requests', mergeRequestId, 'approval_state'], params, config);
    }


    changeApprovalConfiguration(projectId, mergeRequestId,  data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', projectId, 'merge_requests', mergeRequestId, 'approvals'], data, config);
    }



    listRules(projectId,mergeRequestId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'merge_requests', mergeRequestId, 'approval_rules'], params, config);
    }

    createRule(projectId,mergeRequestId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', projectId, 'merge_requests', mergeRequestId,'approval_rules'], data, config);
    }

    updateRule(projectId,mergeRequestId, approvalRuleId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', projectId, 'merge_requests', mergeRequestId, 'approval_rules', approvalRuleId], data, config);
    }

    deleteRule(projectId, mergeRequestId,approvalRuleId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['projects', projectId,  'merge_requests', mergeRequestId,'approval_rules', approvalRuleId], params, config);
    }

    approve(projectId, mergeRequestId,  data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', projectId, 'merge_requests', mergeRequestId, 'approve'], data, config);
    }
    unapprove(projectId, mergeRequestId,  data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', projectId, 'merge_requests', mergeRequestId, 'unapprove'], data, config);
    }


};

