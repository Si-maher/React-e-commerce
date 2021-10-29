import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import HomePage from './components/pages/homepage/homepage.component.jsx'
import ShopPage from './components/pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndUpPage from './components/pages/sign-in-up/sign-in-up.component';
import {auth, createUserProfileDoc} from './firebase/firebase.utils'
import { connect } from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions.jsx'






class App extends React.Component {

  unsubcribeFromAuth = null
componentDidMount() {
  const {setCurrentUser} = this.props
  this.unsubcribeFromAuth = auth.onAuthStateChanged( async userAuth => {
   if(userAuth) {
     const userRef = await createUserProfileDoc(userAuth)

     userRef.onSnapshot(snapShot => {
       setCurrentUser({
         currentUser: {
           id:snapShot.id,
           ...snapShot.data()
         }
       })
       console.log(this.state)
     })
   } else {
     setCurrentUser(userAuth)
   }
  })
}
componentWillUnmount(){
  this.unsubcribeFromAuth()
}
  render(){

    return (
      <div>
    <Header/>
   <Switch>
     <Route exact path='/' component = {HomePage}/>
     <Route path = '/shop' component = {ShopPage}/> 
     <Route exact path = '/signin' render = {() => 
     this.props.currentUser ? (<Redirect to = '/'/>) : 
     (<SignInAndUpPage/>)}/> 
   </Switch>
    </div>
  );
}
}
const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(null, mapDispatchToProps ) (App);
