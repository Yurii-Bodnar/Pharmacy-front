import ShoppingForm from "../components/ShoppingForm";
import ShoppingList from "../components/ShoppingList";
import { Box, Section } from "./ShoppingCartPage.styled";

const ShoppingCartPage = () => {
  return (
    <Section>
      <ShoppingForm />
      <Box>
        <ShoppingList />
      </Box>
    </Section>
  );
};

export default ShoppingCartPage;
