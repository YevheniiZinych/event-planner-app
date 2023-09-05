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
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setSelectedCategory("Category");
    }
  }, [isOpen, setSelectedCategory]);

  const openSelect = () => {
    setIsOpen(true);
    setIsSelected((prev) => !prev);
  };
  const handleClick = (e) => {
    setSelectedCategory(e.target.dataset.id);
    setIsSelected(false);
  };

  const onClearCategory = () => {
    setSelectedCategory("");
    setIsOpen(false);
    setIsSelected(false);
  };

  return (
    <Container>
      <SelectBtn
        onClick={openSelect}
        open={isOpen}
        selectedCategory={selectedCategory}
        isSelected={isSelected}
      >
        <div>
          <svg width="24px" height="24px">
            <use href={sprite + "#category-icon"} />
          </svg>
        </div>

        <div>
          <span>{selectedCategory}</span>
        </div>
        <SelectList
          open={isOpen}
          isSelected={isSelected}
          selectedCategory={selectedCategory}
          onClick={handleClick}
        >
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

      <ClearBtn onClick={onClearCategory} open={isOpen} isSelected={isSelected}>
        <AiOutlineCloseCircle />
      </ClearBtn>
    </Container>
  );
};
