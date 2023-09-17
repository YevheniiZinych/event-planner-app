import artImg from "./img/art-min.png";
import musicImg from "./img/music-min.png";
import businessImg from "./img/business-min.png";
import confImg from "./img/conference-min.png";
import workshopImg from "./img/workshop-min.png";
import sportImg from "./img/sport-min.png";
import partyImg from "./img/party-min.png";

const events = [
  {
    id: "1",
    title: "Hobby 1",
    description:
      "Unlock the secrets of effective leadership at our transformative Success Leadership Conference.",
    priority: "Hight",
    category: "Art",
    img: artImg,
    place: "Kyiv",
    date: "12.07",
    time: "12:00",
  },
  {
    id: "2",
    title: "Hobby 2",
    description:
      "Unlock the secrets of effective leadership at our transformative Success Leadership Conference.",
    priority: "Medium",
    category: "Art",
    img: artImg,
    place: "Kyiv",
    date: "12.07",
    time: "12:00",
  },
  {
    id: "3",
    title: "Hobby 3",
    description:
      "Unlock the secrets of effective leadership at our transformative Success Leadership Conference.",
    priority: "Low",
    category: "Music",
    img: musicImg,
    place: "Kyiv",
    date: "12.07",
    time: "12:00",
  },
  {
    id: "4",
    title: "Hobby 4",
    description:
      "Unlock the secrets of effective leadership at our transformative Success Leadership Conference.",
    priority: "Hight",
    category: "Music",
    img: musicImg,
    place: "Kyiv",
    date: "12.07",
    time: "12:00",
  },
  {
    id: "5",
    title: "Hobby 5",
    description:
      "Unlock the secrets of effective leadership at our transformative Success Leadership Conference.",
    priority: "Medium",
    category: "Business",
    img: businessImg,
    place: "Kyiv",
    date: "12.07",
    time: "12:00",
  },
  {
    id: "6",
    title: "Hobby 6",
    description:
      "Unlock the secrets of effective leadership at our transformative Success Leadership Conference.",
    priority: "Low",
    category: "Conference",
    img: confImg,
    place: "Kyiv",
    date: "12.07",
    time: "12:00",
  },
  {
    id: "7",
    title: "Hobby 7",
    description:
      "Unlock the secrets of effective leadership at our transformative Success Leadership Conference.",
    priority: "Hight",
    category: "Workshop",
    img: workshopImg,
    place: "Kyiv",
    date: "12.07",
    time: "12:00",
  },
  {
    id: "8",
    title: "Hobby 8",
    description:
      "Unlock the secrets of effective leadership at our transformative Success Leadership Conference.",
    priority: "Medium",
    category: "Sport",
    img: sportImg,
    place: "Kyiv",
    date: "12.07",
    time: "12:00",
  },
  {
    id: "9",
    title: "Hobby 9",
    description:
      "Unlock the secrets of effective leadership at our transformative Success Leadership Conference.",
    priority: "Low",
    category: "Sport",
    img: sportImg,
    place: "Kyiv",
    date: "12.07",
    time: "12:00",
  },
  {
    id: "10",
    title: "Hobby 10",
    description:
      "Unlock the secrets of effective leadership at our transformative Success Leadership Conference.",
    priority: "Medium",
    category: "Party",
    img: partyImg,
    place: "Kyiv",
    date: "12.07",
    time: "12:00",
  },
];

export const getEvents = () => {
  return events;
};

export const getCategory = () => {
  const data = events.map(({ category }) => category);
  const uniqueData = new Set(data);

  let uniqueCategory = [];

  for (const item of uniqueData) {
    uniqueCategory.push(item);
  }

  return uniqueCategory;
};

export const createEvent = (data) => {
  events.shift(data);
};

export const getEventById = (id) => {
  const foundEvent = events.find((event) => event.id === id);

  return foundEvent;
};
