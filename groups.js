const Promise = require('bluebird');
Promise.config({longStackTraces: true, warnings: true})
const _ = require('lodash');
const fsPromises = require("fs/promises");
const path = require('path');

const GitLabGroupMembersApi = require("./group_members");

class GitLabGroupsApi {
    constructor(api) {
        this._api = api;
        this.members = new GitLabGroupMembersApi(api);
    }

    list(params) {
        let api = this._api;

        if (_.isEmpty(params)) {
            params = {};
        }

        let config = {params: params}

        let url_slug = "groups";
        return api._get(url_slug, config);
    }


    search_by_name(name) {
        return this.list({name: name});
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

        let url_slug = "groups";

        return api._post(url_slug, params)
    }


    read(group_id) {
        let api = this._api;

        let url_slug = `groups/${group_id}`;
        return api._get(url_slug);
    }

    update(group_id, params) {
        let api = this._api;

        let avatar = _.get(params, 'avatar');
        if (!_.isEmpty(avatar)) {
            avatar = path.resolve(process.cwd(), avatar);
            _.set(params, 'avatar', Promise.resolve(fsPromises.readFile(avatar)));
        }

        let url_slug = `groups/${group_id}`;

        return api._put(url_slug, params);
    }

    delete(group_id) {
        let api = this._api;
        let url_slug = `groups/${group_id}`;

        return api._delete(url_slug);
    }

    delete_by_name(name) {
        let _this = this;
        return this.search_by_name(name)
            .then(function (results) {
                let item = _.find(results, {name: name});
                let id = _.get(item, 'id');
                if (_.isNil(id)) {
                    throw new Error(`Could not find Group with name: ${name}`)
                }

                return _this.delete(id);
            })
    }


}

module.exports = GitLabGroupsApi;