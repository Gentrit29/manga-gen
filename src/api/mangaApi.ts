const JIKAN_API_URL = import.meta.env.VITE_JIKAN_API_BASE_URL;

export const getTop5Manga = async () => {
  const res = await fetch(`${JIKAN_API_URL}/top/manga?limit=5&sfw=true`);
  if (!res.ok) {
    throw new Error("Failed to fetch top manga");
  }

  const json = await res.json();
  if (!json?.data || json.data.length === 0) {
    throw new Error("Failed to fetch data | no manga found ");
  }

  return json.data;
};

export const getRandomMangas = async () => {
  const randomPage = Math.floor(Math.random() * 100) + 1;
  const res = await fetch(
    `${JIKAN_API_URL}/manga?sfw=true&genres_exclude=49,65&min_score=7&limit=5&page=${randomPage}`,
  );

  if (!res.ok) {
    throw new Error("Failed fetching random mangas");
  }

  const json = await res.json();

  return json.data;
};

export const getTopManga = async (
  category: string,
  page: number = 1,
  type: string = "",
) => {
  const map = [
    {
      route: "manga",
      params: `&order_by=score&type=${type}&sort=desc`,
    },
    {
      route: "publishing",
      params: `&type=${type}&status=publishing&sort=desc`,
    },
    {
      route: "upcoming",
      params: `&type=${type}&status=upcoming&sort=asc`,
    },
    {
      route: "bypopularity",
      params: `&order_by=popularity&type=${type}&sort=desc`,
    },
    { route: "favorite", params: `&order_by=favorites&type=${type}&sort=desc` },
  ];

  const routeConfig = map.find((r) => r.route === category);

  if (!routeConfig) throw new Error("Route not found");

  const baseURL = `${JIKAN_API_URL}/manga?sfw=true&genres_exclude=49,65&page=${page}`;

  const url = `${baseURL}${routeConfig.params}`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch top manga");
  }

  const json = await res.json();
  if (!json?.data || json.data.length === 0) {
    throw new Error("Failed to fetch data | no manga found ");
  }

  return { data: json.data, pagination: json.pagination };
};

export const getMangaGenres = async () => {
  const res = await fetch(`${JIKAN_API_URL}/genres/manga?filter=genres`);
  if (!res.ok) {
    throw new Error("Failed to fetch manga genres");
  }

  const json = await res.json();
  if (!json?.data || json.data.length === 0) {
    throw new Error("Failed to fetch data | no genres found ");
  }

  return json.data;
};

export const getAllMangaGenres = async () => {
  const res = await fetch(`${JIKAN_API_URL}/genres/manga`);
  if (!res.ok) {
    throw new Error("Failed to fetch manga genres");
  }

  const json = await res.json();
  if (!json?.data || json.data.length === 0) {
    throw new Error("Failed to fetch data | no genres found ");
  }

  return json.data;
};

export const getMangaSearch = async (query: string) => {
  const res = await fetch(
    `${JIKAN_API_URL}/manga?q=${query}&sfw&genres_exclude=49,65`,
  );
  if (!res.ok) {
    throw new Error("Failed to fetch manga by query");
  }

  const json = await res.json();
  if (!json?.data || json.data.length === 0) {
    throw new Error("Failed to fetch data | no manga found ");
  }

  return json.data;
};

export const getMangaFullById = async (id: number) => {
  const res = await fetch(`${JIKAN_API_URL}/manga/${id}/full`);
  if (!res.ok) {
    throw new Error("Failed to fetch manga by id");
  }

  const json = await res.json();
  if (!json?.data) {
    throw new Error(`Failed to fetch data | manga id: ${id}`);
  }

  return json.data;
};

export const getMangaRecommendations = async (id: number) => {
  const res = await fetch(`${JIKAN_API_URL}/manga/${id}/recommendations`);
  if (!res.ok) {
    throw new Error("Failed to fetch recommendations by id");
  }

  const json = await res.json();

  return json?.data ?? [];
};

export const getMangaCharacters = async (id: number) => {
  const res = await fetch(`${JIKAN_API_URL}/manga/${id}/characters`);
  if (!res.ok) {
    throw new Error("Failed to fetch characters by id");
  }

  const json = await res.json();

  return json?.data ?? [];
};

export const getMangaSearchByGenre = async (genres: number, page = 1) => {
  const res = await fetch(
    `${JIKAN_API_URL}/manga?genres=${genres}&sfw&page=${page}`,
  );
  if (!res.ok) {
    throw new Error("Failed to fetch manga by genre");
  }

  const json = await res.json();
  if (!json?.data || json.data.length === 0) {
    throw new Error("Failed to fetch data | no manga found ");
  }

  return { data: json.data, pagination: json.pagination };
};
