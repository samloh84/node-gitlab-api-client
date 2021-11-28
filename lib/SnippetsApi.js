const _ = require('lodash');
module.exports = class SnippetsApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }


    list(params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['snippets'], params, config);
    }

    read(snippetId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['snippets', snippetId], params, config);
    }

    create(data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['snippets'], data, config);
    }


    update(snippetId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['snippets', snippetId], data, config);
    }


    delete(snippetId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['snippets', snippetId], params, config);
    }

    listPublic(params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['snippets', 'public'], params, config);
    }

    getUserAgentDetails(snippetId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['snippets', snippetId, 'user_agent_detail'], params, config);
    }


};

