import styled from "styled-components";

export const HeaderBox = styled.header`
  height: 168px;

  border-bottom: 1px solid #7b61ff;
  background-color: #fefcff;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tab}) {
    height: 92px;
  }
`;

export const HeaderWrapp = styled.div`
  display: grid;
  align-items: center;

  grid-template-areas:
    "logo lang"
    "search search";

  padding-top: 24px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tab}) {
    display: flex;
    align-items: center;
  }
`;

export const Logo = styled.h1`
  grid-area: logo;

  font-family: Alata, sans-serif;
  font-weight: 400;
  font-size: 24px;
  line-height: calc(33 / 24);

  color: ${({ theme }) => theme.color.main};
`;

export const LangBtnWrapp = styled.div`
  width: 69px;
  height: 48px;

  margin-left: auto;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tab}) {
    margin-left: 24px;
  }
`;

export const SelectLang = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;

  grid-area: lang;

  width: 100%;
  height: 100%;

  padding: 16px 12px;
  margin-bottom: 5px;

  border-radius: 10px;
  box-shadow: 2px 4px 9px 0px #a68dae47;

  transition: ${({ theme }) => theme.transitions.main};

  font-weight: ${({ theme }) => theme.fontWeights.m};
  font-size: 16px;
  line-height: calc(16 / 16);
`;

export const SelectLangIcon = styled.svg`
  width: 12px;
  height: 6px;

  stroke: ${({ theme }) => theme.color.black};

  transform: ${({ open }) => (open ? "rotate(180deg)" : "rotate(0deg)")};
  transition: ${({ theme }) => theme.transitions("transform")};
`;

export const ListLng = styled.ul`
  position: relative;

  padding: 1lh 0.8lh;

  text-align: center;
  line-height: ${({ open }) => (open ? "1.3" : "0")};
  overflow: hidden;

  background-color: #fff;
  border-radius: 10px;
  box-shadow: 2px 4px 9px 0px #a68dae47;

  transition: ${({ theme }) => theme.transitions("line-height")};

  z-index: 1;

  li {
    color: ${({ open, theme }) =>
      open ? theme.color.selectMainColor : "transparent"};

    border-bottom: ${({ open }) => (open ? `1px solid #ACA7C3` : "none")};

    opacity: ${({ open }) => (open ? "1" : "0")};

    transition: ${({ theme }) => theme.transitions("color")};

    cursor: pointer;
  }

  li:hover {
    color: ${({ theme }) => theme.color.main};

    border-bottom: 1px solid ${({ theme }) => theme.color.main};
  }

  li:not(:last-child) {
    margin-bottom: 0.6lh;
  }
`;

export const SearchBox = styled.div`
  position: relative;

  grid-area: search;

  margin-top: 24px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tab}) {
    margin-top: 0;
    margin-left: auto;
  }

  svg {
    position: absolute;
    top: 12px;
    left: 12px;
  }
`;

export const SearchInput = styled.input`
  width: 272px;
  height: 48px;

  padding-left: 48px;

  border-radius: 10px;
  box-shadow: 2px 4px 9px 0px #a68dae47;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.tab}) {
    width: 368px;
  }
`;
