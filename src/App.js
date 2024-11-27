import { Routes, Route } from "react-router";

import { FAVORITES_PAGE, NEW_MEETUP_PAGE } from "./utils/constants";

import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";

import AllMeetupsPage from "./pages/AllMeetupsPage";
import NewMeetupsPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";

function App() {
  return (
    <div data-test="app">
      <MainNavigation />
      <Layout>
        <Routes>
          <Route index element={<AllMeetupsPage />} />
          <Route path={NEW_MEETUP_PAGE} element={<NewMeetupsPage />} />
          <Route path={FAVORITES_PAGE} element={<FavoritesPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
