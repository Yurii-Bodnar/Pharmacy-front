import styled from "styled-components";

export const Item = styled.li`
  padding: 15px;
  border: 1px solid lightgray;
  display: inline-flex;
  flex-direction: column;
  border-radius: 5px;
  flex-direction: column;
  gap: 8px;
`;
export const Icon = styled.svg`
  width: 20px;
  height: 20px;
  fill: red;
`;
export const Img = styled.img`
  height: 250px;
`;
export const Title = styled.h3`
  font-size: 16px;
  font-weight: 500;
`;
export const Span = styled.span`
  font-size: 14px;
  font-weight: 600;
`;
export const Button = styled.button`
  width: 100px;
  padding: 8px;
  border: 1px solid lightgray;
  border-radius: 5px;
  color: #000;
  font-size: 14px;
  font-weight: 400;
  &:hover {
    background-color: #2196f3;
    color: #fff;
    border: transparent;
  }
  &:disabled {
    opacity: 0;
    cursor: auto;
  }
`;
