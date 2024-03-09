import styled from "styled-components";

export const Item = styled.li`
  border: 1px solid lightgray;
  display: inline-flex;
  flex-direction: column;
  border-radius: 5px;
  flex-direction: column;
  gap: 8px;
`;
export const Box = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const Img = styled.img`
  height: 250px;
`;
export const Title = styled.h3`
  font-size: 16px;
  font-weight: 600;
`;
export const Price = styled.span`
  font-size: 14px;
  font-weight: 600;
`;
export const Input = styled.input`
  padding: 5px;
  border-radius: 5px;
  border: none;
  outline: 1px solid LIGHTGRAY;
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
`;
