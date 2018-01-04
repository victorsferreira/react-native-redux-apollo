import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    TouchableHighlight
} from 'react-native';

import {connect} from 'react-redux';
import * as Actions from '../redux/actions'

import Server from '../libs/server';

class Employee extends Component<{}> {
    static navigationOptions = (data)=>{
        return {
            title: data.navigation.state.params.name
        };;
    }

    constructor(){
        super();

        this.state = {
            name: '',
            company_id: '',
            phone: ''
        }
    }

    componentDidMount(){
        var company_id = this.props.navigation.state.params.company_id;
        var employees = this.props.app.employees;
        for(let employee of employees){
            if(employee.company_id == company_id){
                this.setState({
                    name: employee.name,
                    company_id: employee.company_id,
                    phone: employee.phone
                });

                break;
            }
        }
    }

    delete(){
        var company_id = this.props.navigation.state.params.company_id;

        Server.deleteEmployee(company_id)
        .then((result)=>{
            this.props.dispatch(Actions.deleteEmployee(company_id));
            this.props.navigation.navigate('List');
        })
        .catch((err)=>{
            console.log('err', err)
        })
    }

    render() {
        return (
            <View>
                <Text>{this.state.name}</Text>
                <Text>{this.state.company_id}</Text>
                <Text>{this.state.phone}</Text>

                <TouchableHighlight
                    onPress={()=>{
                        this.delete();
                    }}>
                    <Text>Deletar</Text>
                </TouchableHighlight>
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

export default connect(mapStateToProps)(Employee);
