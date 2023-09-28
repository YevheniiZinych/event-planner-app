const LOCAL_KEY = "events";

export const getEvents = () => {
  const events = JSON.parse(localStorage.getItem(LOCAL_KEY));

  return events ? events : [];
};

export const getCategory = () => {
  const events = JSON.parse(localStorage.getItem(LOCAL_KEY));

  let uniqueCategory = [];
  if (events) {
    const data = events.map(({ category }) => category);
    const uniqueData = new Set(data);
    for (const item of uniqueData) {
      uniqueCategory.push(item);
    }
  }

  return uniqueCategory ? uniqueCategory : [];
};

export const createEvent = (data) => {
  const events = localStorage.getItem(LOCAL_KEY);
  const parseEvent = JSON.parse(events);

  if (parseEvent) {
    const x = [...parseEvent, data];
    localStorage.setItem(LOCAL_KEY, JSON.stringify(x));
  }

  if (!events) {
    const newEvent = [];
    newEvent.push(data);
    localStorage.setItem(LOCAL_KEY, JSON.stringify(newEvent));
  }
};

export const getEventById = (id) => {
  const events = localStorage.getItem(LOCAL_KEY);
  const parseEvent = JSON.parse(events);

  const foundEvent = parseEvent.find((event) => event.id === id);
  return foundEvent;
};

export const updateEvent = (id, data) => {
  const events = localStorage.getItem(LOCAL_KEY);
  const parseEvent = JSON.parse(events);
  const index = parseEvent.findIndex((el) => el.id === id);

  parseEvent.splice(index, 1, data);

  localStorage.setItem(LOCAL_KEY, JSON.stringify(parseEvent));
};
