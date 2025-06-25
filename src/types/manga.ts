type Images = {
  webp: {
    image_url: string;
    small_image_url: string;
    large_image_url: string;
  };
};

type Author = {
  mal_id: number;
  name: string;
  url: string;
};

type Published = {
  string: string;
};

export type Genre = {
  mal_id: number;
  name: string;
  url: string;
};

export type Manga = {
  mal_id: number;
  url: string;
  images: Images;
  title: string;
  title_japanese: string;
  type: string;
  score: number;
  scored_by: number;
  rank: number;
  volumes: number;
  chapters: number;
  favorites: number;
  synopsis: string;
  published: Published;
  status: string;
  authors: Author[];
  genres: Genre[];
};

export type MangaSlide = Pick<
  Manga,
  | "mal_id"
  | "images"
  | "title"
  | "title_japanese"
  | "synopsis"
  | "rank"
  | "score"
  | "scored_by"
  | "favorites"
>;
