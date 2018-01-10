import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    TouchableHighlight
} from 'react-native';

import {connect} from 'react-redux';
import * as Actions from '../redux/actions'

import Server from '../libs/server';

class Create extends Component<{}> {
    // static navigationOptions = {
    //     title: 'Criar novo funcionário'
    // };

    static navigationOptions = {
        drawerLabel: 'create'
    };

    constructor(){
        super();

        this.state = {
            name: '',
            company_id: '',
            phone: ''
        };
    }

    save(){
        Server.createEmployee(this.state.name, this.state.company_id, this.state.phone)
        .then((result)=>{
            this.props.dispatch(Actions.createEmployee(result.data.data.createEmployee));
            this.props.navigation.navigate('List');
        })
        .catch((err)=>{
            console.log('err', err)
        })
    }

    render() {
        return (
            <View>
                <View>
                    <Text>Nome</Text>
                    <TextInput
                        onChangeText={(text) => this.setState({name: text})}
                        value={this.state.text}
                        />
                </View>

                <View>
                    <Text>Matrícula</Text>
                    <TextInput
                        onChangeText={(text) => this.setState({company_id: text})}
                        value={this.state.text}
                        />
                </View>

                <View>
                    <Text>Telefone</Text>
                    <TextInput
                        onChangeText={(text) => this.setState({phone: text})}
                        value={this.state.text}
                        />
                </View>

                <TouchableHighlight onPress={()=>{
                        this.save();
                    }}>
                    <Text>Salvar</Text>
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

export default connect(mapStateToProps)(Create);
