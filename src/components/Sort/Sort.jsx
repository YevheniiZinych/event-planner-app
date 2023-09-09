import { useState, useEffect } from "react";
import sprite from "../../img/sprite.svg";
import { Container, SortBtn, SortList } from "./Sort.style";
import arrow from "../../img/sort-arrow.png";

export const Sort = ({ selectedSort, setSelectedSort }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onSelectSort = (e) => {
    setSelectedSort(e.target.dataset.id);
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
        <div>
          <SortList onClick={onSelectSort} open={isOpen}>
            <li data-id="By name A-Z">
              By name A-Z
              <img src={arrow} width="16px" height="17px" alt="sort-arrow" />
            </li>
            <li data-id="By name Z-A">
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
            <li data-id="By data">
              By data
              <img src={arrow} width="16px" height="17px" alt="sort-arrow" />
            </li>
            <li data-id="By data">
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
            <li data-id="By priority">
              By priority
              <img src={arrow} width="16px" height="17px" alt="sort-arrow" />
            </li>
            <li data-id="By priority">
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
        </div>
      </SortBtn>
    </Container>
  );
};
