import { IoLogoGithub } from "react-icons/io5";

function AboutSection() {
  return (
    <section
      className="relative mx-20 mt-15 bg-cover bg-center bg-no-repeat py-20 text-white brightness-110"
      style={{
        backgroundImage: 'url("/about-section/aboutsectionbanner.jpg")',
      }}
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-neutral-900 via-transparent to-neutral-900" />
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <h2 className="mb-10 text-3xl font-bold">Manga GEN</h2>
        <p className="text-lg">
          Discover everything about manga and more — search, explore top
          recommendations, check out community favorites from MyAnimeList, and
          much more — all in one place. This website is powered by the{" "}
          <a
            href="https://jikan.moe/"
            target="_blank"
            aria-label="Go to Jikan API page"
          >
            <span className="font-bold text-green-500">Jikan API.</span>
          </a>
        </p>
        <div className="mt-6 flex justify-center gap-6">
          <a
            href="github.com/Gentrit29"
            target="_blank"
            aria-label="Go to github repository"
          >
            <IoLogoGithub className="h-8 w-8" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
