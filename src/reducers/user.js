import {
    LOGIN,
    LOGOUT
} from '../actions';

const initialState = {
    isAuthed: false,
    data: null
}

export default function reducer(state = initialState, action = {}){
    switch(action.type){
	case LOGIN:
	    return Object.assign({}, state, {
		isAuthed: true
	    });
	default:
	    return state;
    }
}
