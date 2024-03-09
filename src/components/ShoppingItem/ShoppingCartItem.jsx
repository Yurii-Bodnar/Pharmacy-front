import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Img,
  Input,
  Item,
  Price,
  Title,
} from "./ShoppingCartItem.styled";

const ShoppingCartItem = ({
  avatar,
  title,
  price,
  id,
  setShoppingCart,
  shoppingCarts,
}) => {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const storedCarts = JSON.parse(localStorage.getItem("shoppingCarts"));
    if (storedCarts) {
      const storedQuantity = storedCarts.find((cart) => cart.id === id)?.count;
      if (storedQuantity) {
        setQuantity(storedQuantity);
      }
    }
  }, [id]);

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    if (!isNaN(newQuantity) && newQuantity > 0) {
      const updatedCarts = shoppingCarts.map((cart) => {
        if (cart.id === id) {
          return { ...cart, count: newQuantity };
        } else {
          return cart;
        }
      });
      setShoppingCart(updatedCarts);
      setQuantity(newQuantity);
    }
  };

  const handleRemove = () => {
    const removedData = shoppingCarts.filter((el) => el.id !== +id);
    setShoppingCart(removedData);
  };

  return (
    <Item>
      <Img src={avatar} alt="medicament" />
      <Box>
        <Title>{title}</Title>
        <Price>Price: {price}</Price>
        <Input
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          min="1"
        />
        <Button type="button" onClick={handleRemove}>
          Remove
        </Button>
      </Box>
    </Item>
  );
};

export default ShoppingCartItem;
