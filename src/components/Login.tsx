import React from "react";
import AuthForm from "./Forms/AuthFrom";
import Modal from "./Modals/Modal";

type Props = {};

const Login = (props: Props) => {
  const login = async () => {
    console.log("logged in");
  };
  return (
    <Modal name={"Login"}>
      <AuthForm handleFormData={() => {}} />
    </Modal>
  );
};
export default Login;
