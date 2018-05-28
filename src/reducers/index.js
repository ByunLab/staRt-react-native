import {combineReducers} from 'redux';
import routes from './routes';
import user from './user';
import environment from './environment';
import firebase from './firebase';

export default combineReducers({
    environment,
    routes,
    user,
});
