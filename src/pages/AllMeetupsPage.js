import { useSelector } from "react-redux";

import { selectMeetups } from "../state/meetups/slice";
import MeetupList from "../components/meetups/MeeupList";

export default function AllMeetupsPage() {
  const meetups = useSelector(selectMeetups);

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList data={meetups} />
    </section>
  );
}