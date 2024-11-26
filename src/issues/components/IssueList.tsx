import { FC } from 'react';
import { IssueItem } from './IssueItem';
import { components } from '@octokit/openapi-types';

type Issue = components['schemas']['issue'];

interface Props {
  issues: Issue[];
}

export const IssueList: FC<Props> = ({ issues }) => {
  return (
    <>
      {/* Lista de issues */}
      <div className="mt-4">
        {issues.map((issue) => (
          <IssueItem key={issue.id} issue={issue} />
        ))}
      </div>
    </>
  );
};
