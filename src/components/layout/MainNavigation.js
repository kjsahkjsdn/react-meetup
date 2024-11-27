import { useEffect, useState } from "react";
import { NavLink } from "react-router";

import { ALL_MEETUP_PAGE, FAVORITES_PAGE, NEW_MEETUP_PAGE } from "./../../utils/constants";
import { useScrollDirection } from "../../util-hooks/useScrollDirection";

import classes from "./MainNavigation.module.css";

export default function MainNavigation() {
  const scrollDirection = useScrollDirection();

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(scrollDirection === "up");
  }, [scrollDirection]);

  return (
    <header className={classes.header} style={{ top: isVisible ? "0" : "-100px" }} data-test="navigation-header">
      <div className={classes.logo}>React Meetups</div>
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
              <span className={classes.badge}>{0}</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
