import { useQuery } from '@tanstack/react-query';
import { getGithubIssues } from '../actions';

interface Props {
  state: 'all' | 'open' | 'closed';
  labels: string[];
}

export const useIssues = ({ state, labels }: Props) => {
  const issuesQuery = useQuery({
    queryKey: ['issues', { state, labels }],
    queryFn: () => getGithubIssues(state, labels),
    staleTime: 1000 * 60,
  });

  return { issuesQuery };
};
