function MangaHeaderSkeleton() {
  return (
    <div className="animate-pulse py-15">
      <div className="flex flex-col items-center px-5 lg:items-start lg:px-20 xl:flex-row xl:space-x-8 2xl:px-40">
        <div className="h-70 w-60 rounded-lg bg-neutral-600/70" />
        <div className="mt-4 flex w-full flex-col space-y-2 xl:mt-0">
          <div className="h-20 w-3/4 rounded bg-neutral-600/70" />
          <div className="mt-6 h-36 w-full rounded bg-neutral-600/70" />
          <div className="mt-6 h-24 w-3/5 rounded bg-neutral-600/70" />
        </div>
      </div>
    </div>
  );
}

export default MangaHeaderSkeleton;
