import React from 'react';
import Login from './components/Login'
import Welcome from './components/Welcome'
import Register from './components/Register'
import {createAppContainer} from "react-navigation"
import {createStackNavigator} from "react-navigation-stack"


const AppNavigator = createStackNavigator(
  {
    Welcome: Welcome,
    Register: Register,
    Login: Login
  },
  {
    initialRouteName: "Login"
  }
)

const AppContainer = createAppContainer(AppNavigator)

export default class App extends React.Component {
  render() {
    return <AppContainer />
  }
}