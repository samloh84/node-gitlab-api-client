const _ = require('lodash');
module.exports = class ProjectMergeRequestApprovalConfigurationApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }

    get(projectId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'approvals'], params, config);
    }

    update(projectId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', projectId, 'approvals'], data, config);
    }

    listRules(projectId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'approval_rules'], params, config);
    }

    createRule(projectId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', projectId, 'approval_rules'], data, config);
    }

    updateRule(projectId, approvalRuleId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', projectId, 'approval_rules', approvalRuleId], data, config);
    }

    deleteRule(projectId, approvalRuleId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['projects', projectId, 'approval_rules', approvalRuleId], params, config);
    }



};

