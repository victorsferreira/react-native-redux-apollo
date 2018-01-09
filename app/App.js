import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

import thunkMiddleware from 'redux-thunk';
import { Provider, connect } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { addNavigationHelpers } from 'react-navigation';

import Navigation from './routes';
import createReducers from './redux/reducers';

const reducers = createReducers(Navigation);
const store = createStore(reducers, applyMiddleware(thunkMiddleware));

store.subscribe(()=>{
    console.log('A new action was dispatched', store.getState());
});

function mapStateToProps(state) {
    return {
        nav: state.nav
    }
}

class AppNavigation extends Component<{}> {
    static navigationOptions = {
        title: 'Home'
    };

    render() {
        return (
            <Navigation
                navigaton={addNavigationHelpers({
                    dispatch: this.props.dispatch,
                    state: this.props.nav
                })}>
            </Navigation>
        );
    }
}

const AppNavigationConnection = connect(mapStateToProps)(AppNavigation);

const App = function(){
    return (
        <Provider store={store}>
            <AppNavigationConnection />
        </Provider>
    );
};

export default App;
