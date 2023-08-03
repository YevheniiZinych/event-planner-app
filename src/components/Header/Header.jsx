import { useState, useRef, useEffect } from "react";
import {
  HeaderBox,
  Title,
  Wrapper,
  SelectStyle,
  ListLng,
  SearchBox,
  SearchInput,
} from "./Header.styled";
import sprite from "../../img/sprite.svg";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("UK");
  const [searchValue, setSearchValue] = useState("");
  const menuRef = useRef();

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
  };

  const handleClick = (e) => {
    setIsOpen(true);
    const selectedLng = e.target.dataset.id;
    if (selectedLng) {
      setLanguage(selectedLng);
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const closeDropdown = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", closeDropdown);

    return () => document.addEventListener("click", closeDropdown);
  }, []);

  return (
    <HeaderBox>
      <Wrapper>
        <Title>Event Planner</Title>
        <SelectStyle onClick={handleClick} ref={menuRef}>
          {language}
          <ListLng open={isOpen} onClick={handleClick}>
            <li data-id="UK">UK</li>
            <li data-id="UA">UA</li>
          </ListLng>
        </SelectStyle>
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
