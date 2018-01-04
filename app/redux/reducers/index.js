import app_reducer from './app';
import { combineReducers } from 'redux';

export default function(Navigation){
    const nav = function(state, action){
        var next_state = Navigation.router.getStateForAction(action, state);
        return next_state || state;
    }

    return combineReducers({
        nav,
        app: app_reducer
    });
}
