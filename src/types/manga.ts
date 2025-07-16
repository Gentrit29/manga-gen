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

export type MangaData = {
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

export type MangaPagination = {
  last_visible_page: number;
  has_next_page: boolean;
  current_page: number;
};

export type Manga = {
  data: MangaData[];
  pagination: MangaPagination;
};

export type MangaRecommendation = {
  entry: Pick<MangaData, "mal_id" | "url" | "images" | "title">;
  url: string;
  votes: number;
};

export type MangaSlide = Pick<
  MangaData,
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

export type MangaCharacter = {
  role: string;
  character: {
    mal_id: number;
    images: Images;
    name: string;
  };
};

export type Route =
  | "manga"
  | "publishing"
  | "upcoming"
  | "bypopularity"
  | "favorite";

export type Params = {
  params: (type: string) => string;
};
