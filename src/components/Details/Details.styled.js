import styled from "styled-components";

export const Card = styled.div`
  min-height: 464px;
  width: 272px;
  box-shadow: 2px 4px 9px 0px #a68dae47;

  background-color: white;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.tab}) {
    width: 688px;
    min-height: 500px;
  }
`;

export const Figure = styled.figure`
  width: 100%;
  margin: 0 0 24px 0;

  img {
    margin-bottom: 24px;
  }
`;

export const Figcaption = styled.figcaption`
  width: 240px;
  min-height: 60px;
  margin-left: 16px;
`;

export const Img = styled.img`
  width: 100%;
  height: 168px;

  object-fit: cover;

  border-radius: 8px;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.tab}) {
    height: 220px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 12px;

  margin-left: 16px;
  margin-bottom: 12px;
`;

export const Inner = styled.div`
  @media screen and (min-width: ${(props) => props.theme.breakpoints.tab}) {
    display: flex;
  }
`;

export const Priority = styled.div`
  min-width: 57px;
  height: 32px;

  padding: 8px 12px 8px 12px;

  text-align: center;

  color: ${({ priority }) => priority};

  box-shadow: 4px 5px 9px 0px #a68dae47;
  border-radius: 8px;
`;

export const Category = styled.div`
  min-width: 45px;
  height: 32px;

  padding: 6px 12px 6px 12px;

  box-shadow: 4px 5px 9px 0px #a68dae47;
  border-radius: 8px;
`;

export const Place = styled.div`
  min-width: 53px;
  height: 32px;

  padding: 6px 12px 6px 12px;

  box-shadow: 4px 5px 9px 0px #a68dae47;
  border-radius: 8px;
`;

export const Time = styled.div`
  width: 139px;
  height: 32px;

  margin-left: 16px;
  margin-bottom: 40px;
  padding: 6px 12px 6px 12px;

  text-align: center;

  box-shadow: 4px 5px 9px 0px #a68dae47;
  border-radius: 8px;
`;

export const BtnWrap = styled.div`
  display: flex;
  gap: 24px;

  width: 100%;
  margin-left: 16px;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.tab}) {
    justify-content: flex-end;
    margin-left: 0;
    margin-top: 50px;
  }
`;

export const EditBth = styled.button`
  width: 108px;
  height: 32px;

  color: #7b61ff;

  align-items: center;

  background-color: transparent;

  border: 1px solid #7b61ff;
  border-radius: 8px;
`;

export const DeleteBth = styled.button`
  width: 108px;
  height: 32px;

  color: white;

  align-items: center;

  background-color: ${({ theme }) => theme.color.main};

  border: none;
  border-radius: 8px;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.tab}) {
    margin-right: 10px;
  }
`;
