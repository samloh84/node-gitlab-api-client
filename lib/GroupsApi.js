const _ = require('lodash');
const GroupHooksApi = require("./GroupHooksApi");
const GroupMembersApi = require("./GroupMembersApi");
const GroupPushRulesApi = require("./GroupPushRulesApi");
const GroupIssuesApi = require("./GroupIssuesApi");
const GroupVariablesApi = require("./GroupVariablesApi");
const GroupProtectedEnvironmentsApi = require("./GroupProtectedEnvironmentsApi");
module.exports = class GroupsApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
        this.pushRules = new GroupPushRulesApi(apiClient);
        this.members = new GroupMembersApi(apiClient);
        this.hooks = new GroupHooksApi(apiClient);
        this.issues = new GroupIssuesApi(apiClient);
        this.variables = new GroupVariablesApi(apiClient);
        this.protectedEnvironments = new GroupProtectedEnvironmentsApi(apiClient);
    }

    list(params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['groups'], params, config);
    }

    listSubgroups(groupId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['groups', groupId, 'subgroups'], params, config);
    }


    listDescendantGroups(groupId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['groups', groupId, 'descendant_groups'], params, config);
    }

    listProjects(groupId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['groups', groupId, 'projects'], params, config);
    }

    listSharedProjects(groupId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['groups', groupId, 'projects', 'shared'], params, config);
    }


    read(groupId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['groups', groupId], params, config);
    }


    downloadAvatar(groupId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['groups', groupId, 'avatar'], params, config);
    }


    create(data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['groups'], data, config);
    }


    adminTransferProject(groupId, projectId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['groups', groupId, 'projects', projectId], data, config);
    }


    update(groupId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['groups', groupId], data, config);
    }

    uploadAvatar(groupId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        if (_.isNil(config)) {
            config = {};
        }
        _.set(config, ['headers', 'Content-Type'], 'multipart/form-data')
        return apiClient._put(['groups', groupId, 'avatar'], data, config);
    }

    delete(groupId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['groups', groupId], params, config);
    }

    restore(groupId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['groups', groupId, 'restore'], data, config);
    }


    listHooks(groupId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['groups', groupId, 'hooks'], params, config);
    }

    getHook(groupId, hookId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['groups', groupId, 'hooks', hookId], params, config);
    }

    createHook(groupId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['groups', groupId, 'hooks'], data, config);
    }


    updateHook(groupId, hookId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['groups', groupId, 'hooks', hookId], data, config);
    }


    deleteHook(groupId, hookId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['groups', groupId, 'hooks', hookId], params, config);
    }


    ldapSync(groupId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['groups', groupId, 'ldap_sync'], data, config);
    }


    listLdapGroupLinks(groupId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['groups', groupId, 'ldap_group_links'], params, config);
    }


    addLdapGroupLink(groupId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['groups', groupId, 'ldap_group_links'], data, config);
    }

    deleteLdapGroupLink(groupId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['groups', groupId, 'ldap_group_links'], params, config);
    }


    share(groupId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['groups', groupId, 'share'], data, config);
    }


    deleteLinkSharing(groupId, otherGroupId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['groups', groupId, 'share', otherGroupId], params, config);
    }


    listMergeRequests(groupId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['groups', groupId, 'merge_requests'], params, config);
    }


};

