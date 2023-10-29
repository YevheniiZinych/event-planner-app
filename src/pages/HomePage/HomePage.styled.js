import styled from "styled-components";

export const Container = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;

  overflow: hidden;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  } */
`;

export const FilterWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
`;

export const Inner = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 200px;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.tab}) {
    gap: 24px;
    margin-bottom: 24px;
  }
`;

export const Title = styled.h2`
  display: none;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tab}) {
    display: block;
    margin-bottom: 24px;

    font-weight: ${({ theme }) => theme.fontWeights.l};
    font-size: 32px;
    line-height: 48px;
  }
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
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.desk}) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 24px;
    grid-row-gap: 40px;
  }
`;
