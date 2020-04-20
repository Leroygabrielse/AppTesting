import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import fire from './database/Fire'

import HomeScreenStack from './screens/Home'
import Login from './screens/Login'
import Register from './screens/Register'
import Forgot from './screens/Forgot'
import MainMenu from './screens/MainMenu'

const HomeStack = createStackNavigator();
const AuthStack = createStackNavigator();

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isLoggedIn: false
    }
  }

  componentDidMount() {
    fire.auth().onAuthStateChanged((user) => {
        if (user) {
            this.setState({ isLoggedIn: true });
        } else {
            this.setState({ isLoggedIn: false });
        }
    });
}

  render (){
  return (
    <NavigationContainer>
      {!this.state.isLoggedIn ? (
      <AuthStack.Navigator>
        <AuthStack.Screen name="Login" component={Login} options={{headerTintColor: '#F26421'}} />
        <AuthStack.Screen name="Register" component={Register} />
        <AuthStack.Screen name="Password Reset" component={Forgot} />
      </AuthStack.Navigator>
      ) : (
      <HomeStack.Navigator>
        <HomeStack.Screen name="Main Menu" component={MainMenu} />
        <HomeStack.Screen name="Home" component={HomeScreenStack} />
      </HomeStack.Navigator>
      )}
    </NavigationContainer>
  );
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

