import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";

import { useAppDispatch, useAppSelector } from "../../state/favorites/hook";
import { addFavorite, removeFavorite, selectIsFavorite } from "../../state/favorites/slice";

export default function MeetupItem({ item }) {
  const dispatch = useAppDispatch()

  const isFavorite = useAppSelector((state) => selectIsFavorite(state, item.id));

  const handleClick = () => {
    if(isFavorite) {
      dispatch(removeFavorite(item));
    } else {
      dispatch(addFavorite(item));
    }
  }

  return (
    <li className={classes.item} data-test='meet-up-item'>
      <Card>
        <div className={classes.image}>
          <img src={item.image} alt={item.title} />
        </div>
        <div className={classes.content}>
          <h3>{item.title}</h3>
          <address>{item.address}</address>
          <p>{item.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={() => handleClick(item)} data-test='favorite-button'>
            {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
}
