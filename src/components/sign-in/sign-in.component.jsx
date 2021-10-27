import React from "react";
import './sign-in.styles.scss'
import FormInput from "../form-input/form-input.component";
import CustomButton from "../button/button.component";
import {signInWithGoogle} from '../../firebase/firebase.utils.js'

class SignIn extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }
      handleSubmit = event => {
            event.preventDefault()
            this.setState({email:'', password:''})
        }
        handleChange = event => {
            const {value, name} = event.target
            this.setState({[name]: value})
        }
    render() {
        return(
            <div className = 'sign-in'>
            <h2>I already have an account</h2>
           <span>Sign in with your email and password</span> 
<form onSubmit = {this.handleSubmit} >
    <FormInput
     name = 'email' 
     type = 'email'
      label = 'email'
      required handleChange = {this.handleChange} value = {this.state.email}></FormInput>
    
    <FormInput 
    name = 'password' 
    type = 'password' 
    label ='password'
    required 
    value = {this.state.email}
    handleChange = {this.handleChange}></FormInput>

    <div className = 'buttons'>
    <CustomButton  type = 'submit'>sign in</CustomButton>
    <CustomButton onClick = {signInWithGoogle} isGoogleSignIn >
    {''}sign in with Google {''}
    </CustomButton>
    </div>
</form>
            </div>
        )
    }
}

export default SignIn