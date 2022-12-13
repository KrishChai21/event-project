import classes from "./EventItem.module.css";
// Next.js supports CSS Modules using the [name].module.css file naming convention.
// For example, consider a reusable Button component in the components/ folder:

// First, create components/Button.module.css

import Button from "./Button";

import DateIcon from "./icons/date-icon";
import AddressIcon from "./icons/address-icon";
import ArrowRightIcon from "./icons/arrow-right-icon";

function EventItem({ title, image, date, location, id }) {
  // 2021-05-12 converted into 12 May
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Street, Pincode and City are separated by ', ' in the data file. We will replace those with new line characters so that they appear one below another.
  const formattedAddress = location.replace(",", "\n");

  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      {/* CHECK!! (img) */}
      <img src={`/${image}`} alt="Event Image" />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
