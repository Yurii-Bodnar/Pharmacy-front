import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Preloader from "../Preloader";

const Layout = () => {
  return (
    <Suspense fallback={<Preloader />}>
      <Header />
      <main>
        <Outlet />
      </main>
    </Suspense>
  );
};

export default Layout;
