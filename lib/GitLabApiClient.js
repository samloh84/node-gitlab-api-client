const _ = require('lodash');
const {ApiClient} = require('@samloh84/api-client-base');
const GroupsApi = require("./GroupsApi");
const IssuesApi = require("./IssuesApi");
const UsersApi = require("./UsersApi");
const UserApi = require("./UserApi");
const ProjectsApi = require("./ProjectsApi");
const PersonalAccessTokensApi = require("./PersonalAccessTokensApi");
const MergeRequestsApi = require("./MergeRequestsApi");
const TodosApi = require("./TodosApi");
const SnippetsApi = require("./SnippetsApi");

module.exports = class GitLabApiClient extends ApiClient {
    constructor(params) {

        let privateToken = _.get(params, 'privateToken');

        if (!_.isNil(privateToken)) {
            _.set(params, ['authHeaders'], {'PRIVATE-TOKEN': privateToken});
        }

        _.defaults(params, {
            baseUrl: 'https://gitlab.com/api/v4/',
        });
        super(params);

        let apiClient = this;
        this.groups = new GroupsApi(apiClient);
        this.issues = new IssuesApi(apiClient);
        this.users = new UsersApi(apiClient);
        this.user = new UserApi(apiClient);
        this.projects = new ProjectsApi(apiClient);
        this.mergeRequests = new MergeRequestsApi(apiClient);
        this.personalAccessTokens = new PersonalAccessTokensApi(apiClient);
        this.todos = new TodosApi(apiClient);
        this.snippets = new SnippetsApi(apiClient);
    }


}

