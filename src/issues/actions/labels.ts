import { octokit } from '../../api/github.api';
import { sleep } from '../../helpers';

export const getGithubLabels = async () => {
  await sleep(1500);
  // const { data } = await githubApi.get<GithubLabel[]>('/labels');
  const { data } = await octokit.rest.issues.listLabelsForRepo({
    owner: 'facebook',
    repo: 'react',
  });
  // console.log(data);
  return data;
};
