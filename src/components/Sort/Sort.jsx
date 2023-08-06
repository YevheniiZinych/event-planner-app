import { useState, useEffect } from "react";
import sprite from "../../img/sprite.svg";
import { Container, SortBtn, SortList } from "./Sort.style";
import arrow from "../../img/sort-arrow.png";

export const Sort = ({ selectedSort, setSelectedSort }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onSelectSort = (e) => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      setSelectedSort("Sort by");
    }
  }, [isOpen, setSelectedSort]);

  return (
    <Container>
      <SortBtn onClick={() => setIsOpen((prev) => !prev)} open={isOpen}>
        <span>{selectedSort}</span>
        <div>
          <svg width="24px" height="24px">
            <use href={sprite + "#sort-icon"} />
          </svg>
        </div>
      </SortBtn>
      <SortList onClick={onSelectSort} open={isOpen}>
        <li>
          By name A-Z
          <img src={arrow} width="16px" height="17px" alt="sort-arrow" />
        </li>
        <li>
          By name Z-A
          <img
            style={{
              transform: "rotate(180deg)",
            }}
            src={arrow}
            width="16px"
            height="17px"
            alt="sort-arrow"
          />
        </li>
        <li>
          By data
          <img src={arrow} width="16px" height="17px" alt="sort-arrow" />
        </li>
        <li>
          By data
          <img
            style={{
              transform: "rotate(180deg)",
            }}
            src={arrow}
            width="16px"
            height="17px"
            alt="sort-arrow"
          />
        </li>
        <li>
          By priority
          <img src={arrow} width="16px" height="17px" alt="sort-arrow" />
        </li>
        <li>
          By priority
          <img
            style={{
              transform: "rotate(180deg)",
            }}
            src={arrow}
            width="16px"
            height="17px"
            alt="sort-arrow"
          />
        </li>
      </SortList>
    </Container>
  );
};
