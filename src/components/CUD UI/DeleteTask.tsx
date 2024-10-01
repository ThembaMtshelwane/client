import React, { useState } from "react";
import RemoveModal from "../Modals/RemoveModal";
import { deleteTask } from "../../api/api";

type Props = {
  id: string;
};
const DeleteModal = ({ id }: Props) => {
  const deleteTaskEn = async () => {
    deleteTask(id);
  };

  return (
    <RemoveModal
      name={"Delete"}
      remove={deleteTaskEn}
      text={"Are you sure you want to delete this task?"}
    />
  );
};

export default DeleteModal;
