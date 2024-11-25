export const IssueListSkeleton = () => {
  return (
    <>
      {/* Botones de All, Open, Closed */}
      <div className="flex gap-4">
        {[...Array(3)].map((_, index) => (
          <button key={index} className="btnSkeleton" />
        ))}
      </div>

      {/* Skeleton Lista de issues */}
      <div className="mt-4 space-y-4">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="animate-pulse bg-slate-700 h-20 rounded-md"
          ></div>
        ))}
      </div>
    </>
  );
};
