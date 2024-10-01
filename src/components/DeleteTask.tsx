import React, { useState } from "react";
import RemoveModal from "./Modals/RemoveModal";

const DeleteModal = () => {
  const deleteTask = () => {
    console.log("task deleted");
  };
  return (
    <RemoveModal
      name={"Delete"}
      remove={deleteTask}
      text={"Are you sure you want to delete this task?"}
    />
  );
};

export default DeleteModal;
