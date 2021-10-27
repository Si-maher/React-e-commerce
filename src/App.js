import React from 'react'
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/pages/homepage/homepage.component.jsx'
import ShopPage from './components/pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndUpPage from './components/pages/sign-in-up/sign-in-up.component';
import {auth} from './firebase/firebase.utils'






class App extends React.Component {
  constructor(){
    super()
    this.state = {
      currentUser: null
    }
  }
  unsubcribeFromAuth = null
componentDidMount() {
  this.unsubcribeFromAuth = auth.onAuthStateChanged(user => {
    this.setState({currentUser:user})
  })
}
componentWillUnmount(){
  this.unsubcribeFromAuth()
}
  render(){

    return (
      <div>
    <Header currentUser = {this.state.currentUser}/>
   <Switch>
     <Route exact path='/' component = {HomePage}/>
     <Route path = '/shop' component = {ShopPage}/> 
     <Route path = '/signin' component = {SignInAndUpPage}/> 
   </Switch>
    </div>
  );
}
}

export default App;
