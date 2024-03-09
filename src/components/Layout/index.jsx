import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";

const Layout = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Header />
      <main>
        <Outlet />
      </main>
    </Suspense>
  );
};

export default Layout;
