import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Top from "./pages/Top";
import Detail from "./pages/Detail";
import Genre from "./pages/Genre";
import Genres from "./pages/Genres";
import Search from "./pages/Search";
import ScrollToTop from "./components/ScrollToTop";
import PageNotFound from "./pages/PageNotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 60 * 24 * 1000, //24h - sync with Jikan API caching system
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Navigate replace to="/home" />} />
              <Route path="/home" element={<Home />} />
              <Route path="/detail/:id" element={<Detail />} />
              <Route path="/genres" element={<Genres />} />
              <Route path="/genre/:id" element={<Genre />} />
              <Route path="/top/:category" element={<Top />} />
              <Route path="/search" element={<Search />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
