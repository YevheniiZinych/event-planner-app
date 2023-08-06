import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 56px;
  height: 56px;
  padding: 16px;

  border-radius: 8px;
  box-shadow: 2px 4px 9px 0px #a68dae47;
  background-color: ${({ theme }) => theme.color.main};

  @media screen and (min-width: ${(props) => props.theme.breakpoints.tab}) {
    width: 193px;
  }
`;

export const Text = styled.span`
  display: none;
  color: #fff;

  font-weight: ${({ theme }) => theme.fontWeights.m};
  font-size: 16px;
  line-height: 24px;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.tab}) {
    display: block;
  }
`;
