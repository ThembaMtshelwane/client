import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

type Props = {};

const MainLayout = (props: Props) => {
  return (
    <div className="bg-primary h-screen text-white font-robotoMono ">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
