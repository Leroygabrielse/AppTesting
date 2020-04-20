import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import fire from '../database/Fire';

export default class MoreMenuScreen extends React.Component {

    logout = () => {
        fire.auth().signOut()
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>More Menu</Text>
                <TouchableOpacity onPress={this.logout}>
                    <Text>Logout</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});