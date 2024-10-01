import React from "react";
import AuthForm from "./Forms/AuthFrom";
import Modal from "./Modals/Modal";

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
