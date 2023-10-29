import { useState } from "react";
import {
  HeaderBox,
  Title,
  Wrapper,
  SelectLang,
  ListLng,
  SearchBox,
  SearchInput,
} from "./Header.styled";
import sprite from "../../img/sprite.svg";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("UK");
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
  };

  const handleClick = (e) => {
    const selectedLng = e.target.dataset.id;
    setLanguage(selectedLng);
    setIsOpen(true);
  };

  return (
    <HeaderBox>
      <Wrapper>
        <Title>Event Planner</Title>
        <SelectLang onClick={() => setIsOpen((prev) => !prev)}>
          {language}
          <ListLng open={isOpen} onClick={handleClick}>
            <li data-id="UK">UK</li>
            <li data-id="UA">UA</li>
          </ListLng>
        </SelectLang>
      </Wrapper>
      <SearchBox>
        <SearchInput
          type="text"
          value={searchValue}
          onChange={handleChange}
          placeholder="Search by keywords"
        />
        <span>
          <svg width="24" height="24">
            <use href={sprite + "#search-icon"}></use>
          </svg>
        </span>
      </SearchBox>
    </HeaderBox>
  );
};
