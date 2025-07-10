//This skeleton is a simplified version and does not replicate the MangaSlider layout
//It uses a minimal design to keep things simple and indicate that content is loading
function MangaSliderSkeleton() {
  return (
    <div className="h-[500px] max-h-[500px] animate-pulse">
      <div className="flex h-full flex-col justify-center space-y-4 px-5 py-10 lg:px-20 2xl:px-40">
        <div className="h-8 w-32 rounded-sm bg-neutral-600/70" />
        <div className="h-16 w-3/4 rounded bg-neutral-600/70" />
        <div className="h-50 w-full rounded bg-neutral-600/70" />
        <div className="mt-6 h-8 w-24 rounded bg-neutral-600/70" />
      </div>
    </div>
  );
}

export default MangaSliderSkeleton;
