const Promise = require('bluebird');
Promise.config({longStackTraces: true, warnings: true})
const _ = require('lodash');
const fsPromises = require("fs/promises");
const path = require('path');
const GitLabProjectMergeRequestNotesApi = require('./project_merge_request_notes');


class GitLabProjectMergeRequestsApi {
    constructor(api) {
        this._api = api;
        this.notes = new GitLabProjectMergeRequestNotesApi(api);

    }

    /**
     *
     * @param project_id
     * @param params
     * @returns {*}
     * @link https://docs.gitlab.com/ee/api/merge_requests.html#list-project-merge-requests
     */
    list(project_id, params) {
        let api = this._api;

        if (_.isEmpty(params)) {
            params = {};
        }

        let config = {params: params}

        let url_slug = `projects/${project_id}/merge_requests`;
        return api._get(url_slug, config);
    }


    search_by_source_branch(project_id, source_branch) {
        return this.list(project_id, {source_branch: source_branch});
    }

    search_by_target_branch(project_id, target_branch) {
        return this.list(project_id, {target_branch: target_branch});
    }

    /**
     *
     * @param project_id
     * @param params
     * @returns {*}
     * @link https://docs.gitlab.com/ee/api/merge_requests.html#create-mr
     */
    create(project_id, params) {
        let api = this._api;

        if (_.isNil(params)){
            params = {};
        }

        let url_slug = `projects/${project_id}/merge_requests`;

        return api._post(url_slug, params)
    }

    /**
     *
     * @param project_id
     * @param merge_request_iid
     * @returns {*}
     * @link https://docs.gitlab.com/ee/api/merge_requests.html#get-single-mr
     */
    read(project_id, merge_request_iid) {
        let api = this._api;

        let url_slug = `projects/${project_id}/merge_requests/${merge_request_iid}`;
        return api._get(url_slug);
    }

    /**
     *
     * @param project_id
     * @param merge_request_iid
     * @param params
     * @returns {*}
     * @link https://docs.gitlab.com/ee/api/merge_requests.html#update-mr
     */
    update(project_id, merge_request_iid, params) {
        let api = this._api;

        let url_slug = `projects/${project_id}/merge_requests/${merge_request_iid}`;

        return api._put(url_slug, params);
    }

    /**
     *
     * @param project_id
     * @param merge_request_iid
     * @returns {*}
     * @link https://docs.gitlab.com/ee/api/merge_requests.html#delete-a-merge-request
     */
    delete(project_id, merge_request_iid) {
        let api = this._api;
        let url_slug = `projects/${project_id}/merge_requests/${merge_request_iid}`;

        return api._delete(url_slug);
    }

    delete_by_source_branch(project_id, source_branch) {
        let _this = this;
        return this.search_by_source_branch(project_id, source_branch)
            .then(function (results) {
                let item = _.find(results, {source_branch: source_branch});
                let iid = _.get(item, 'iid');
                if (_.isNil(iid)) {
                    throw new Error(`Could not find Project with name: ${name}`)
                }

                return _this.delete(project_id, iid);
            })
    }

    /**
     *
     * @param project_id
     * @param merge_request_iid
     * @param params
     * @returns {*}
     * @link https://docs.gitlab.com/ee/api/merge_requests.html#accept-mr
     */
    accept(project_id, merge_request_iid, params) {
        let api = this._api;
        let url_slug = `projects/${project_id}/merge_requests/${merge_request_iid}/merge`;

        return api._put(url_slug, params);
    }

    /**
     *
     * @param project_id
     * @param merge_request_iid
     * @param params
     * @returns {*}
     * @link https://docs.gitlab.com/ee/api/merge_requests.html#comments-on-merge-requests
     */
    rebase(project_id, merge_request_iid, params) {
        let api = this._api;
        let url_slug = `projects/${project_id}/merge_requests/${merge_request_iid}/rebase`;

        return api._put(url_slug, params);
    }

}

module.exports = GitLabProjectMergeRequestsApi;