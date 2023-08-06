import {
  ImgEvent,
  EventItem,
  ImageWrap,
  DateWrap,
  CategoryWrap,
  DescriptionWrap,
  Inner,
  MoreBtn,
} from "./EventCard.styled";

export const EventCard = ({ events }) => {
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
                  <ImgEvent loading="lazy" src={img} alt="#" />
                  <CategoryWrap>
                    <span>{category}</span>
                    <span>{priority}</span>
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
                  <MoreBtn>More Inform</MoreBtn>
                </Inner>
              </EventItem>
            );
          }
        )}
    </>
  );
};
