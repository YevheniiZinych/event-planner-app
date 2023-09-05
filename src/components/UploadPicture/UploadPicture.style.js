import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  overflow: hidden;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  width: 240px;
  height: 56px;

  border: 1px solid #aca7c3;
  border-radius: 8px;

  cursor: pointer;

  p {
    display: block;
    width: 100%;
    height: 100%;
    padding: 16px 12px 16px 12px;
  }
`;
