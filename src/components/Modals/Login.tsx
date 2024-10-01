import React from "react";
import AuthForm from "../AuthFrom";
import Modal from "./Modal";

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
