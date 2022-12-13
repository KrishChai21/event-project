import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/EventList";

function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList eventList={featuredEvents} />
    </div>
  );
}

export default HomePage;
