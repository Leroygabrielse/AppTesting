import React, { Component } from 'react'
import { StyleSheet, Text, View, ImageBackground, StatusBar } from 'react-native'
import Images from './../config/Images'

export default class Animated extends Component {
    render() {
        return (
            <ImageBackground
            style = {styles.container}
            source = {Images.background}><StatusBar hidden = {true}/>
            

            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
