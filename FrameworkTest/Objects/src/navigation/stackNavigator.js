import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import preGameScreen from './../screens/preGameScreen'
import GameScreen from './../screens/gameScreen'
import AnimatedScreen from './../screens/animationTutorial';

const MainStack = createStackNavigator();

export default class Navigator extends Component {
    render() {
        return (
            <NavigationContainer>
                <MainStack.Navigator>
                    <MainStack.Screen name="AnimatedScreen" component={AnimatedScreen} options={{headerShown: false}}/>
                    <MainStack.Screen name="preGame" component={preGameScreen}/>
                    <MainStack.Screen name="Game" component={GameScreen}/>
                </MainStack.Navigator>
            </NavigationContainer>
        )
    }
}

