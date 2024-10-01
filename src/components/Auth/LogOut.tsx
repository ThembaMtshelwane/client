import React, { useState } from "react";
import RemoveModal from "../Modals/RemoveModal";

const LogOut = () => {
  const logoutUser = () => {
    console.log("user logged out");
  };
  return (
    <RemoveModal
      name="LogOut"
      remove={logoutUser}
      text={"Are you sure you want to log out?"}
    />
  );
};

export default LogOut;
