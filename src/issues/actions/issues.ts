import { octokit } from '../../api/github.api';
import { sleep } from '../../helpers';

export const getGithubIssues = async () => {
  await sleep(1500);
  //   const { data } = await githubApi.get('/issues');
  const { data } = await octokit.rest.issues.listForRepo({
    owner: 'facebook',
    repo: 'react',
  });
  // console.log(data);

  return data;
};

export const getGithubIssue = async (issueNumber: number) => {
  await sleep(1500);

  const { data } = await octokit.rest.issues.get({
    owner: 'facebook',
    repo: 'react',
    issue_number: issueNumber,
  });

  return data;
};

export const getGithubIssueComments = async (issueNumber: number) => {
  await sleep(1500);

  const { data } = await octokit.rest.issues.listComments({
    owner: 'facebook',
    repo: 'react',
    issue_number: issueNumber,
  });

  return data;
};
