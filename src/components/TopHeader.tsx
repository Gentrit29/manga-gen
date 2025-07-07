import type { MangaData } from "../types/manga";

type TopHeaderProps = {
  label: string;
  desc: string;
  params: MangaData;
};

function TopHeader({ label, params, desc }: TopHeaderProps) {
  return (
    <section className="relative h-[300px]">
      <div
        className="absolute inset-0 bg-cover bg-center py-40 blur-xs brightness-60"
        style={{
          backgroundImage: `url(${
            params?.images?.webp?.image_url ||
            "/about-section/aboutsectionbanner.jpg"
          })`,
        }}
      />
      <div className="relative flex h-full flex-col items-start justify-center space-y-2 px-10">
        <h1 className="text-center text-3xl font-bold text-white">{label}</h1>
        <p className="text-center text-xl font-light text-gray-200">{desc}</p>
      </div>
    </section>
  );
}

export default TopHeader;
