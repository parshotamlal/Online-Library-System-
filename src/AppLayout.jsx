import React from "react";
import { Header } from "./Components/Header/Header.jsx";
import { Outlet } from "react-router-dom";

import { Footer } from "./Components/Footer/Footer.jsx";

export const AppLayout = () => {
  return (
    <>
      {" "}
      <div className="m-3">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};
