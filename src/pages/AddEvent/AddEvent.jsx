import { useState } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router";
import { Container, BackLink, Inner } from "./AddEvent.style";
import sprite from "../../img/sprite.svg";
import { AddEventForm } from "../../components/AddEventForm/AddEventForm";
import { getEventById } from "../../fakeAPI";

export const AddEvent = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(getEventById(id));
  const location = useLocation();

  const backLinkHref = location.state?.from ?? "/add-event";

  return (
    <Container>
      <section>
        <Inner>
          <BackLink to={backLinkHref} state={{ from: "/" }}>
            <svg width="16px" height="12px">
              <use href={sprite + "#icon-back-btn"} />{" "}
            </svg>
            <span> Back</span>
          </BackLink>
          <h1>Create new event</h1>
        </Inner>
        <AddEventForm event={event} id={id} setEvent={setEvent} />
      </section>
    </Container>
  );
};
