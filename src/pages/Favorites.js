import { useAppSelector } from "../state/hook";
import { selectFavorites } from "../state/favorites/slice";

import MeetupList from "../components/meetups/MeeupList";

export default function FavoritesPage() {
  const favorites = useAppSelector(selectFavorites);

  return (
    <section>
      <h1>Favorites Page</h1>
       <MeetupList data={favorites} />
    </section>
  );
}
