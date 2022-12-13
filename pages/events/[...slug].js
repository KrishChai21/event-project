import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/EventList";
import ResultsTitle from "../../components/event-detail/results-title";
import Button from "../../components/Button";
import ErrorAlert from "../../components/error-alert";

function FilteredEventsPage() {
  const router = useRouter();

  const filterData = router.query.slug;
  // Returns an array, each index containing the segment

  // The first time when we log the output to console, filterData is undefined
  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  // This data is in form of a string since it is encoded in the url as a string. Thus transform it into a number
  const filteredYear = parseInt(filterData[0]);
  const filteredMonth = parseInt(filterData[1]);

  const filteredEvents = getFilteredEvents({
    year: filteredYear,
    month: filteredMonth,
  });

  if (!filteredEvents || filteredEvents.length == 0) {
    return (
      <>
        <ErrorAlert>
          <p>No events found!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const date = new Date(filteredYear, filteredMonth - 1);

  return (
    <>
      <ResultsTitle date={date} />
      <EventList eventList={filteredEvents} />
    </>
  );
}

export default FilteredEventsPage;
