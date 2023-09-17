import { useLocation } from "react-router";
import { Container, BackLink, Inner } from "./AddEvent.style";
import sprite from "../../img/sprite.svg";
import { AddEventForm } from "../../components/AddEventForm/AddEventForm";

export const AddEvent = () => {
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
        <AddEventForm />
      </section>
    </Container>
  );
};
