import { useQuery } from '@tanstack/react-query';
import { getGithubLabels } from '../actions';
// import { GithubLabel } from '../interfaces';

export const useLabels = () => {
  const labelsQuery = useQuery({
    queryKey: ['labels'],
    queryFn: getGithubLabels,
    staleTime: 1000 * 60 * 60, // 1 hour
    // placeholderData: [
    //   {
    //     id: 69105383,
    //     node_id: 'MDU6TGFiZWw2OTEwNTM4Mw==',
    //     url: 'https://api.github.com/repos/facebook/react/labels/Browser:%20IE',
    //     name: 'Browser: IE',
    //     color: 'c7def8',
    //     default: false,
    //   } satisfies GithubLabel,
    // ],
  });

  return { labelsQuery };
};
