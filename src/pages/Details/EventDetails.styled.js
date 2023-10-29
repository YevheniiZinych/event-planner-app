import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: center;

  height: 100vh;
  width: 100%;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Inner = styled.div`
  margin-top: 200px;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.tab}) {
    margin-top: 120px;
  }
`;

export const BackLink = styled(NavLink)`
  display: flex;
  align-items: center;

  margin-bottom: 24px;
  span {
    color: ${(props) => props.theme.color.main};

    font-weight: ${(props) => props.theme.fontWeights.l};
    font-size: 14px;
    line-height: 21px;
  }
  svg {
    margin-right: 12px;
    width: 24px;
    height: 24px;
  }
`;

export const Title = styled.h1`
  font-weight: ${({ theme }) => theme.fontWeights.l};
  font-size: 24px;
  line-height: 36px;
  margin-bottom: 24px;
`;
