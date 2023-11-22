import styled from "styled-components";

export const Container = styled.div`
  width: 320px;
  height: 100dvh;

  margin: 0 auto;

  overflow: hidden;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.tab}) {
    width: 768px;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.desk}) {
    width: 1280px;
    padding: 0 30px;
  }
`;

export const FilterWrap = styled.div`
  position: relative;

  display: flex;
  gap: 20px;

  margin-top: 200px;
  margin-left: 85px;
  margin-bottom: 40px;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.tab}) {
    gap: 24px;

    margin-bottom: 24px;
    margin-left: 215px;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.desk}) {
    gap: 24px;

    margin-top: 150px;
    margin-bottom: 24px;
    margin-left: 700px;
  }
`;

export const Inner = styled.div``;

export const Title = styled.h2`
  display: none;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tab}) {
    display: block;
    margin-bottom: 24px;
    margin-left: 28px;

    font-weight: ${({ theme }) => theme.fontWeights.l};
    font-size: 32px;
    line-height: 48px;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.desk}) {
    margin-left: 10px;
  }
`;

export const EventList = styled.ul`
  display: grid;
  place-items: center;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.tab}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.desk}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
