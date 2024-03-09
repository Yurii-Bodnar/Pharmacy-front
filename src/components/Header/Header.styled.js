import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderStyled = styled.header`
  margin-left: 20px;
  margin-bottom: 20px;
`;
export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;
export const LinkShop = styled(NavLink)`
  padding: 5px 15px 5px 0;
  border-right: 1px solid #000;
  font-size: 16px;
  font-weight: 600;
  color: ${({ isactive }) => (isactive === "true" ? "blue" : "#000")};
`;
export const Span = styled.span``;
export const LinkShopCart = styled(NavLink)`
  padding: 5px 0 5px 15px;
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => (props.isactive === "true" ? "blue" : "#000")};
`;
