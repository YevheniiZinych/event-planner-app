import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: center;

  height: 100vh;
  width: 100%;
`;

export const Inner = styled.div`
  margin-top: 200px;
`;

export const BackLink = styled(NavLink)`
  display: flex;
  align-items: center;
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
