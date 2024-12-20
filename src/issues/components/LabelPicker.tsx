// import { FiRefreshCcw } from 'react-icons/fi';
import { FC } from 'react';
import { useLabels } from '../hooks';
import { LabelPickerSkeleton } from './LabelPickerSkeleton';

interface Props {
  selectedLabels: string[];
  onSelectLabel: (label: string) => void;
}

export const LabelPicker: FC<Props> = ({ selectedLabels, onSelectLabel }) => {
  const { labelsQuery } = useLabels();

  if (labelsQuery.isLoading) {
    return (
      // <div className="flex justify-center h-52">
      //   <FiRefreshCcw className="animate-spin" size={50} />
      // </div>
      <LabelPickerSkeleton />
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
    <div className="flex flex-wrap gap-2 justify-center">
      {labelsQuery.data.map((label) => (
        <span
          onClick={() => onSelectLabel(label.name)}
          key={label.id}
          className={`animate-fadeIn px-2 py-1 rounded-full text-xs font-semibold hover:bg-slate-800 cursor-pointer ${
            selectedLabels.includes(label.name) ? 'selected-label' : ''
          }`}
          style={{ border: `1px solid #${label.color}` }}
        >
          {label.name}
        </span>
      ))}
    </div>
  );
};
