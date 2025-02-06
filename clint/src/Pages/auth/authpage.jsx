import SignIn from "@/components/auth/signin/signin";
import SignUp from "@/components/auth/signup/signup";
import CommonButton from "@/components/common-button/Common-button";
import { useState } from "react";

function AuthPage() {
  const [isLoginView, setisLoginView] = useState(true);

  return (
    <div className="flex flex-auto flex-col min-h-screen h-full">
      <div className="flex h-full flex-col justify-center items-center bg-white">
        <h2 className="text-3xl font-bold">Welcome</h2>
        <div className="mt-4">{isLoginView ? <SignIn /> : <SignUp />}</div>
        <div className="mt-5">
          <CommonButton
            type={"button"}
            onClick={() => setisLoginView(!isLoginView)}
            buttontext={isLoginView ? "Switch To Sign Up" : "Switch To Sign In"}
          />
        </div>
      </div>
    </div>
  );
}
export default AuthPage;
