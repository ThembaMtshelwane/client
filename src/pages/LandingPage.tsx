import React from "react";
import { Outlet } from "react-router-dom";

type Props = {};

const LandingPage = (props: Props) => {
  return (
    <div className="bg-primary h-screen text-white">
      <Outlet />
    </div>
  );
};

export default LandingPage;
