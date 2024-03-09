import { Container, Link } from "./LeftSideBarNav.styled";

const LeftSideBarNav = () => {
  return (
    <Container>
      <Link to={"/pharmacy"}>Pharmacy</Link>
      <Link to={"/drugs24"}>Drugs 24</Link>
      <Link to={"/pharmacy3i"}>Pharmacy3i</Link>
      <Link to={"/pharmacy24h"}>Pharmacy24h</Link>
    </Container>
  );
};

export default LeftSideBarNav;
