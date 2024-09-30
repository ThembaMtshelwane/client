import React from "react";
import AuthForm from "../AuthFrom";

type Props = {};

const SignUp = (props: Props) => {
  const signUp = async () => {
    console.log("user signed up");
  };
  return (
    <>
      <AuthForm handleFormData={signUp} isSignUp={true} />
    </>
  );
};

export default SignUp;
