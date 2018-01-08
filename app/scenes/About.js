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
            // title: 'Sobre'
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
