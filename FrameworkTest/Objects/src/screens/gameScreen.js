import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import createPlayer from './../models/Player'

export default class Game extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name_player1: this.props.route.params[0],
            name_player2: this.props.route.params[1],
        }
    }

    initPlayers(){
        const PLAYER_ONE = createPlayer(this.state.name_player1)
        const PLAYER_TWO = createPlayer(this.state.name_player2)
        console.log(PLAYER_ONE);
        
    }
    
    render() {
        this.initPlayers()
        return (
            <View style={styles.container}>
                <Text></Text>
                <Text></Text>
                <TouchableOpacity onPress={this.scoreChange}>
                    <Text>Change Score</Text>
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
