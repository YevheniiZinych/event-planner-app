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
  Inner,
  Time,
  DeleteBth,
  EditBth,
  BtnWrap,
} from "./Details.styled";
import { deleteEvent } from "../../fakeAPI";

export const Details = ({ event, location }) => {
  const { id, description, priority, category, img, plays, date, time } = event;

  const onDelete = (id) => {
    deleteEvent(id);
  };

  return (
    <Card>
      <Figure>
        <Img src={img} alt="event_image" />
        <Figcaption>{description}</Figcaption>
      </Figure>
      <Inner>
        <Wrapper>
          <Category>{category}</Category>
          <Priority priority={priorityColor(priority)}>
            <p>{priority}</p>
          </Priority>
          <Place>{plays}</Place>
        </Wrapper>
        <Time>
          {date} at {time}
        </Time>
      </Inner>

      <BtnWrap>
        <NavLink to={`/add-event/${id}`} state={{ from: location }}>
          <EditBth type="button">Edit</EditBth>
        </NavLink>

        <NavLink to={"/"}>
          <DeleteBth type="button" onClick={() => onDelete(id)}>
            Delete
          </DeleteBth>
        </NavLink>
      </BtnWrap>
    </Card>
  );
};
