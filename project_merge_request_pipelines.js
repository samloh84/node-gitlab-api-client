const Promise = require('bluebird');
Promise.config({longStackTraces: true, warnings: true})
const _ = require('lodash');
const fsPromises = require("fs/promises");
const path = require('path');

class GitLabProjectMergeRequestPipelinesApi {
    constructor(api) {
        this._api = api;
    }

    list(project_id, merge_request_iid, params) {
        let api = this._api;

        if (_.isEmpty(params)) {
            params = {};
        }

        let config = {params: params}

        let url_slug = `projects/${project_id}/merge_requests/${merge_request_iid}/pipelines`;
        return api._get(url_slug, config);
    }


    create(project_id, merge_request_iid, params) {
        let api = this._api;

        if (_.isNil(params)){
            params = {};
        }

        let url_slug = `projects/${project_id}/merge_requests/${merge_request_iid}/pipelines`;

        return api._post(url_slug, params)
    }


}

module.exports = GitLabProjectMergeRequestPipelinesApi;