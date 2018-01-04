import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';

export default class EmployeeItem extends Component {
    render() {
        return (
            <TouchableHighlight
                onPress={()=>{
                    this.props.navigation.navigate('Employee', {company_id: this.props.company_id, name: this.props.name})
                }}>
                <View>
                    <Text>{this.props.name}</Text>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom: 1
    }
});
