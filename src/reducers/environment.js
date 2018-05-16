const initialState = {
    env: 'development'
}

export default function reducer(state = initialState, action = {}){
    switch(action.type){
	case "SET_ENV":
	    return Object.assign({}, state, {
		env: action.env
	    });
	default:
	    return state;
    }
}
