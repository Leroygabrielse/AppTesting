import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import StackNavigator from './src/navigation/stackNavigator'
import imageRoutes from './src/config/Images'
import { AppLoading } from 'expo'
import { Asset } from 'expo-asset'

function cacheImages(images) {
    return images.map(image => {
        if(typeof image === "string"){
            return Image.prefetch(image)
        } else {
            return Asset.fromModule(image).downloadAsync();
        }
    })
}


export default class example extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isReady: false
        }
    }

    async _loadAssetsAsync() {
        const imageAssets = cacheImages([imageRoutes.background]);

        await Promise.all([...imageAssets])
    }

    render() {
        if (!this.state.isReady){
            return (
                <AppLoading
                startAsync={this._loadAssetsAsync}
                onFinish={()=>this.setState({ isReady: true })}
                onError={console.warn}
                />
            )
        }
        return (
            <StackNavigator />
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

