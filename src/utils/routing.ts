import type { Params, Route } from "../types/manga";

export const routeMap: Record<Route, Params> = {
  manga: {
    params: (type: string) => `&order_by=score&type=${type}&sort=desc`,
  },
  publishing: {
    params: (type: string) => `&type=${type}&status=publishing&sort=desc`,
  },
  upcoming: {
    params: (type: string) => `&type=${type}&status=upcoming&sort=asc`,
  },
  bypopularity: {
    params: (type: string) => `&order_by=popularity&type=${type}`,
  },
  favorite: {
    params: (type: string) => `&order_by=favorites&type=${type}&sort=desc`,
  },
};
