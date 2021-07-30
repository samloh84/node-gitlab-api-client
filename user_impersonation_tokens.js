const Promise = require('bluebird');
Promise.config({longStackTraces: true, warnings: true})
const _ = require('lodash');
const {nanoid} = require('nanoid');

class GitLabUserImpersonationTokensApi {
    constructor(api) {
        this._api = api;
    }


    list(user_id) {
        let api = this._api;

        let url_slug = `users/${user_id}/impersonation_tokens`;

        return api._get(url_slug);
    }

    create(user_id, params) {
        let api = this._api;

        if (_.isNil(params)){
            params = {};
        }

        let name = _.get(params, 'name');
        if (_.isEmpty(name)) {
            name = nanoid();
            _.set(params, 'name', name);
        }

        let scopes = _.get(params, 'scopes');
        if (_.isEmpty(scopes)) {
            scopes = ['api', 'read_user']
            _.set(params, 'scopes', scopes);
        }

        let url_slug = `users/${user_id}/impersonation_tokens`;

        return api._post(url_slug, params);
    }

    search(user_id, params) {
        let api = this._api;

        let config = {params: params}

        let url_slug = `users/${user_id}/impersonation_tokens`;

        return api._get(url_slug, config)
            .then(function (tokens) {
                return _.filter(tokens, params)
            })
    }

    search_by_name(user_id, name) {
        return this.search(user_id, {name: name});
    }

    read(user_id, impersonation_token_id) {
        let api = this._api;

        let url_slug = `users/${user_id}/impersonation_tokens/${impersonation_token_id}`;
        return api._get(url_slug);
    }

    delete(user_id, impersonation_token_id) {
        let api = this._api;

        let url_slug = `users/${user_id}/impersonation_tokens/${impersonation_token_id}`;
        return api._delete(url_slug);
    }

    delete_by_name(user_id, name) {
        let _this = this;
        return this.search_by_name(user_id, name)
            .then(function (results) {
                let item = _.find(results, {name: name});
                let id = _.get(item, 'id');
                return _this.delete(id);
            })
    }


}

module.exports = GitLabUserImpersonationTokensApi;