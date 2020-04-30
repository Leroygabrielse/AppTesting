import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class Details extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> Details </Text>
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
