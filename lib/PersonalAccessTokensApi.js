const _ = require('lodash');
module.exports = class PersonalAccessTokensApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }

    list( params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['personal_access_tokens'], params, config);
    }

    revoke(personalAccessTokenId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['personal_access_tokens',personalAccessTokenId], params, config);
    }

};

