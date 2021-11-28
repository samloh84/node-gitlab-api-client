const _ = require('lodash');
module.exports = class ProjectPushRulesApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }


    list(projectId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'push_rule'], params, config);
    }

    add(projectId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', projectId, 'push_rule'], data, config);
    }

    update(projectId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['projects', projectId, 'push_rule'], data, config);
    }

    delete(projectId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['projects', projectId, 'push_rule'], params, config);
    }


};

