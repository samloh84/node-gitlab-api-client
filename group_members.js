const Promise = require('bluebird');
Promise.config({longStackTraces: true, warnings: true})
const _ = require('lodash');
const fsPromises = require("fs/promises");
const path = require('path');


class GitLabGroupMembersApi {
    constructor(api) {
        this._api = api;

    }

    /**
     *
     * @param group_id
     * @param params
     * @returns {*}
     * @link https://docs.gitlab.com/ee/api/members.html#list-all-members-of-a-group-or-project
     */
    list(group_id, params) {
        let api = this._api;

        if (_.isEmpty(params)) {
            params = {};
        }

        let config = {params: params}

        let url_slug = `groups/${group_id}/members`;
        return api._get(url_slug, config);
    }

    /**
     *
     * @param group_id
     * @param params
     * @returns {*}
     * @link https://docs.gitlab.com/ee/api/members.html#list-all-members-of-a-group-or-project-including-inherited-members
     */
    listAll(group_id, params){
        let api = this._api;

        if (_.isEmpty(params)) {
            params = {};
        }

        let config = {params: params}

        let url_slug = `groups/${group_id}/members/all`;
        return api._get(url_slug, config);
    }


    /**
     *
     * @param group_id
     * @param params
     * @returns {*}
     * @link https://docs.gitlab.com/ee/api/members.html#add-a-member-to-a-group-or-project
     */
    create(group_id, params) {
        let api = this._api;

        if (_.isNil(params)){
            params = {};
        }

        let url_slug = `groups/${group_id}/members`;

        return api._post(url_slug, params)
    }

    /**
     *
     * @param group_id
     * @param user_id
     * @returns {*}
     * @link https://docs.gitlab.com/ee/api/members.html#get-a-member-of-a-group-or-project
     */
    read(group_id, user_id) {
        let api = this._api;

        let url_slug = `groups/${group_id}/members/${user_id}`;
        return api._get(url_slug);
    }

    /**
     *
     * @param group_id
     * @param user_id
     * @param params
     * @returns {*}
     * @link https://docs.gitlab.com/ee/api/members.html#edit-a-member-of-a-group-or-project
     */
    update(group_id, user_id, params) {
        let api = this._api;

        let url_slug = `groups/${group_id}/members/${user_id}`;

        return api._put(url_slug, params);
    }

    /**
     *
     * @param group_id
     * @param user_id
     * @returns {*}
     * @link https://docs.gitlab.com/ee/api/members.html#remove-a-member-from-a-group-or-project
     */
    delete(group_id, user_id) {
        let api = this._api;
        let url_slug = `groups/${group_id}/members/${user_id}`;

        return api._delete(url_slug);
    }


}

module.exports = GitLabGroupMembersApi;