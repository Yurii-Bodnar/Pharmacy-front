import styled from "styled-components";

export const Container = styled.div`
  width: 40vw;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;
export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
`;
export const Input = styled.input`
  padding: 5px;
  border-radius: 5px;
  border: none;
  outline: 1px solid LIGHTGRAY;
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  align-items: center;
`;
export const Button = styled.button`
  width: 150px;
  padding: 8px;
  outline: 1px solid lightgray;
  border-radius: 5px;
  color: #000;
  font-size: 14px;
  font-weight: 400;
  &:hover {
    background-color: #2196f3;
    color: #fff;
    outline: transparent;
  }
`;
export const Span = styled.span`
  font-size: 14px;
  font-weight: 500;
`;
