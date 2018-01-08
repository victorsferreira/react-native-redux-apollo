import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

// import { ApolloClient } from 'apollo-client';
// import { HttpLink } from 'apollo-link-http';
// import { InMemoryCache } from 'apollo-cache-inmemory';
// import { ApolloProvider } from 'react-apollo';
// import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-client-preset';

import { Provider, connect } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { addNavigationHelpers } from 'react-navigation';

import Navigation from './routes';
import createReducers from './redux/reducers';

const reducers = createReducers(Navigation);
const store = createStore(reducers);

store.subscribe(()=>{
    console.log('A new action was dispatched', store.getState());
});

// const apollo_client = new ApolloClient({
//   // By default, this client will send queries to the
//   //  `/graphql` endpoint on the same host
//   link: new HttpLink({uri: 'http://192.168.1.105:8080/graphql'}),
//   cache: new InMemoryCache()
// });

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
