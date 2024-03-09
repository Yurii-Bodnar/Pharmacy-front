import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: inline flex;
  flex-direction: column;
  gap: 20px;
  width: 214px;
`;
export const Link = styled(NavLink)`
  font-size: 16px;
  font-weight: 600;
  color: #000;
  padding: 20px 15px;
  border-radius: 5px;
  outline: 1px solid lightgrey;
  transition: all 250ms cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 4px 4px 6px,
      rgba(255, 255, 255, 0.3) -4px -4px 6px;
  }
  &.active {
    background-color: lightblue;
  }
`;
