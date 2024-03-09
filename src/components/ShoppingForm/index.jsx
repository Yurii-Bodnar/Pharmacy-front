import React, { useContext, useEffect, useState } from "react";
import { createOrder } from "../../utility/pharmacyApi";
import { ShoppingCartContext } from "../../utility/context";
import {
  Box,
  Button,
  Container,
  Form,
  Input,
  Label,
  Span,
} from "./ShoppingForm.styled";

const ShoppingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const { shoppingCarts } = useContext(ShoppingCartContext);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const total = shoppingCarts.reduce(
      (acc, item) => acc + item.price * item.count,
      0
    );
    setTotalPrice(total);
  }, [shoppingCarts]);

  const handleSubmit = (e) => {
    e.preventDefault();
    createOrder({ ...formData, order: shoppingCarts }).then((data) => {
      alert(data.data.message);
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="name">Name:</Label>
        <Input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          pattern="[A-ZА-ЯЁҐІЇЄ][a-zA-Zа-яёґіїє]{1,}" // Оновлений регулярний вираз
          title="Please enter at least 2 characters with the first one in uppercase" // Повідомлення про помилку
        />

        <Label htmlFor="email">Email:</Label>
        <Input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <Label htmlFor="phone">Phone:</Label>
        <Input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          pattern="[0-9]{10}"
          title="Please enter a 10-digit phone number"
        />

        <Label htmlFor="address">Address:</Label>
        <Input
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        ></Input>

        <Box>
          <Button type="submit">Submit</Button>
          <Span>Total price: {totalPrice}</Span>
        </Box>
      </Form>
    </Container>
  );
};

export default ShoppingForm;
