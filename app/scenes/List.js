/**
* Sample React Native List
* https://github.com/facebook/react-native
* @flow
*/

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableHighlight
} from 'react-native';

import {connect} from 'react-redux';
import * as Actions from '../redux/actions'

import Server from '../libs/server';
import EmployeeItem from '../components/EmployeeItem';

class List extends Component<{}> {
    static navigationOptions = {
        title: 'Todos os funcionários'
    };

    componentDidMount(){
        Server.getEmployees()
        .then((result)=>{
            this.props.dispatch(Actions.getEmployees(result.data.data.employees));
        })
        .catch((err)=>{
            console.log('err', err)
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight onPress={()=>{
                        this.props.navigation.navigate('Create');
                    }}>
                    <Text>Adicionar funcionário</Text>
                </TouchableHighlight>
                <FlatList
                    data={this.props.app.employees}
                    renderItem={({item}) => <EmployeeItem {...item} navigation={this.props.navigation} />}
                    keyExtractor={(item, index) => index}
                    />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
});

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(List);
