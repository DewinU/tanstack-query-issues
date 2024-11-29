import { useQuery } from '@tanstack/react-query';
import { getGithubIssues } from '../actions';
import { useEffect, useState } from 'react';

interface Props {
  state: 'all' | 'open' | 'closed';
  labels: string[];
}

export const useIssues = ({ state, labels }: Props) => {
  const [page, setPage] = useState(1);

  const issuesQuery = useQuery({
    queryKey: ['issues', { state, labels, page }],
    queryFn: () => getGithubIssues(state, labels, page),
    staleTime: 1000 * 60,
  });

  useEffect(() => {
    setPage(1);
  }, [state]);

  useEffect(() => {
    setPage(1);
  }, [labels]);

  const nextPage = () => {
    if (issuesQuery.data?.length === 5) {
      setPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  return {
    issuesQuery,
    page,
    //Add the fetchNextPage and fetchPreviousPage functions to the return object
    nextPage,
    prevPage,
  };
};
