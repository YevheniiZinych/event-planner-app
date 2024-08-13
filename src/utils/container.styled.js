import styled from "styled-components";

export const Container = styled.div`
  width: 320px;
  margin: 0 auto;
  padding: 0 25px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tab}) {
    width: 768px;
    padding: 0 40px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}) {
    width: 1440px;
    padding: 0 80px;
  }
`;
