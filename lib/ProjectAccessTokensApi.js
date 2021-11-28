const _ = require('lodash');
module.exports = class ProjectAccessTokensApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }

    list(projectId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'access_tokens'], params, config);
    }

    create(projectId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', projectId, 'access_tokens'], data, config);
    }

    revoke(projectId, projectAccessTokenId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['projects', projectId, 'access_tokens', projectAccessTokenId], params, config);
    }

};

