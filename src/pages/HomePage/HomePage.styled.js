import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const EventList = styled.ul`
  height: 450px;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.tab}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    grid-gap: 2rem;

    height: 540px;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.desk}) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 24px;
    grid-row-gap: 40px;

    height: 550px;
  }
`;

export const FilterWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 190px;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.tab}) {
    margin-top: 100px;
    gap: 24px;
  }
`;
