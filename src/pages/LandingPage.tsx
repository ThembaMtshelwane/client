import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

type Props = {};

const LandingPage = (props: Props) => {
  return (
    <div className="bg-primary h-screen text-white">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default LandingPage;
