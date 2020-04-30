import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'

export default class PreGameScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name_player1: '',
            name_player2: ''
        }
    }
    setPlayers = () => {   
        this.props.navigation.navigate("Game",[this.state.name_player1,this.state.name_player2])     
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput 
                onChangeText = {(name_player1)=>this.setState({name_player1})}
                placeholder="Enter name of Player 1" />
                <TextInput 
                onChangeText = {(name_player2)=>this.setState({name_player2})}
                placeholder="Enter name of Player 2" />
                <TouchableOpacity
                onPress={this.setPlayers}>
                    <Text>Start</Text>
                </TouchableOpacity>
            </View>
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
