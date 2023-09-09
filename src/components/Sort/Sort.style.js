import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const SortBtn = styled.button`
  position: ${({ open }) => (open ? "absolute" : "none")};

  right: 0;

  display: flex;
  align-items: center;

  background-color: #fff;

  padding: 16px;
  width: ${({ open }) => (open ? "158px" : "56px")};
  height: 56px;

  border: none;
  box-shadow: 2px 4px 9px 0px #a68dae47;
  border-radius: 8px;

  transition: ${({ theme }) => theme.transitions.main};

  cursor: pointer;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.tab}) {
    width: 129px;
    position: relative;
  }

  svg {
    position: absolute;
    top: 15px;
    right: ${({ open }) => (open ? "20px" : "15px")};
    stroke: ${({ open }) => (open ? "#7B61FF" : "#3f3f3f")};
    width: 24px;
    height: 24px;
  }

  span {
    display: ${({ open }) => (open ? "block" : "none")};

    font-weight: ${({ theme }) => theme.fontWeights.m};
    font-size: 15px;
    line-height: 19px;

    color: ${({ theme, open }) => open && theme.color.main};

    @media screen and (min-width: ${(props) => props.theme.breakpoints.tab}) {
      display: block;
      margin-right: 20px;
    }
  }
`;

export const SortList = styled.ul`
  position: absolute;
  display: block;
  right: 0;
  top: 60px;

  width: 100%;

  display: ${({ open }) => (open ? "block" : "none")};

  background-color: #fff;
  box-shadow: 0px 4px 10px 0px #00000040;

  z-index: 1;

  li {
    display: flex;

    padding: 9px 0 8px 24px;

    background-color: #fff;

    border-bottom: 1px solid ${({ theme }) => theme.color.selectMainColor};

    color: ${({ theme }) => theme.color.selectMainColor};

    cursor: pointer;

    &:is(:hover, :focus) {
      color: ${({ theme }) => theme.color.main};
      border-color: ${({ theme }) => theme.color.main};
    }
  }
`;
