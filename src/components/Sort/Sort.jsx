import { useEffect } from "react";
import sprite from "../../img/sprite.svg";
import { SortBtnWrapp, SortBtn, SortList, SortIcon } from "./Sort.styled";
import arrow from "../../img/sort-arrow.png";

export const Sort = ({ selectedSort, setSelectedSort, isOpen, setIsOpen }) => {
  const onSelectSort = (e) => {
    setSelectedSort(e.target.dataset.id);
  };

  useEffect(() => {
    if (isOpen) {
      setSelectedSort("Sort by");
    }
  }, [isOpen, setSelectedSort]);

  return (
    <>
      <SortBtnWrapp>
        <SortBtn onClick={() => setIsOpen((prev) => !prev)} open={isOpen}>
          <span>{selectedSort}</span>
          <SortIcon open={isOpen}>
            <use href={sprite + "#sort-icon"} />
          </SortIcon>
        </SortBtn>
      </SortBtnWrapp>

      <div>
        <SortList onClick={onSelectSort} open={isOpen}>
          <li data-id="A-Z">
            By name A-Z
            <img src={arrow} width="16px" height="17px" alt="sort-arrow" />
          </li>
          <li data-id="Z-A">
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
          <li data-id="data">
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
    </>
  );
};
