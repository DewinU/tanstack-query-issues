import { useState } from 'react';
import { IssueList } from '../components/IssueList';
import { IssueListSkeleton } from '../components/IssueListSkeleton';
import { LabelPicker } from '../components/LabelPicker';
import { useIssues } from '../hooks';

export const ListView = () => {
  const [state, setState] = useState<'all' | 'open' | 'closed'>('all');
  const [labels, setLabels] = useState<string[]>([]);
  const { issuesQuery } = useIssues({
    state,
    labels,
  });

  const onSelectLabel = (label: string) => {
    if (labels.includes(label)) {
      setLabels(labels.filter((l) => l !== label));
    } else {
      setLabels([...labels, label]);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 mt-5">
      <div className="col-span-1 sm:col-span-2">
        <div className="flex gap-4">
          <button
            onClick={() => setState('all')}
            className={`btn ${state === 'all' ? 'active' : ''} `}
          >
            All
          </button>
          <button
            onClick={() => setState('open')}
            className={`btn ${state === 'open' ? 'active' : ''} `}
          >
            Open
          </button>
          <button
            onClick={() => setState('closed')}
            className={`btn ${state === 'closed' ? 'active' : ''} `}
          >
            Closed
          </button>
        </div>
        {issuesQuery.isError && <div>Error fetching issues</div>}
        {issuesQuery.isLoading ? (
          <IssueListSkeleton />
        ) : (
          <IssueList issues={issuesQuery.data ?? []} />
        )}
      </div>

      <div className="col-span-1 px-2">
        <LabelPicker onSelectLabel={onSelectLabel} selectedLabels={labels} />
      </div>
    </div>
  );
};
