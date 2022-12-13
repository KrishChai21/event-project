import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/EventList";
import EventSearch from "../../components/EventSearch";
import { Fragment } from "react";
import { useRouter } from "next/router";

function AllEventsPage() {
  const allEvents = getAllEvents();
  const router = useRouter();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <Fragment>
      <EventSearch onSearch={findEventsHandler} />
      <EventList eventList={allEvents} />
    </Fragment>
  );
}

export default AllEventsPage;
