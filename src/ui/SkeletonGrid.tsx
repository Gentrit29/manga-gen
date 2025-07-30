function SkeletonGrid({
  elements,
  gridClassName = "grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",
  itemClassName = "w-full rounded-lg h-60 sm:h-72 2xl:h-96",
}: {
  elements: number;
  gridClassName?: string;
  itemClassName?: string;
}) {
  return (
    <div className={`animate-pulse ${gridClassName}`}>
      {Array.from({ length: elements }).map((_, idx) => (
        <div key={idx} className={`bg-neutral-600/70 ${itemClassName}`} />
      ))}
    </div>
  );
}

export default SkeletonGrid;
