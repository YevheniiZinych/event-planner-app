import { useState, useEffect } from "react";
import { getCategory, getEvents } from "../../fakeAPI";
import { EventCard } from "../../components/EventCard/EventCard";
import { Container, Title, EventList, FilterWrap } from "./HomePage.styled";
import { SelectCategory } from "../../components/SelectCategory/SelectCategory";
import { Sort } from "../../components/Sort/Sort";
import { CreateBtn } from "../../components/CreateBtn/CreateBtn";

const HomePage = () => {
  const [events, setEvents] = useState([]);
  const [categories, setCategories] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Category");
  const [selectedSort, setSelectedSort] = useState("Sort by");
  const [filteredItem, setFilteredItem] = useState([]);

  useEffect(() => {
    const event = getEvents();
    const category = getCategory();
    setEvents(event);
    setCategories(category);
  }, [events]);

  useEffect(() => {
    const getFilteredEvent = () => {
      if (selectedCategory === "" || selectedCategory === "Category") {
        return events;
      } else {
        const toNormalizeValue = selectedCategory.toLowerCase();
        return events.filter((event) =>
          event.category.toLowerCase().includes(toNormalizeValue)
        );
      }
    };
    const event = getFilteredEvent();

    setFilteredItem(event);
  }, [categories, events, selectedCategory]);

  return (
    <Container>
      <section>
        <FilterWrap>
          <SelectCategory
            categories={categories}
            setSelectedCategory={setSelectedCategory}
            selectedCategory={selectedCategory}
          />
          <Sort selectedSort={selectedSort} setSelectedSort={setSelectedSort} />
          <CreateBtn />
        </FilterWrap>

        <Title>My events</Title>
        <EventList>
          <EventCard events={filteredItem} />
        </EventList>
      </section>
    </Container>
  );
};

export default HomePage;
