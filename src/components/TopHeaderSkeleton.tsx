function TopHeaderSkeleton() {
  return (
    <div className="h-[300px] animate-pulse bg-neutral-800">
      <div className="flex h-full flex-col items-center justify-center space-y-2 px-10 lg:items-start">
        <div className="h-10 w-32 rounded-sm bg-neutral-600/70" />
        <div className="h-20 w-3/4 rounded bg-neutral-600/70" />
      </div>
    </div>
  );
}

export default TopHeaderSkeleton;
