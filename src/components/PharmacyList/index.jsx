import { useContext, useEffect } from "react";
import PharmacyItem from "../PharmacyItem";
import { ProductsContext, ShoppingCartContext } from "../../utility/context";
import { getProducts } from "../../utility/pharmacyApi";
import { List } from "./PharmacyList.styled";

const PharmacyList = () => {
  const { products, setProducts } = useContext(ProductsContext);
  const { shoppingCarts, setShoppingCart } = useContext(ShoppingCartContext);

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem("products"));

    if (!storage) {
      console.log("if");

      getProducts().then((data) => {
        setProducts(data);
        localStorage.setItem("products", JSON.stringify(data));
      });
    } else {
      console.log("else");
      setProducts(storage);
    }
  }, [setProducts]);

  return (
    <List>
      <PharmacyItem
        products={products}
        setProducts={setProducts}
        setShoppingCart={setShoppingCart}
        shoppingCarts={shoppingCarts}
      />
    </List>
  );
};

export default PharmacyList;
