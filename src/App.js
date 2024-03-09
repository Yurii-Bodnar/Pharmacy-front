import { Suspense, lazy, useEffect, useState } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { ProductsContext, ShoppingCartContext } from "./utility/context";
import Layout from "./components/Layout/index.jsx";
import PharmacyList from "./components/PharmacyList/index.jsx";

const ShopPage = lazy(() => import("./pages/ShopPage.jsx"));
const ShoppingCartPage = lazy(() => import("./pages/ShoppingCartPage.jsx"));

function App() {
  const [products, setProducts] = useState([]);
  const [shoppingCarts, setShoppingCart] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const savedShoppingCarts = JSON.parse(
      localStorage.getItem("shoppingCarts")
    );
    if (savedShoppingCarts?.length > 0) {
      setShoppingCart(savedShoppingCarts);
    }
  }, [setShoppingCart]);

  useEffect(() => {
    localStorage.setItem("shoppingCarts", JSON.stringify(shoppingCarts));
  }, [shoppingCarts]);

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("pharmacy");
    }
  }, [location.pathname, navigate]);

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <ProductsContext.Provider value={{ products, setProducts }}>
        <ShoppingCartContext.Provider
          value={{ shoppingCarts, setShoppingCart }}
        >
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<ShopPage />}>
                <Route path="drugs24" element={<PharmacyList />} />
                <Route path="pharmacy" element={<PharmacyList />} />
                <Route path="pharmacy3i" element={<PharmacyList />} />
                <Route path="pharmacy24h" element={<PharmacyList />} />
              </Route>
              <Route path="/carts" element={<ShoppingCartPage />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </ShoppingCartContext.Provider>
      </ProductsContext.Provider>
    </Suspense>
  );
}

export default App;
