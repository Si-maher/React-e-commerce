import React from "react";
import './sign-in.styles.scss'
import FormInput from "../form-input/form-input.component";
import CustomButton from "../button/button.component";
import {auth, signInWithGoogle} from '../../firebase/firebase.utils.js'

class SignIn extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }
      handleSubmit = async event => {
          event.preventDefault()
          const  {email, password} = this.state
          try{
await auth.signInWithEmailAndPassword(email, password)
this.setState({email:'', password:''})
          }catch(error){
console.log(error)
          }
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
      required handleChange = {this.handleChange}
       value = {this.state.email}>
       </FormInput>

    
    <FormInput 
    name = 'password' 
    type = 'password' 
    label ='password'
    value = {this.state.password}
    handleChange = {this.handleChange}
    required>
    </FormInput>


    <div className = 'buttons'>
    <CustomButton  type = 'submit'>sign in</CustomButton>
    <CustomButton onClick = {signInWithGoogle} isGoogleSignIn >
    sign in with Google 
    </CustomButton>
    </div>
</form>
            </div>
        )
    }
}

export default SignIn