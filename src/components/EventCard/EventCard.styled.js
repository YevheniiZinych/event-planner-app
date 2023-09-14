import styled from "styled-components";

export const DescriptionWrap = styled.div`
  min-height: 145px;
  max-width: 100%;

  background-color: #fff;

  transition: ${({ theme }) => theme.transitions.main};

  h3 {
    height: 48px;
    padding-top: 16px;
    padding-left: 16px;
    font-weight: ${({ theme }) => theme.fontWeights.m};
    font-size: 16px;
    line-height: 24px;
  }

  p {
    font-weight: ${({ theme }) => theme.fontWeights.s};
    font-size: 14px;
    line-height: 20px;

    width: 100%;
    min-height: 80px;

    padding: 8px 16px;

    background-color: #fff;
    color: ${({ theme }) => theme.color.descrColor};
  }
`;

export const MoreBtn = styled.button`
  position: absolute;

  right: 10px;
  bottom: 20px;

  transform: translateX(110%);

  padding: 10px 24px;

  border: none;
  border-radius: 8px;

  color: #fff;
  background-color: ${({ theme }) => theme.color.main};

  font-weight: ${({ theme }) => theme.fontWeights.m};

  transition: ${({ theme }) => theme.transitions.main};

  cursor: pointer;
`;

export const EventItem = styled.li`
  position: relative;
  height: 480px;
  width: 271px;

  box-shadow: 2px 4px 9px 0px #a68dae47;
  background-color: #fff;

  overflow: hidden;

  &:not(:last-child) {
    margin-bottom: 24px;
  }

  &:hover ${DescriptionWrap} {
    min-height: 180px;
  }

  &:hover ${MoreBtn} {
    transform: translateX(0);
  }
`;

export const ImgEvent = styled.img`
  height: 100%;
  object-fit: cover;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
`;

export const ImageWrap = styled.div`
  position: relative;

  height: 336px;
  width: 100%;
`;

export const DateWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  background-color: #ffffffcc;
  height: 40px;

  span {
    color: ${({ theme }) => theme.color.main};
    font-weight: ${({ theme }) => theme.fontWeights.s};
    font-size: 14px;
  }
`;

export const CategoryWrap = styled.div`
  position: absolute;
  top: 15px;
  left: 12px;

  & span:first-child {
    color: ${({ theme }) => theme.color.main};
  }

  & span:not(:last-child) {
    margin-right: 10px;
  }

  span {
    min-width: 36px;
    background-color: #fff;

    border-radius: 8px;
    padding: 6px 12px;

    font-weight: ${({ theme }) => theme.fontWeights.m};
    font-size: 14px;
    line-height: 20px;
  }
`;

export const Inner = styled.div`
  position: absolute;
  bottom: 0;

  width: 100%;
`;
