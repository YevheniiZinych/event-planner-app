import { useState, useEffect } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import sprite from "../../img/sprite.svg";
import {
  Container,
  SelectBtn,
  SelectList,
  ClearBtn,
} from "./SelectCategory.styled";

export const SelectCategory = ({
  categories,
  setSelectedCategory,
  selectedCategory,
  isOpen,
  setIsOpen,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    if (isOpen) setSelectedCategory("Categories");
  }, [categories, isOpen, setSelectedCategory]);

  const openSelect = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClick = (e) => {
    setSelectedCategory(e.target.dataset.id);
    setIsSelected(false);
  };

  const onClearCategory = () => {
    setSelectedCategory("Categories");
    setIsOpen(false);
    setIsSelected(false);
  };

  return (
    <Container>
      <SelectBtn
        onClick={openSelect}
        open={isOpen}
        category={selectedCategory}
        selected={isSelected}
      >
        <div>
          <svg width="24px" height="24px">
            <use href={sprite + "#category-icon"} />
          </svg>
        </div>

        <div>
          <span>{selectedCategory}</span>
        </div>
        <SelectList open={isOpen} onClick={handleClick}>
          {categories.length > 0 &&
            categories.map((item) => {
              return (
                <li data-id={item} key={item}>
                  {item}
                </li>
              );
            })}
        </SelectList>
      </SelectBtn>

      <ClearBtn onClick={onClearCategory} open={isOpen} selected={isSelected}>
        <AiOutlineCloseCircle />
      </ClearBtn>
    </Container>
  );
};
