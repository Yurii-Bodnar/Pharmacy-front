import ShoppingCartItem from "./ShoppingCartItem";

const ShoppingItem = ({ shoppingCarts, setShoppingCart }) => {
  return (
    <>
      {shoppingCarts?.length > 0 &&
        shoppingCarts.map(({ avatar, title, price, id }) => (
          <ShoppingCartItem
            key={id}
            avatar={avatar}
            title={title}
            price={price}
            id={id}
            setShoppingCart={setShoppingCart}
            shoppingCarts={shoppingCarts}
          />
        ))}
    </>
  );
};

export default ShoppingItem;
