import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;

  height: 100vh;

  overflow: hidden;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.tab}) {
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.desk}) {
  }
`;

export const Inner = styled.div`
  margin-top: 200px;

  h1 {
    margin-top: 25px;

    @media screen and (min-width: ${(props) => props.theme.breakpoints.tab}) {
      font-weight: ${(props) => props.theme.fontWeights.l};
      font-size: 32px;
      line-height: 48px;
    }
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.tab}) {
    margin-top: 120px;
  }
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

export const FormContainer = styled.div`
  /* height: 660px;
  width: 272px; */

  /* box-shadow: 2px 4px 9px 0px #a68dae47;

  overflow: hidden;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.tab}) {
    width: 688px;
  } */
`;

export const LabelTitle = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;

  margin-top: 40px;
  color: ${({ theme }) => theme.color.main};

  input {
    width: 240px;
    height: 56px;
    padding: 16px 12px 16px 12px;

    border: 1px solid #aca7c3;
    border-radius: 8px;
  }

  button {
    position: absolute;
    right: 5px;
    top: 30px;

    padding: 5px;

    border: none;
    background-color: transparent;

    cursor: pointer;
  }
`;
