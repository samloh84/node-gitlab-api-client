const Promise = require('bluebird');
Promise.config({longStackTraces: true, warnings: true})
const _ = require('lodash');
const fsPromises = require("fs/promises");
const path = require('path');

const GitLabUserImpersonationTokensApi = require('./user_impersonation_tokens');

class GitLabUsersApi {
    constructor(api) {
        this._api = api;
        this.impersonationTokens = new GitLabUserImpersonationTokensApi(api);
    }


    list(params) {
        let api = this._api;

        if (_.isEmpty(params)) {
            params = {};
        }

        let config = {params: params}

        let url_slug = "users";
        return api._get(url_slug, config);
    }


    search_by_username(username) {
        return this.list({username: username});
    }

    create(params) {
        let api = this._api;

        if (_.isNil(params)){
            params = {};
        }

        let avatar = _.get(params, 'avatar');
        if (!_.isEmpty(avatar)) {
            avatar = path.resolve(process.cwd(), avatar);
            _.set(params, 'avatar', Promise.resolve(fsPromises.readFile(avatar)));
        }

        let url_slug = "users";

        return api._post(url_slug, params)
    }


    read(user_id) {
        let api = this._api;

        let url_slug = `users/${user_id}`;
        return api._get(url_slug);
    }

    update(user_id, params) {
        let api = this._api;

        let avatar = _.get(params, 'avatar');
        if (!_.isEmpty(avatar)) {
            avatar = path.resolve(process.cwd(), avatar);
            _.set(params, 'avatar', Promise.resolve(fsPromises.readFile(avatar)));
        }

        let url_slug = `users/${user_id}`;

        return api._put(url_slug, params);
    }

    delete(user_id) {
        let api = this._api;
        let url_slug = `users/${user_id}`;

        return api._delete(url_slug);
    }

    delete_by_username(username) {
        let _this = this;
        return this.search_by_username(username)
            .then(function (results) {
                let item = _.find(results, {username: username});
                let id = _.get(item, 'id');
                if (_.isNil(id)) {
                    throw new Error(`Could not find User with username: ${username}`)
                }
                return _this.delete(id);
            })
    }


}

module.exports = GitLabUsersApi;