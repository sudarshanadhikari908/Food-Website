import React from "react";
import { GoogleLogin } from "react-google-login";
import { useRouter } from "next/router";

function LoginGoogle() {
  const clientId =
    "480252373417-f9qp8k9uops5b2jnn61mibo7od0kbqts.apps.googleusercontent.com";

  const router = useRouter();

  const onLoginSuccess = () => {
    router.push("/");
  };

  const onLoginFailure = (res: any) => {
    router.push("/login");
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Sign In"
        onSuccess={onLoginSuccess}
        onFailure={onLoginFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
}

export default LoginGoogle;
