//scenes
import List from './scenes/List';
import Create from './scenes/Create';
import Employee from './scenes/Employee';
import About from './scenes/About';

import React, { Component } from 'react';
import {
    Text,
    View,
    ScrollView
} from 'react-native';

import { StackNavigator, DrawerNavigator, DrawerItems } from 'react-navigation';

// const routes = {
//     List: { screen: List },
//     Create: { screen: Create },
//     Employee: { screen: Employee }
// };

const MainNavigator = DrawerNavigator({
    List: { screen: List },
    Create: { screen: Create },
    Employee: { screen: Employee }
}, {
    contentComponent: (props) => {
        return (
            <ScrollView>
                <DrawerItems {...props} />
                <Text>Your Own Footer Area After</Text>
            </ScrollView>
        )
    },
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
});

// Routes
const routes = {
    List: {
        screen: MainNavigator,
        navigationOptions: ({navigation}) => ({
            //esconde o header dessa cena
            header: null
        })
    },
    About: {
        screen: About,
        navigationOptions: ({navigation}) => ({
            //esconde o header dessa cena
            header: (
                <View>
                    <Text>Header do Sobre</Text>
                </View>
            )
        })
    }
};

const Navigator = StackNavigator(routes,{
    // esconde todos os header
    // header: {visible: false},
    // headerMode: 'none'
});

export default Navigator;
