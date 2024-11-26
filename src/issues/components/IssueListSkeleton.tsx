export const IssueListSkeleton = () => {
  return (
    <div className="mt-4 space-y-4">
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className="animate-pulse bg-slate-700 h-20 rounded-md"
        ></div>
      ))}
    </div>
  );
};
