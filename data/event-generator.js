const { faker } = require("@faker-js/faker/locale/mk");
const fs = require("fs");
const pc = require("picocolors");

function generateUpcomingEvents(eventsNumber = 3) {
  console.log(pc.blue(`Creating ${eventsNumber} events...`));

  const upcomingEvents = [];

  for (let i = 0; i < eventsNumber; i++) {
    const event = {
      id: faker.string.uuid(),
      picture: faker.image.urlPicsumPhotos(),
      title: faker.lorem.words(2),
      place: faker.location.city(),
      desc: faker.lorem.sentence(5),
      start_date: faker.date.anytime(),
      end_date: faker.date.anytime(),
      created_at: faker.date.anytime(),
      updated_at: faker.date.anytime(),
    };

    upcomingEvents.push(event);
  }

  fs.writeFileSync(
    "data/upcoming-events.json",
    JSON.stringify(upcomingEvents),
    "utf-8"
  );

  console.log(pc.green(`Created ${eventsNumber} events...`));
}

generateUpcomingEvents();
