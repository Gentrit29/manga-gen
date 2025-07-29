import type { Route } from "../types/manga";
import { routeMap } from "../utils/routing";
import { handleError } from "./handleError";

const JIKAN_API_URL = import.meta.env.VITE_JIKAN_API_BASE_URL;

export const getTop5Manga = async () => {
  const url = `${JIKAN_API_URL}/top/manga?limit=5&sfw=true`;

  const json = await handleError(url, `Failed to fetch top manga: ${url}`);

  return json.data;
};

export const getRandomMangas = async () => {
  const randomPage = Math.floor(Math.random() * 100) + 1;

  const url = `${JIKAN_API_URL}/manga?sfw=true&genres_exclude=49,65&min_score=7&limit=5&page=${randomPage}`;

  const json = await handleError(url, `Failed fetching random mangas: ${url}`);

  return json.data;
};

export const getTopManga = async (
  category: Route,
  page: number = 1,
  type: string = "",
) => {
  const routeConfig = routeMap[category];

  const baseURL = `${JIKAN_API_URL}/manga?sfw=true&genres_exclude=49,65&page=${page}`;

  const url = `${baseURL}${routeConfig.params(type)}`;

  const json = await handleError(url, `Failed to fetch top manga: ${url}`);

  return { data: json.data, pagination: json.pagination };
};

export const getMangaGenres = async () => {
  const url = `${JIKAN_API_URL}/genres/manga?filter=genres`;

  const json = await handleError(url, `Failed to fetch manga genres: ${url}`);

  return json.data;
};

export const getAllMangaGenres = async () => {
  const url = `${JIKAN_API_URL}/genres/manga`;

  const json = await handleError(url, `Failed to fetch manga genres: ${url}`);

  return json.data;
};

export const getMangaSearch = async (query: string, page: number = 1) => {
  const url = `${JIKAN_API_URL}/manga?q=${query}&sfw&genres_exclude=49,65&page=${page}`;

  const json = await handleError(url, `Failed to fetch manga by query: ${url}`);

  return { data: json.data, pagination: json.pagination };
};

export const getMangaFullById = async (id: number) => {
  const url = `${JIKAN_API_URL}/manga/${id}/full`;

  const json = await handleError(url, `Failed to fetch manga by id: ${url}`);

  return json.data;
};

export const getMangaRecommendations = async (id: number) => {
  const url = `${JIKAN_API_URL}/manga/${id}/recommendations`;

  const json = await handleError(
    url,
    `Failed to fetch recommendations by id: ${url}`,
  );

  return json?.data ?? [];
};

export const getMangaCharacters = async (id: number) => {
  const url = `${JIKAN_API_URL}/manga/${id}/characters`;

  const json = await handleError(
    url,
    `Failed to fetch characters by id: ${url}`,
  );

  return json?.data ?? [];
};

export const getMangaSearchByGenre = async (genres: number, page = 1) => {
  const url = `${JIKAN_API_URL}/manga?genres=${genres}&sfw&genres_exclude=49,65&page=${page}`;

  const json = await handleError(url, `Failed to fetch manga by genre: ${url}`);

  return { data: json.data, pagination: json.pagination };
};
