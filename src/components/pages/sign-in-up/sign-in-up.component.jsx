import React from "react";
import'./sign-in-up.styles.scss'
import SignIn from "../../sign-in/sign-in.component";
import SignUp from "../../sign-up/sign-up.component";

const SignInAndUpPage = () => (
    <div className ='sign-in-up'>
<SignIn/>
<SignUp/>
    </div>
)
export default SignInAndUpPage