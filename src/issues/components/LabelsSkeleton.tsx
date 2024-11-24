export const LabelsSkeleton = () => {
  const sizes = ['w-24', 'w-32', 'w-40', 'w-48', 'w-56', 'w-64'];

  return (
    <div className="flex flex-wrap gap-2">
      {[...Array(20)].map((_, index) => (
        <span
          key={index}
          className={`animate-pulse bg-slate-700 h-6 ${
            sizes[index % sizes.length]
          } rounded-full`}
        ></span>
      ))}
    </div>
  );
};
