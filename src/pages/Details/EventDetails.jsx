import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router";
import { getEventById } from "../../fakeAPI";
import { Details } from "../../components/Details/Details";
import { BackLink, Container, Inner, Title } from "./EventDetails.styled";
import sprite from "../../img/sprite.svg";

const EventDetails = () => {
  const [event, setEvent] = useState({});
  const location = useLocation();

  const backLinkHref = location.state?.from ?? "/details";

  const { id } = useParams();

  useEffect(() => {
    setEvent(getEventById(id));
  }, [id]);

  const { title } = event;
  return (
    <Container>
      <section>
        <Inner>
          <BackLink to={backLinkHref}>
            <svg width="16px" height="12px">
              <use href={sprite + "#icon-back-btn"} />{" "}
            </svg>
            <span> Back</span>
          </BackLink>
        </Inner>
        <Title>{title}</Title>
        <Details location={location} event={event} />
      </section>
    </Container>
  );
};

export default EventDetails;
