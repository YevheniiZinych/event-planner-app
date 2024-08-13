import { useState } from "react";
import {
  HeaderBox,
  HeaderWrapp,
  Logo,
  SelectLangIcon,
  SelectLang,
  LangBtnWrapp,
  ListLng,
  SearchBox,
  SearchInput,
} from "./Header.styled";
import { Container } from "../../utils/container.styled";
import sprite from "../../img/sprite.svg";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("UK");
  const [searchValue, setSearchValue] = useState("");
  const [expanded, setExpanded] = useState(false);
  const [tabIndx, setTabIndx] = useState(-1);
  const [ariaHidden, setAriaHidden] = useState(true);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
  };

  const active = () => {
    setIsOpen((prev) => !prev);
    setExpanded((prev) => !prev);
    setTabIndx(isOpen ? -1 : 0);
    setAriaHidden((prev) => !prev);
  };

  const handleClick = (e) => {
    const selectedLng = e.target.dataset.id;
    setLanguage(selectedLng);
    setIsOpen(false);
  };

  return (
    <HeaderBox>
      <Container>
        <HeaderWrapp>
          <Logo>Event Planner</Logo>

          <SearchBox>
            <SearchInput
              type="text"
              value={searchValue}
              onChange={handleChange}
              placeholder="Search by keywords"
            />

            <svg width="24" height="24">
              <use href={sprite + "#search-icon"}></use>
            </svg>
          </SearchBox>

          <LangBtnWrapp>
            <SelectLang
              onClick={() => active()}
              aria-expanded={expanded}
              aria-controls="lang"
            >
              {language}
              <SelectLangIcon open={isOpen}>
                <use href={sprite + "#arrow-lng"}></use>
              </SelectLangIcon>
            </SelectLang>
            <ListLng
              open={isOpen}
              onClick={handleClick}
              id="lang"
              aria-hidden={ariaHidden}
            >
              <li>
                <a href="#!" data-id="US" tabIndex={tabIndx}>
                  US
                </a>
              </li>
              <li>
                <a href="#!" data-id="UA" tabIndex={tabIndx}>
                  UA
                </a>
              </li>
            </ListLng>
          </LangBtnWrapp>
        </HeaderWrapp>
      </Container>
    </HeaderBox>
  );
};
