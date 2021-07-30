const Promise = require('bluebird');
Promise.config({longStackTraces: true, warnings: true})
const _ = require('lodash');
const fsPromises = require("fs/promises");
const path = require('path');

class GitLabProjectMergeRequestNotesApi {
    constructor(api) {
        this._api = api;
    }

    list(project_id, merge_request_iid, params) {
        let api = this._api;

        if (_.isEmpty(params)) {
            params = {};
        }

        let config = {params: params}

        let url_slug = `projects/${project_id}/merge_requests/${merge_request_iid}/notes`;
        return api._get(url_slug, config);
    }


    create(project_id, merge_request_iid, params) {
        let api = this._api;

        if (_.isNil(params)){
            params = {};
        }

        let url_slug = `projects/${project_id}/merge_requests/${merge_request_iid}/notes`;

        return api._post(url_slug, params)
    }


    read(project_id, merge_request_iid, note_id) {
        let api = this._api;

        let url_slug = `projects/${project_id}/merge_requests/${merge_request_iid}/notes/${note_id}`;

        return api._get(url_slug);
    }

    update(project_id, merge_request_iid, note_id,params) {
        let api = this._api;

        let url_slug = `projects/${project_id}/merge_requests/${merge_request_iid}/notes/${note_id}`;

        return api._put(url_slug, params);
    }

    delete(project_id, merge_request_iid, note_id) {
        let api = this._api;
        let url_slug = `projects/${project_id}/merge_requests/${merge_request_iid}/notes/${note_id}`;

        return api._delete(url_slug);
    }

}

module.exports = GitLabProjectMergeRequestNotesApi;