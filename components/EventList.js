import React from "react";
import EventItem from "./EventItem";
import classes from "./EventList.module.css";

function EventList({ eventList }) {
  return (
    <ul className={classes.list}>
      {eventList.map(function (event) {
        return (
          <EventItem
            title={event.title}
            image={event.image}
            date={event.date}
            location={event.location}
            id={event.id}
            key={event.id}
          />
        );
      })}
    </ul>
  );
}

export default EventList;
