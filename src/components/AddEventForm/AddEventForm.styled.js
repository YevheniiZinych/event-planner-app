import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  height: 1056px;
  width: 272px;

  margin-top: 25px;

  background-color: #fff;
  box-shadow: 2px 4px 9px 0px #a68dae47;

  border-radius: 8px;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.tab}) {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    align-self: center;
    grid-template-areas:
      "title location"
      "description category"
      "description image"
      "date priority"
      "time time"
      "- addBtn";

    height: 676px;
    width: 688px;

    padding: 40px 24px;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.desk}) {
    width: 1280px;
    height: 500px;
    column-gap: 42px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      "title date category"
      "description time image"
      "description location priority"
      " - - addBtn";

    padding: 40px;
  }
`;

export const LabelTitle = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;

  grid-area: title;

  margin-top: 40px;

  color: ${({ theme }) => theme.color.main};

  span {
    font-weight: ${({ theme }) => theme.fontWeights.s};
    font-size: 16px;
    line-height: 16px;

    margin-bottom: 8px;
  }

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

    @media screen and (min-width: ${(props) => props.theme.breakpoints.tab}) {
      right: 10px;
      top: 50%;
    }
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.tab}) {
    margin-top: 0;

    input {
      width: 308px;
    }
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.desk}) {
    input {
      width: 372px;
    }
  }
`;

export const LabelDescr = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  grid-area: description;

  color: ${({ theme }) => theme.color.main};

  span {
    font-weight: ${({ theme }) => theme.fontWeights.s};
    font-size: 16px;
    line-height: 16px;
    margin-bottom: 8px;
  }

  textarea {
    width: 240px;
    height: 156px;
    padding: 16px 12px 16px 12px;
    resize: none;
    border: 1px solid #aca7c3;
    border-radius: 8px;
    outline: none;
  }

  button {
    position: absolute;
    right: 5px;
    top: 30px;

    border: none;
    background-color: transparent;

    cursor: pointer;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.tab}) {
    textarea {
      width: 308px;
      height: 180px;
    }
  }
  @media screen and (min-width: ${(props) => props.theme.breakpoints.desk}) {
    textarea {
      width: 372px;
      height: 156px;
    }
  }
`;

export const LabelDate = styled.label`
  grid-area: date;
  span {
    color: ${({ theme }) => theme.color.main};

    font-weight: ${({ theme }) => theme.fontWeights.s};
    font-size: 16px;
    line-height: 16px;
    margin-bottom: 8px;
  }
`;

export const LabelTime = styled.label`
  grid-area: time;
  span {
    color: ${({ theme }) => theme.color.main};

    font-weight: ${({ theme }) => theme.fontWeights.s};
    font-size: 16px;
    line-height: 16px;
    margin-bottom: 8px;
  }
`;

export const LabelCategory = styled.div`
  position: relative;

  color: ${({ theme }) => theme.color.main};
  grid-area: category;

  span {
    display: block;

    font-weight: ${({ theme }) => theme.fontWeights.s};
    font-size: 16px;
    line-height: 16px;
    margin-bottom: 8px;
  }

  button {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
    height: 56px;

    padding: 16px 12px 16px 12px;

    background-color: #fff;

    border: 1px solid #aca7c3;
    border-radius: 8px;

    cursor: pointer;

    svg {
      position: absolute;
      right: 10px;
      transform: ${({ open }) => (open ? "rotate(180deg)" : "none")};
    }
  }

  ul {
    position: absolute;
    display: ${({ open }) => (open ? "block" : "none")};
    width: 100%;
    background-color: #fff;
    box-shadow: 0px 4px 10px 0px #00000040;
    border-radius: 8px;
    z-index: 1;
    li {
      border-bottom: 1px solid ${({ theme }) => theme.color.selectMainColor};

      padding: 9px 0 8px 24px;

      color: ${({ theme }) => theme.color.selectMainColor};

      cursor: pointer;

      &:is(:hover, :focus) {
        color: ${({ theme }) => theme.color.main};
        border-color: ${({ theme }) => theme.color.main};
      }
    }
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.tab}) {
    button {
      width: 308px;
    }
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.desk}) {
    button {
      width: 372px;
    }
  }
`;

export const LabelImage = styled.label`
  position: relative;
  grid-area: image;

  span {
    display: block;

    margin-bottom: 8px;

    font-weight: ${({ theme }) => theme.fontWeights.s};
    font-size: 16px;
    line-height: 16px;

    color: ${({ theme }) => theme.color.main};
  }
  button {
    position: absolute;
    right: 5px;
    top: 0;

    border: none;
    background-color: transparent;

    cursor: pointer;

    @media screen and (min-width: ${(props) => props.theme.breakpoints.tab}) {
      & > svg {
        width: 12px;
        height: 12px;
      }
    }
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.tab}) {
    & > div {
      width: 308px;
      height: 56px;
    }
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.desk}) {
    & > div {
      width: 372px;
      height: 56px;
    }
  }
`;

export const LabelPriority = styled(LabelCategory)`
  grid-area: priority;
`;

export const LabelLocation = styled(LabelTitle)`
  margin: 0;
  grid-area: location;
`;

export const AddBtn = styled.button`
  width: 240px;
  height: 56px;
  grid-area: addBtn;

  font-size: ${({ theme }) => theme.fontWeights.m};
  font-size: 16px;
  line-height: 24px;
  margin-top: 40px;

  color: #fff;
  background-color: ${({ theme }) => theme.color.main};

  box-shadow: 2px 4px 9px 0px #a68dae47;

  border: none;
  border-radius: 8px;

  cursor: pointer;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.tab}) {
    width: 193px;
    margin-left: 80px;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.desk}) {
    margin-left: 150px;
  }
`;
