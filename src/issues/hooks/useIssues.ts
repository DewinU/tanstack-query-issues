import { useQuery } from '@tanstack/react-query';
import { getGithubIssues } from '../actions';

export const useIssues = () => {
  const issuesQuery = useQuery({
    queryKey: ['issues'],
    queryFn: getGithubIssues,
    staleTime: 1000 * 60,
  });

  return { issuesQuery };
};
