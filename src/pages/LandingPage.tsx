import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import SignUp from "../components/Modals/SignUp";
import Login from "../components/Modals/Login";

type Props = {};

const LandingPage = (props: Props) => {
  return (
    <div className="bg-primary h-screen text-white">
      <SignUp />
      <Login />
    </div>
  );
};

export default LandingPage;
