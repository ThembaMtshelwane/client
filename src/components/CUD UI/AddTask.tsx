import React from "react";
import Modal from "../Modals/Modal";
import AddForm from "../Forms/AddForm";

type Props = {};

const AddTask = (props: Props) => {
  return (
    <Modal name={"Add Task"}>
      <AddForm />
    </Modal>
  );
};

export default AddTask;
