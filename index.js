const Promise = require('bluebird');
Promise.config({longStackTraces: true, warnings: true})
const axios = require('axios');
const _ = require('lodash');
const {deepResolve, serializeAsFormData} = require('./util');


const GitLabUsersApi = require('./users');
const GitLabProjectsApi = require("./projects");


class GitLabApi {
    constructor(params) {
        this._token = _.get(params, 'token');
        this._api_base = _.get(params, 'api_base');
        this.users = new GitLabUsersApi(this);
        this.projects = new GitLabProjectsApi(this);
    }

    get api_base() {
        return this._api_base;
    }

    set api_base(api_base) {
        this._api_base = api_base;
    }

    set token(token) {
        this._token = token;
    }


    _get(url_slug, config) {
        let token = this._token;
        let api_base = this._api_base;

        if (_.isEmpty(config)) {
            config = {};
        }

        _.set(config, ['headers', 'PRIVATE-TOKEN'], token);

        let url = `${api_base}/${url_slug}`;

        return Promise.resolve(axios.get(url, config))
            .then(function (response) {
                return response.data;
            });
    }


    _delete(url_slug, config) {
        let token = this._token;
        let api_base = this._api_base;

        if (_.isEmpty(config)) {
            config = {};
        }

        _.set(config, ['headers', 'PRIVATE-TOKEN'], token);

        let url = `${api_base}/${url_slug}`;

        return Promise.resolve(axios.delete(url, config))
            .then(function (response) {
                return response.data;
            });
    }


    _post(url_slug, data, config) {
        let token = this._token;
        let api_base = this._api_base;

        if (_.isEmpty(config)) {
            config = {};
        }

        _.set(config, ['headers', 'PRIVATE-TOKEN'], token);

        let url = `${api_base}/${url_slug}`;

        return deepResolve(data)
            .then(function (resolvedData) {
                return serializeAsFormData(resolvedData);
            })
            .then(function (serializedData) {
                _.set(config, 'headers', _.assign({}, _.get(config, 'headers', {}), serializedData.getHeaders()));
                return Promise.resolve(axios.post(url, serializedData, config));
            })
            .then(function (response) {
                return response.data;
            });
    }

    _put(url_slug, data, config) {
        let token = this._token;
        let api_base = this._api_base;

        if (_.isEmpty(config)) {
            config = {};
        }

        _.set(config, ['headers', 'PRIVATE-TOKEN'], token);

        let url = `${api_base}/${url_slug}`;

        return deepResolve(data)
            .then(function (resolvedData) {
                return serializeAsFormData(resolvedData);
            })
            .then(function (serializedData) {
                _.set(config, 'headers', _.assign({}, _.get(config, 'headers', {}), serializedData.getHeaders()));
                return Promise.resolve(axios.put(url, serializedData, config));
            })
            .then(function (response) {
                return response.data;
            });
    }


}


module.exports = GitLabApi;