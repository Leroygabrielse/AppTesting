import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function GameScreen({ navigation }) {
    return (
        <View style={styles.container}>

            <View style={styles.flex1and2}>

                <View style={styles.gameFlex}>
                    <TouchableOpacity onPress={() => navigation.navigate("Home", { name: "Game" })}>
                        <Text>Game</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.ToernooiFlex}>
                    <TouchableOpacity onPress={() => navigation.navigate("Home", { name: "Toernooi" })}>
                        <Text>Toernooi</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.flex3and4}>

                <View style={styles.ProfielFlex}>
                    <TouchableOpacity onPress={() => navigation.navigate("Home", { name: "Profiel" })}>
                        <Text>Profiel</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.KlassementFlex}>
                    <TouchableOpacity onPress={() => navigation.navigate("Home", { name: "Klassement" })}>
                        <Text>Klassement</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    flex1and2: {
        flexDirection: 'row',
        width: '100%',
        height: '50%'
    },
    flex3and4: {
        flexDirection: 'row',
        width: '100%',
        height: '50%'

    },
    gameFlex: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F26421'
    },
    ToernooiFlex: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#898989'
    },
    ProfielFlex: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E3E3E3'
    },
    KlassementFlex: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5DA271'
    }
});