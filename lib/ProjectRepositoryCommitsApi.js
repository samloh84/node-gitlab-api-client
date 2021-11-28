const _ = require('lodash');
module.exports = class ProjectRepositoryCommitsApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }


    list(projectId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'repository', 'commits'], params, config);
    }


    create(projectId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', projectId, 'repository', 'commits'], data, config);
    }


    read(projectId, sha, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'repository', 'commits', sha], params, config);
    }

    getRefs(projectId, sha, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'repository', 'commits', sha, 'refs'], params, config);
    }


    cherryPick(projectId, sha, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', projectId, 'repository', 'commits', sha, 'cherry_pick'], data, config);
    }


    revert(projectId, sha, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', projectId, 'repository', 'commits', sha, 'revert'], data, config);
    }

    getDiff(projectId, sha, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'repository', 'commits', sha, 'diff'], params, config);
    }

    listComments(projectId, sha, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'repository', 'commits', sha, 'comments'], params, config);
    }


    createComment(projectId, sha, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', projectId, 'repository', 'commits', sha, 'comments'], data, config);
    }

    listDiscussions(projectId, sha, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'repository', 'commits', sha, 'discussions'], params, config);
    }

    listStatuses(projectId, sha, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'repository', 'commits', sha, 'statuses'], params, config);
    }


    listMergeRequests(projectId, sha, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'repository', 'commits', sha, 'merge_requests'], params, config);
    }

    getGpgSignature(projectId, sha, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'repository', 'commits', sha, 'signature'], params, config);
    }

};

