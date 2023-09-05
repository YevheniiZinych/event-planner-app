import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;

  overflow: hidden;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const FilterWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  gap: 24px;

  width: 271px;

  margin-top: 180px;
  margin-bottom: 40px;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.tab}) {
    margin-top: 100px;
    gap: 24px;
  }
`;

export const Title = styled.h2`
  display: none;
`;

export const EventList = styled.ul`
  max-height: 350px;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.tab}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    grid-gap: 2rem;

    max-height: 440px;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.desk}) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 24px;
    grid-row-gap: 40px;

    max-height: 530px;
  }
`;
