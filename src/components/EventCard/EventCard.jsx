import { NavLink } from "react-router-dom";
import { useLocation } from "react-router";
import {
  ImgEvent,
  EventItem,
  ImageWrap,
  DateWrap,
  CategoryWrap,
  DescriptionWrap,
  Inner,
  MoreBtn,
  Category,
  Priority,
} from "./EventCard.styled";
import { priorityColor } from "../../helpers/priorityColor";

export const EventCard = ({ events }) => {
  const location = useLocation();

  return (
    <>
      {events.length > 0 &&
        events.map(
          ({
            id,
            title,
            description,
            priority,
            category,
            img,
            plays,
            date,
            time,
          }) => {
            return (
              <EventItem key={id}>
                <ImageWrap>
                  <ImgEvent loading="lazy" src={img} alt="Event photo" />
                  <CategoryWrap>
                    <Category>{category}</Category>
                    <Priority color={priorityColor(priority)}>
                      {priority}
                    </Priority>
                  </CategoryWrap>
                </ImageWrap>

                <Inner>
                  <DateWrap>
                    <span>
                      {date} at {time}
                    </span>
                    <span>{plays}</span>
                  </DateWrap>
                  <DescriptionWrap>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </DescriptionWrap>
                  <MoreBtn>
                    <NavLink to={`/details/${id}`} state={{ from: location }}>
                      More Inform
                    </NavLink>
                  </MoreBtn>
                </Inner>
              </EventItem>
            );
          }
        )}
    </>
  );
};
