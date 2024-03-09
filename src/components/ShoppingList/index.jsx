import { useContext } from "react";
import ShoppingItem from "../ShoppingItem/ShoppingItem";
import { ShoppingCartContext } from "../../utility/context";
import { List } from "./ShoppingList.styled";

const ShoppingList = () => {
  const { shoppingCarts, setShoppingCart } = useContext(ShoppingCartContext);

  return (
    <List>
      <ShoppingItem
        shoppingCarts={shoppingCarts}
        setShoppingCart={setShoppingCart}
      />
    </List>
  );
};

export default ShoppingList;
