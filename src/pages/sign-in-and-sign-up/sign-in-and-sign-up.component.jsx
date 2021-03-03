import React from "react";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component"

import "./sign-in-and-sign-up.style.scss";

const SingInAndSignUpPage = () => (
    <div className="sign-in-and-sig-up">
        <SignIn />
        <SignUp />
    </div>
);

export default SingInAndSignUpPage;