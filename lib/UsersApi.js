const _ = require('lodash');
module.exports = class UsersApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }

    list(params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['users'], params, config);
    }

    read(userId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['users', userId], params, config);
    }

    create(data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['users'], data, config);
    }

    update(userId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['users', userId], data, config);
    }

    deleteAuthenticationIdentity(userId, provider, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['users', userId, provider], params, config);
    }

    delete(userId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['users', userId], params, config);
    }

    follow(userId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['users', userId, 'follow'], data, config);
    }

    unfollow(userId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['users', userId, 'unfollow'], data, config);
    }

    listFollowers(userId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['users', userId, 'followers'], params, config);
    }

    listFollowing(userId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['users', userId, 'following'], params, config);
    }

    listProjects(userId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['users', userId, 'projects'], params, config);
    }

    listSshKeys(userId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['users', userId, 'keys'], params, config);
    }

    createSshKey(userId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['users', userId, 'keys'], data, config);
    }

    deleteSshKey(userId, sshKeyId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['users', userId, 'keys', sshKeyId], params, config);
    }

    listGpgKeys(userId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['users', userId, 'gpg_keys'], params, config);
    }

    getGpgKey(userId, gpgKeyId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['users', userId, 'gpg_keys', gpgKeyId], params, config);
    }

    createGpgKey(userId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['users', userId, 'gpg_keys'], data, config);
    }

    deleteGpgKey(userId, gpgKeyId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['users', userId, 'gpg_keys', gpgKeyId], params, config);
    }

    listEmails(userId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['users', userId, 'emails'], params, config);
    }


    addEmail(userId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['users', userId, 'emails'], data, config);
    }

    deleteEmail(userId, emailId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['users', userId, 'emails', emailId], params, config);
    }

    block(userId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['users', userId, 'block'], data, config);
    }

    unblock(userId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['users', userId, 'block'], data, config);
    }

    deactivate(userId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['users', userId, 'deactivate'], data, config);
    }

    activate(userId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['users', userId, 'activate'], data, config);
    }

    ban(userId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['users', userId, 'ban'], data, config);
    }

    unban(userId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['users', userId, 'unban'], data, config);
    }

    approve(userId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['users', userId, 'approve'], data, config);
    }

    reject(userId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['users', userId, 'reject'], data, config);
    }


    listImpersonationTokens(userId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['users', userId, 'impersonation_tokens'], params, config);
    }

    getImpersonationToken(userId, impersonationTokenId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['users', userId, 'impersonation_tokens', impersonationTokenId], params, config);
    }

    createImpersonationToken(userId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['users', userId, 'impersonation_tokens'], data, config);
    }

    revokeImpersonationToken(userId, impersonationTokenId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['users', userId, 'impersonation_tokens', impersonationTokenId], params, config);
    }


    createPersonalAccessToken(userId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['users', userId, 'personal_access_tokens'], data, config);
    }


    listMemberships(userId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['users', userId, 'memberships'], params, config);
    }

};

