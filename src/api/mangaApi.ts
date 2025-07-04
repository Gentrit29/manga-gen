const JIKAN_API_URL = import.meta.env.JIKAN_API_BASE_URL;

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
  const res = await Promise.all(
    Array.from({ length: 5 }).map(() =>
      fetch(`${JIKAN_API_URL}/random/manga?sfw=true`).then((res) => {
        if (!res.ok) {
          throw new Error("Failed fetching random mangas");
        }
        return res.json();
      }),
    ),
  );

  return res.map((result) => result.data);
};

export const getTopManga = async (category: string, page: number = 1) => {
  //category "manga" is not a valid filter for he jikan api
  //but I want to keep the /top/manga url, so I made a conditional fetch
  const url =
    category && category !== "manga"
      ? `${JIKAN_API_URL}/top/manga?filter=${category}&page=${page}&sfw=true`
      : `${JIKAN_API_URL}/top/manga?sfw=true&page=${page}`;

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
