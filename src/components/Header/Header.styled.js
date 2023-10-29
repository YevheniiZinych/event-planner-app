import styled from "styled-components";

export const HeaderBox = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  border-bottom: 1px solid #7b61ff;
  width: 100%;
  height: 168px;
  background-color: #fefcff;

  z-index: 1;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.tab}) {
    height: 92px;
  }
`;

export const Title = styled.h1`
  font-family: "Alata", sans-serif;
  font-weight: 400;
  line-height: 33.12px;
  color: ${(props) => props.theme.color.main};

  @media screen and (min-width: ${(props) => props.theme.breakpoints.desk}) {
    margin-left: 84px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 24px;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.desk}) {
    margin-right: 80px;
  }
`;

export const SelectLang = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: ${(props) => props.theme.fontWeights.m};
  font-size: 16px;
  line-height: 16px;

  width: 69px;
  height: 48px;

  background-color: transparent;
  box-shadow: 2px 4px 9px 0px #a68dae47;
  border: none;
  border-radius: 10px;

  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;

  cursor: pointer;

  transition: all 2s ease-in-out;
`;

export const ListLng = styled.ul`
  position: absolute;
  display: ${(props) => (props.open ? "block" : "none")};
  bottom: -85px;
  justify-content: start;
  width: 69px;
  height: 75px;
  padding: 16px 12px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 2px 4px 9px 0px #a68dae47;
  transition: display 5s ease-in-out;

  z-index: 2;

  li {
    color: ${(props) => props.theme.color.selectMainColor};
    border-bottom: 1px solid ${(props) => props.theme.color.selectMainColor};
    padding-bottom: 4px;
  }

  li:hover {
    color: ${(props) => props.theme.color.main};
    border-bottom: 1px solid ${(props) => props.theme.color.main};
  }

  li:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const SearchBox = styled.div`
  position: relative;

  display: flex;
  width: 272px;
  height: 48px;
  border-radius: 10px;
  margin: 0 auto;

  box-shadow: 2px 4px 9px 0px #a68dae47;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.tab}) {
    position: absolute;
    right: 133px;
    top: 26px;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.desk}) {
    right: 175px;
  }

  span {
    position: absolute;
    top: 12px;
    left: 12px;
  }
`;

export const SearchInput = styled.input`
  margin: auto 50px;
  outline: none;
  height: 30px;
  width: 200px;
  border: none;
`;
