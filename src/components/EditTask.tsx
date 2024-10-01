import React from "react";
import Modal from "./Modals/Modal";
import EditForm from "./Forms/EditForm";

type Props = {};

const EditTask = (props: Props) => {
  return (
    <Modal name={"Edit"}>
      <EditForm />
    </Modal>
  );
};

export default EditTask;
