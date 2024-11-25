import { useQuery } from '@tanstack/react-query';
import { getGithubIssue, getGithubIssueComments } from '../actions';

export const useIssue = (issueNumber: number) => {
  const issueQuery = useQuery({
    queryKey: ['issues', issueNumber],
    queryFn: () => getGithubIssue(issueNumber),
    staleTime: 1000 * 60,
    retry: false,
  });

  const commentsQuery = useQuery({
    queryKey: ['issues', issueNumber, 'comments'],
    queryFn: () => getGithubIssueComments(issueNumber),
    staleTime: 1000 * 60,
    retry: false,
  });

  return { issueQuery, commentsQuery };
};
