import React from "react";
import Modal from "../Modals/Modal";
import EditForm from "../Forms/EditForm";

type Props = {
  id:string
};

const EditTask = ({id}: Props) => {
  return (
    <Modal name={"Edit"}>
      <EditForm  id={id}/>
    </Modal>
  );
};

export default EditTask;
