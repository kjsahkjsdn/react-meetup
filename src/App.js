import { Routes, Route } from "react-router";

import { useEffect } from "react";
import { useFetch } from "./util-hooks/useFetch";

import { FAVORITES_PAGE, NEW_MEETUP_PAGE } from "./utils/constants";
import { selectMeetups, setMeetups } from "./state/meetups/slice";
import { useAppDispatch, useAppSelector } from "./state/hook";

import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";

import AllMeetupsPage from "./pages/AllMeetupsPage";
import NewMeetupsPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";

function App() {
  const dispatch = useAppDispatch();
  const meetups = useAppSelector(selectMeetups);
  
  const { data } = useFetch({
    url: "/data.json",
  });

  useEffect(() => {
    if (data) {
      dispatch(setMeetups(data));
    }
  }, [data, dispatch]);

  if (!meetups.length) return <p>Loading...</p>;

  return (
    <div>
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
