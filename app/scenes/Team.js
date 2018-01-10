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

class Team extends Component<{}> {
    static navigationOptions = (data) =>{
        return {
            drawerLabel: ()=>{
                return null;
            }
        }
    };

    constructor(){
        super();

        this.state = {
            name: '',
            description: ''
        }
    }

    componentDidMount(){
        // var company_id = this.props.navigation.state.params.company_id;
        // var teams = this.props.app.teams;
        // for(let team of teams){
        //     if(team.company_id == company_id){
        //         this.setState({
        //             name: team.name,
        //             description: team.description
        //         });
        //
        //         break;
        //     }
        // }
    }

    delete(){
        var company_id = this.props.navigation.state.params.company_id;

        Server.deleteTeam(company_id)
        .then((result)=>{
            this.props.dispatch(Actions.deleteTeam(company_id));
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
                <Text>{this.state.description}</Text>

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

export default connect(mapStateToProps)(Team);
