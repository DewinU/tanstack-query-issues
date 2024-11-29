import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { getGithubIssues } from '../actions';

interface Props {
  state: 'all' | 'open' | 'closed';
  labels: string[];
}

export const useIssuesInfinite = ({ state, labels }: Props) => {
  const issuesQuery = useInfiniteQuery({
    queryKey: ['issues', 'infinite', { state, labels }],
    queryFn: ({ pageParam, queryKey }) => {
      const { state, labels } = queryKey[2] as Props;
      return getGithubIssues(state, labels, pageParam);
    },
    staleTime: 1000 * 60,
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) =>
      lastPage.length > 0 ? pages.length + 1 : undefined,
  });

  return {
    issuesQuery,
  };
};
