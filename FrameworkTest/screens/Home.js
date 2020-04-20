import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import GameScreen from './GameScreen'
import TournamentScreen from './TournamentScreen'
import ProfileScreen from './ProfileScreen'
import RankScreen from './RankScreen'
import MoreMenuScreen from './MoreMenuScreen'

const Tabs = createBottomTabNavigator();

export default function HomeScreen( {route }) {
    const { name } = route.params

    return (
        <Tabs.Navigator initialRouteName={name}>
            <Tabs.Screen name="Game" component={GameScreen} />
            <Tabs.Screen name="Toernooi" component={TournamentScreen} />
            <Tabs.Screen name="Profiel" component={ProfileScreen} />
            <Tabs.Screen name="Klassement" component={RankScreen} />
            <Tabs.Screen name="Meer" component={MoreMenuScreen} />
        </Tabs.Navigator>
    );
  }