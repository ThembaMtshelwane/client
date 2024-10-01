import React from "react";
import AuthForm from "../AuthFrom";
import Modal from "./Modal";

type Props = {};

const SignUp = (props: Props) => {
  const signUp = async () => {
    console.log("user signed up");
  };
  return (
    <>
      <Modal name={"Sign-up"}>
        <AuthForm handleFormData={() => {}} isSignUp={true} />
      </Modal>
    </>
  );
};

export default SignUp;
