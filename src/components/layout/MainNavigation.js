import { useEffect, useState } from "react";
import { NavLink } from "react-router";

import { ALL_MEETUP_PAGE, FAVORITES_PAGE, NEW_MEETUP_PAGE } from "./../../utils/constants";
import { useScrollDirection } from "../../util-hooks/useScrollDirection";

import { useAppSelector } from "../../state/favorites/hook";
import { selectFavoritesCount } from "../../state/favorites/slice";

import classes from "./MainNavigation.module.css";

export default function MainNavigation() {
  const favoritesCount = useAppSelector(selectFavoritesCount);

  const scrollDirection = useScrollDirection();

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(scrollDirection === "up");
  }, [scrollDirection]);

  return (
    <header className={classes.header} style={{ top: isVisible ? "0" : "-100px" }} data-test="navigation-header">
      <h1 className={classes.logo}>
        <NavLink to={ALL_MEETUP_PAGE}>React Meetups</NavLink>
      </h1>
      <nav>
        <ul>
          <li>
            <NavLink to={ALL_MEETUP_PAGE}>
              All Meetups
            </NavLink>
          </li>
          <li>
            <NavLink to={NEW_MEETUP_PAGE}>
              Add New Meetup
            </NavLink>
          </li>
          <li>
            <NavLink to={FAVORITES_PAGE}>
              My Favorites
              <span className={classes.badge}>{favoritesCount}</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
