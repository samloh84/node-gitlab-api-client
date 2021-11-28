const _ = require('lodash');
module.exports = class UserApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }


    read(params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['user'], params, config);
    }

    getStatus(params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['user', 'status'], params, config);
    }

    listPreferences(params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['user', 'preferences'], params, config);
    }

    updatePreferences(data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['user', 'preferences'], data, config);
    }

    updateStatus(data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['user', 'status'], data, config);
    }

    getUserCounts(params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['user_counts'], params, config);
    }


    listSshKeys(params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['user', 'keys'], params, config);
    }

    getSshKey(sshKeyId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['user', 'keys', sshKeyId], params, config);
    }

    createSshKey(data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['user', 'keys'], data, config);
    }

    deleteSshKey(sshKeyId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['user', 'keys', sshKeyId], params, config);
    }


    listGpgKeys(params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['user', 'gpg_keys'], params, config);
    }

    getGpgKey(gpgKeyId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['user', 'gpg_keys', gpgKeyId], params, config);
    }

    createGpgKey(data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['user', 'gpg_keys'], data, config);
    }

    deleteGpgKey(gpgKeyId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['user', 'gpg_keys', gpgKeyId], params, config);
    }


    listEmails(params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['user', 'emails'], params, config);
    }

    getEmail(emailId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['user', 'emails', emailId], params, config);
    }


    addEmail(data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['user', 'emails'], data, config);
    }

    deleteEmail(emailId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['user', 'emails', emailId], params, config);
    }

    listActivities(params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['user', 'activities'], params, config);
    }
};

