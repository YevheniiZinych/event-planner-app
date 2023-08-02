import styled from "styled-components";
import backImg from "../../img/background-min.png";

export const Container = styled.div`
  min-width: 320px;
  margin: 0 auto;
  padding: 0 16px;
  height: 100vh;
  overflow: hidden;
  border: 1px solid red;
  background-image: url(${backImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
