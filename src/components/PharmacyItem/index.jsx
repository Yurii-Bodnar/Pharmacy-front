import { useLocation } from "react-router-dom";
import icon from "../../icons/sprite.svg";
import { useEffect, useState } from "react";
import { Button, Icon, Img, Item, Span, Title } from "./PharmacyItem.styled";

const PharmacyItem = ({
  products,
  setShoppingCart,
  shoppingCarts,
  setProducts,
}) => {
  const [clickedProducts, setClickedProducts] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (shoppingCarts.length > 0) {
      const sortedCarts = shoppingCarts.sort((a, b) => a.price - b.price);
      setShoppingCart(sortedCarts);
      localStorage.setItem("shoppingCarts", JSON.stringify(sortedCarts));
    }
  }, [setShoppingCart, shoppingCarts]);
  const keysOfProduct = [];

  if (products) {
    for (let i = 0; i < products?.length; i++) {
      const obj = products[i];
      const keys = Object.keys(obj);
      const keyAtIndex1 = keys[1].toLowerCase();
      keysOfProduct.push(keyAtIndex1);
    }
  }

  const getDataForKeyWord = (pharmacyName) => {
    const correctStr = pharmacyName.replace("/", "");
    let data;
    for (let i = 0; i < products.length; i++) {
      if (keysOfProduct[i].toLowerCase() === correctStr) {
        data = products[i];
        break;
      }
    }
    return data;
  };

  const chosenProducts = getDataForKeyWord(location.pathname);

  let keyOfChosenObj = "";
  if (chosenProducts) {
    keyOfChosenObj = Object.keys(chosenProducts)[1];
  }

  const handleClick = (id, e) => {
    const product = chosenProducts[keyOfChosenObj].filter(
      (el) => el.id === +id
    );
    setShoppingCart([...shoppingCarts, ...product]);
    setClickedProducts((prevProducts) => [...prevProducts, ...product]);

    alert("Your product has been successfully added to the cart");
  };
  useEffect(() => {
    const newProducts = [...products];
    clickedProducts.forEach((clickedProduct) => {
      newProducts.forEach((pharmacy) => {
        const key = Object.keys(pharmacy)[1];
        if (pharmacy[key]) {
          const index = pharmacy[key].findIndex(
            (product) => product.id === clickedProduct.id
          );
          if (index !== -1) {
            const removedProduct = pharmacy[key].splice(index, 1)[0];
            pharmacy[key].unshift(removedProduct);
          }
        }
      });
    });
    setProducts(newProducts);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clickedProducts, setProducts]);

  // useEffect(() => {
  //   const currentData = JSON.parse(localStorage.getItem("products"));
  //   const updatedData = currentData.map((item) => {
  //     const key = Object.keys(item)[1];
  //     const productsToUpdate = item[key];
  //     clickedProducts.forEach((clickedProduct) => {
  //       const index = productsToUpdate.findIndex(
  //         (product) => product.id === clickedProduct.id
  //       );
  //       if (index !== -1) {
  //         const removedProduct = productsToUpdate.splice(index, 1)[0];
  //         productsToUpdate.unshift(removedProduct);
  //       }
  //     });
  //     return { ...item, [key]: productsToUpdate };
  //   });

  //   localStorage.setItem("products", JSON.stringify(updatedData));
  // }, [clickedProducts]);

  return (
    <>
      {chosenProducts &&
        chosenProducts[keyOfChosenObj].map(({ avatar, title, price, id }) => (
          <Item key={id} id={id}>
            {shoppingCarts.some((item) => item.id === id) ? (
              <Icon>
                <use href={icon + "#heart-chosen"}></use>
              </Icon>
            ) : (
              <Icon>
                <use href={icon + "#heart"}></use>
              </Icon>
            )}
            <Img src={avatar} alt="medicament" />
            <Title>{title}</Title>
            <Span>Price: {price}</Span>
            <Button
              id={id}
              type="button"
              disabled={shoppingCarts.some((item) => item.id === id)}
              onClick={() => handleClick(id)}
            >
              Add to cart
            </Button>
          </Item>
        ))}
    </>
  );
};

export default PharmacyItem;
