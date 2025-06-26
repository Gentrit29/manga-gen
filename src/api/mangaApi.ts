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
