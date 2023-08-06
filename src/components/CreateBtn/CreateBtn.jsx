import { StyledLink, Text } from "./CreateBtn.style";
import sprite from "../../img/sprite.svg";
export const CreateBtn = () => {
  return (
    <StyledLink>
      <svg width="24px" height="24px">
        <use href={sprite + "#add-icon"} />
      </svg>
      <Text>Add new event</Text>
    </StyledLink>
  );
};
