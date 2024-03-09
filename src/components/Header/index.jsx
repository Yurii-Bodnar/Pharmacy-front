import { useLocation } from "react-router-dom";
import {
  HeaderStyled,
  LinkShop,
  LinkShopCart,
  Nav,
  Span,
} from "./Header.styled";

const Header = () => {
  const location = useLocation();
  return (
    <HeaderStyled>
      <Nav>
        <LinkShop
          to={"/"}
          isactive={
            location.pathname === "/pharmacy"
              ? "true"
              : location.pathname === "/pharmacy24h"
              ? "true"
              : location.pathname === "/pharmacy3i"
              ? "true"
              : location.pathname === "/drugs24"
              ? "true"
              : "false"
          }
        >
          <Span>Shop</Span>
        </LinkShop>
        <LinkShopCart
          to={"/carts"}
          isactive={location.pathname === "/carts" ? "true" : "false"}
        >
          <span>Shopping Cart</span>
        </LinkShopCart>
      </Nav>
    </HeaderStyled>
  );
};

export default Header;
