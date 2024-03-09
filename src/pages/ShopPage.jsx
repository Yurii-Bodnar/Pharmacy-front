import { useLocation } from "react-router-dom";
import PharmacyList from "../components/PharmacyList";
import LeftSideBarNav from "../components/LeftSideBarNav";
import { Box, Section } from "./ShopPage.styled";

const ShopPage = () => {
  const location = useLocation();
  return (
    <Section>
      <LeftSideBarNav />
      {location.pathname === "/drugs24" && (
        <Box>
          <PharmacyList />
        </Box>
      )}
      {location.pathname === "/pharmacy" && (
        <Box>
          <PharmacyList />
        </Box>
      )}
      {location.pathname === "/pharmacy3i" && (
        <Box>
          <PharmacyList />
        </Box>
      )}
      {location.pathname === "/pharmacy24h" && (
        <Box>
          <PharmacyList />
        </Box>
      )}
    </Section>
  );
};

export default ShopPage;
