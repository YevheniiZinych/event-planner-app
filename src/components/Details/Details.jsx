import { NavLink } from "react-router-dom";
import { priorityColor } from "../../helpers/priorityColor";
import {
  Card,
  Img,
  Figure,
  Figcaption,
  Category,
  Priority,
  Place,
  Wrapper,
  Time,
  DeleteBth,
  EditBth,
  BtnWrap,
} from "./Details.styled";

export const Details = ({ event, location }) => {
  const { id, description, priority, category, img, place, date, time } = event;

  return (
    <Card>
      <Figure>
        <Img src={img} alt="event_image" />
        <Figcaption>{description}</Figcaption>
      </Figure>
      <Wrapper>
        <Category>{category}</Category>
        <Priority priority={priorityColor(priority)}>
          <p>{priority}</p>
        </Priority>
        <Place>{place}</Place>
      </Wrapper>
      <Time>
        {date} at {time}
      </Time>

      <BtnWrap>
        <NavLink to={`/add-event/${id}`} state={{ from: location }}>
          <EditBth type="button">Edit</EditBth>
        </NavLink>

        <NavLink to={"/"}>
          <DeleteBth type="button">Delete</DeleteBth>
        </NavLink>
      </BtnWrap>
    </Card>
  );
};
