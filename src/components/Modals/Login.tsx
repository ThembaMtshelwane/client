import React from "react";
import AuthForm from "../AuthFrom";

type Props = {};

const Login = (props: Props) => {
  const login = async () => {
    console.log("user signed up");
  };
  return (
    <>
      <AuthForm handleFormData={login} isSignUp={false} />
    </>
  );
};
export default Login;
