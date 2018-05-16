import {combineReducers} from 'redux';
import routes from './routes';
import auth from './auth';
import environment from './environment';
import firebase from './firebase';

export default combineReducers({
    auth,
    environment,
    routes,
});
