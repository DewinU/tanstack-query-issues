import { FiRefreshCcw } from 'react-icons/fi';
import { useLabels } from '../hooks';
import { LabelsSkeleton } from './LabelsSkeleton';

export const LabelPicker = () => {
  const { labelsQuery } = useLabels();

  if (labelsQuery.isLoading) {
    return (
      // <div className="flex justify-center h-52">
      //   <FiRefreshCcw className="animate-spin" size={50} />
      // </div>
      <LabelsSkeleton />
    );
  }

  if (labelsQuery.isError) {
    return (
      <div className="flex justify-center h-52">Error fetching labels</div>
    );
  }

  if (!labelsQuery.data) {
    return <div className="flex justify-center h-52">No data</div>;
  }

  return (
    <div className="flex flex-wrap gap-2">
      {labelsQuery.data.map((label) => (
        <span
          key={label.id}
          className="animate-fadeIn px-2 py-1 rounded-full text-xs font-semibold hover:bg-slate-800 cursor-pointer"
          style={{ border: `1px solid #${label.color}` }}
        >
          {label.name}
        </span>
      ))}
    </div>
  );
};
