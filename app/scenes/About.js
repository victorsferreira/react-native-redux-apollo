import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

class About extends Component<{}> {
    static navigationOptions = (data)=>{
        return {
            title: data.navigation.state.params.message
        };
    }

    render() {
        return (
            <View>
                <Text>Sobre o app</Text>
            </View>
        );
    }
}
export default About;
