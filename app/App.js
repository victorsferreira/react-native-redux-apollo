import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

import { Provider, connect } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';

import routes from './routes';

import createReducers from './redux/reducers';

const Navigation = StackNavigator(routes);

const reducers = createReducers(Navigation);

// Store
const store = createStore(reducers);
store.subscribe(()=>{
    console.log('A new action was dispatched', store.getState());
});

// Redux helpers
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
