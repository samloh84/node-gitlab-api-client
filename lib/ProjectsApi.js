const _ = require('lodash');
const ProjectMergeRequestsApi = require("./ProjectMergeRequestsApi");
const ProjectMembersApi = require("./ProjectMembersApi");
const ProjectHooksApi = require("./ProjectHooksApi");
const ProjectProtectedBranchesApi = require("./ProjectProtectedBranchesApi");
const ProjectPushRulesApi = require("./ProjectPushRulesApi");
const ProjectRepositoryCommitsApi = require("./ProjectRepositoryCommitsApi");
const ProjectRepositoryBranchesApi = require("./ProjectRepositoryBranchesApi");
const ProjectMergeRequestApprovalConfigurationApi = require("./ProjectMergeRequestApprovalConfigurationApi");
const ProjectIssuesApi = require("./ProjectIssuesApi");
const ProjectVariablesApi = require("./ProjectVariablesApi");
const ProjectRepositorySubmodulesApi = require("./ProjectRepositorySubmodulesApi");
const ProjectRepositoryTagsApi = require("./ProjectRepositoryTagsApi");
const ProjectRepositoryTreeApi = require("./ProjectRepositoryTreeApi");
const ProjectPackagesApi = require("./ProjectPackagesApi");
const ProjectPipelineTriggersApi = require("./ProjectPipelineTriggersApi");
const ProjectPipelineSchedulesApi = require("./ProjectPipelineSchedulesApi");
const ProjectProtectedEnvironmentsApi = require("./ProjectProtectedEnvironmentsApi");
const ProjectPipelinesApi = require("./ProjectPipelinesApi");
const ProjectEnvironmentsApi = require("./ProjectEnvironmentsApi");
const ProjectSnippetsApi = require("./ProjectSnippetsApi");
module.exports = class ProjectsApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
        this.mergeRequests = new ProjectMergeRequestsApi(apiClient);
        this.members = new ProjectMembersApi(apiClient);
        this.hooks = new ProjectHooksApi(apiClient);
        this.protectedBranches = new ProjectProtectedBranchesApi(apiClient);
        this.pushRules = new ProjectPushRulesApi(apiClient);
        this.repositoryCommits = new ProjectRepositoryCommitsApi(apiClient);
        this.repositoryBranches = new ProjectRepositoryBranchesApi(apiClient);
        this.repositorySubmodules = new ProjectRepositorySubmodulesApi(apiClient);
        this.repositoryTags = new ProjectRepositoryTagsApi(apiClient);
        this.repositoryTree = new ProjectRepositoryTreeApi(apiClient);
        this.mergeRequestApprovalConfiguration = new ProjectMergeRequestApprovalConfigurationApi(apiClient);
        this.issues = new ProjectIssuesApi(apiClient);
        this.variables = new ProjectVariablesApi(apiClient);
        this.packages = new ProjectPackagesApi(apiClient);
        this.protectedEnvironments = new ProjectProtectedEnvironmentsApi(apiClient)
        this.pipelineSchedules = new ProjectPipelineSchedulesApi(apiClient);
        this.pipelineTriggers = new ProjectPipelineTriggersApi(apiClient);
        this.pipelines = new ProjectPipelinesApi(apiClient);
        this.environments = new ProjectEnvironmentsApi(apiClient);
        this.snippets = new ProjectSnippetsApi(apiClient);
    }


    list(params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects'], params, config);
    }

    read(projectId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId], params, config);
    }

    listUsers(projectId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'users'], params, config);
    }


    listGroups(projectId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'groups'], params, config);
    }

    listEvents(projectId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'events'], params, config);
    }


    create(data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects'], data, config);
    }


    createUserProject(userId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', 'user', userId], data, config);
    }


    update(projectId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['projects', projectId], data, config);
    }

    fork(projectId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['projects', projectId, 'fork'], data, config);
    }

    listForks(projectId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'forks'], params, config);
    }


    star(projectId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', projectId, 'star'], data, config);
    }

    unstar(projectId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', projectId, 'unstar'], data, config);
    }


    listStarrers(projectId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'starrers'], params, config);
    }


    listLanguages(projectId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'languages'], params, config);
    }


    archive(projectId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', projectId, 'archive'], data, config);
    }

    unarchive(projectId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', projectId, 'unarchive'], data, config);
    }


    delete(projectId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['projects', projectId], params, config);
    }


    restore(projectId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', projectId, 'restore'], data, config);
    }

    uploadFile(projectId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        if (_.isNil(config)) {
            config = {};
        }
        _.set(config, ['headers', 'Content-Type'], 'multipart/form-data')
        return apiClient._post(['projects', projectId, 'uploads'], data, config);
    }

    uploadAvatar(projectId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        if (_.isNil(config)) {
            config = {};
        }
        _.set(config, ['headers', 'Content-Type'], 'multipart/form-data')
        return apiClient._put(['projects', projectId], data, config);
    }

    share(projectId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', projectId, 'share'], data, config);
    }

    deleteLinkSharing(projectId, groupId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['projects', projectId, 'share', groupId], params, config);
    }

    importProjectMembers(projectId, otherProjectId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', projectId, 'import_project_members', otherProjectId], data, config);
    }


    createForkedFromRelation(projectId, otherProjectId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', projectId, 'fork', otherProjectId], data, config);
    }

    deleteForkedFromRelationship(projectId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['projects', projectId, 'fork'], params, config);
    }

    startHousekeeping(projectId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', projectId, 'housekeeping'], data, config);
    }

    transfer(projectId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['projects', projectId, 'transfer'], data, config);
    }

    startPullMirroring(projectId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', projectId, 'mirror', 'pull'], data, config);
    }

    adminDownloadSnapshot(projectId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', projectId, 'snapshot'], params, config);
    }


    adminGetRepositoryStorage(projectId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', projectId, 'storage'], params, config);
    }


    deleteMergedBranches(projectId, branch, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['projects', projectId, 'repository', 'merged_branches'], params, config);
    }

    scheduleExport(projectId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', projectId, 'export'], data, config);
    }

    getExportStatus(projectId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'export'], params, config);
    }

    downloadExport(projectId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'export', 'download'], params, config);
    }

    import(data, config) {
        let api = this;
        let apiClient = api._apiClient;
        if (_.isNil(config)) {
            config = {};
        }
        _.set(config, ['headers', 'Content-Type'], 'multipart/form-data')
        return apiClient._post(['projects', 'import'], data, config);
    }

    remoteImport(data, config) {
        let api = this;
        let apiClient = api._apiClient;
        if (_.isNil(config)) {
            config = {};
        }
        _.set(config, ['headers', 'Content-Type'], 'multipart/form-data')
        return apiClient._post(['projects', 'remote-import'], data, config);
    }

    getImportStatus(projectId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['projects', projectId, 'import'], params, config);
    }

    updateRepositoryCommitBuildStatus(projectId, sha, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['projects', projectId, 'statuses', sha], data, config);
    }


};

