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
    // static navigationOptions = {
    //     title: 'Todos os funcionários'
    // };

    static navigationOptions = {
        drawerLabel: 'list'
    };

    componentDidMount(){
        this.props.dispatch(Actions.getEmployeesAsync())
        .catch((err)=>{
            console.log('getEmployeesAsync error', err);
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight onPress={()=>{
                        this.props.navigation.navigate('About', { message: 'This is the about page '});
                    }}>
                    <Text>Sobre</Text>
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
