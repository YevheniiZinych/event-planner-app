import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const SelectBtn = styled.button`
  position: relative;
  display: flex;
  align-items: center;

  width: 155px;

  width: ${({ open }) => (open ? "165px" : "56px")};
  float: right;

  height: 56px;
  padding: 16px;

  box-shadow: 2px 4px 9px 0px #a68dae47;
  border: none;
  border-radius: 8px;
  background-color: #fff;
  transition: ${({ theme }) => theme.transitions.main};

  cursor: pointer;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tab}) {
    position: relative;
    width: 143px;
    padding: 10px;
    left: 0;
  }

  svg {
    stroke: ${({ open, category }) =>
      open || category ? "#7B61FF" : "#3f3f3f"};
    margin-right: 4px;
    margin-top: 2px;

    @media screen and (min-width: ${(props) => props.theme.breakpoints.tab}) {
      stroke: ${({ selected }) => (selected ? "#7B61FF" : "#3f3f3f")};
    }
  }

  & span {
    font-weight: ${({ theme }) => theme.fontWeights.m};
    font-size: 16px;
    line-height: 24px;
    transition: ${({ theme }) => theme.transitions.main};

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobMax}) {
      display: ${({ open }) => (open ? "block" : "none")};

      margin-right: 15px;
      color: ${({ open, category }) =>
        open || category ? "#7B61FF" : "#3f3f3f"};
    }

    @media screen and (min-width: ${(props) => props.theme.breakpoints.tab}) {
      color: ${({ selected }) => (selected ? "#7B61FF" : "#3f3f3f")};
    }
  }
`;

export const SelectList = styled.ul`
  position: absolute;
  top: 60px;
  left: 0;

  height: ${({ open }) => (open ? "130%" : "0px")};
  width: 100%;
  overflow: hidden;

  background-color: #fff;
  box-shadow: 0px 4px 10px 0px #00000040;
  border-radius: 8px;

  transition: ${({ theme }) => theme.transitions.main};

  li {
    &:not(:last-child) {
      border-bottom: 1px solid ${({ theme }) => theme.color.selectMainColor};
    }

    padding: 10px;

    color: ${({ theme }) => theme.color.selectMainColor};

    cursor: pointer;

    &:is(:hover, :focus) {
      color: ${({ theme }) => theme.color.main};
      border-color: ${({ theme }) => theme.color.main};
    }
  }
`;

export const ClearBtn = styled.span`
  position: absolute;
  display: ${({ open }) => (open ? "flex" : "none")};
  right: 10px;
  top: 19px;
  align-items: center;

  color: ${({ theme }) => theme.color.main};

  cursor: pointer;

  svg {
    height: 20px;
    width: 24px;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.tab}) {
    color: ${({ selected }) => (selected ? "#7B61FF" : "#3f3f3f")};
    right: 5px;
  }
`;
