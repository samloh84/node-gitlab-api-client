const _ = require('lodash');
module.exports = class GroupMembersApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }


    list(groupId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['groups', groupId, 'members'], params, config);
    }

    listAll(groupId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['groups', groupId, 'members', 'all'], params, config);
    }

    read(groupId, userId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['groups', groupId, 'members', userId], params, config);
    }

    readAll(groupId, userId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['groups', groupId, 'members', 'all', userId], params, config);
    }

    add(groupId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['groups', groupId, 'members'], data, config);
    }


    update(groupId, userId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['groups', groupId, 'members', userId], data, config);
    }


    remove(groupId, userId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['groups', groupId, 'members', userId], params, config);
    }


    listBillableMembers(groupId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['groups', groupId, 'billable_members'], params, config);
    }

    listBillableMemberMemberships(groupId, userId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['groups', groupId, 'billable_members', userId, 'memberships'], params, config);
    }


    removeBillableMember(groupId, userId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['groups', groupId, 'billable_members', userId], params, config);
    }

    setOverrideFlag(groupId, userId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['groups', groupId, 'members', userId, 'override'], data, config);
    }


    removeOverrideFlag(groupId, userId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['groups', groupId, 'members', userId, 'override'], data, config);
    }

    approve(groupId, userId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['groups', groupId, 'members', userId, 'approve'], data, config);
    }

    approveAll(groupId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['groups', groupId, 'members', 'approve_all'], data, config);
    }


};

