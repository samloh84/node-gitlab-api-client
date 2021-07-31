const Promise = require('bluebird');
Promise.config({longStackTraces: true, warnings: true})
const _ = require('lodash');
const fsPromises = require("fs/promises");
const path = require('path');


class GitLabProjectVariablesApi {
    constructor(api) {
        this._api = api;

    }

    list(project_id) {
        let api = this._api;

        let url_slug = `projects/${project_id}/variables`;
        return api._get(url_slug);
    }

    create(project_id, params) {
        let api = this._api;

        if (_.isNil(params)){
            params = {};
        }

        let url_slug = `projects/${project_id}/variables`;

        return api._post(url_slug, params)
    }

    read(project_id, key) {
        let api = this._api;

        let url_slug = `projects/${project_id}/variables/${key}`;
        return api._get(url_slug);
    }

    
    update(project_id, key, params) {
        let api = this._api;

        let url_slug = `projects/${project_id}/variables/${key}`;

        return api._put(url_slug, params);
    }

    delete(project_id, key) {
        let api = this._api;
        let url_slug = `projects/${project_id}/variables/${key}`;

        return api._delete(url_slug);
    }


}

module.exports = GitLabProjectVariablesApi;