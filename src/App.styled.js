import styled from "styled-components";
import backImg from "./img/background-min.png";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  background-image: url(${backImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
