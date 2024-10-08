import { useState, useEffect } from "react";
import { getCategory, getEvents } from "../../fakeAPI";
import { EventCard } from "../../components/EventCard/EventCard";
import { Container, Title, EventList, FilterWrap } from "./HomePage.styled";
import { SelectCategory } from "../../components/SelectCategory/SelectCategory";
import { Sort } from "../../components/Sort/Sort";
import { CreateBtn } from "../../components/CreateBtn/CreateBtn";

const HomePage = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [events, setEvents] = useState([]);
  const [categories, setCategories] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSort, setSelectedSort] = useState("Sort by");
  const [filteredItem, setFilteredItem] = useState(events);

  useEffect(() => {
    if (isFilterOpen) setIsCategoryOpen(false);
  }, [isCategoryOpen, isFilterOpen]);

  useEffect(() => {
    const event = getEvents();

    const category = getCategory();
    setEvents(event);
    setCategories(category);
  }, []);

  // const getFilteredEvent = () => {}

  // useEffect(() => {
  //   const getFilteredEvent = () => {
  //     if (selectedCategory === "" && selectedCategory === "Category") {
  //       console.log("hello");
  //       return events;
  //     } else {
  //       const toNormalizeValue = selectedCategory.toLowerCase();
  //       return events.filter((event) =>
  //         event.category.toLowerCase().includes(toNormalizeValue)
  //       );
  //     }
  //   };
  //   const event = getFilteredEvent();

  //   setFilteredItem(event);
  // }, [events, selectedCategory]);

  return (
    <main>
      <Container>
        <section>
          <FilterWrap>
            <SelectCategory
              isOpen={isCategoryOpen}
              setIsCategoryOpen={setIsCategoryOpen}
              categories={categories}
              setSelectedCategory={setSelectedCategory}
              selectedCategory={selectedCategory}
            />
            <Sort
              isOpen={isFilterOpen}
              setIsOpen={setIsFilterOpen}
              selectedSort={selectedSort}
              setSelectedSort={setSelectedSort}
            />
            <CreateBtn />
          </FilterWrap>

          <Title>My events</Title>
          <EventList>
            <EventCard events={filteredItem} />
          </EventList>
        </section>
      </Container>
    </main>
  );
};

export default HomePage;
