import {createStore} from 'redux';
import reducer from '../reducers';

const initialState = {
    authed: false
};

const store = createStore(reducer, initialState);

export default store;
