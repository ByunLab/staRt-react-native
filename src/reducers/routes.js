// https://medium.com/gumtreelab/react-native-router-flux-with-redux-9966dd4041b6

import {ActionConst} from 'react-native-router-flux';

const initialState = {
    scene: {},
    hello: 'world'
}

export default function reducer(state = initialState, action = {}){
    switch(action.type){
	case ActionConst.FOCUS:
	    return {
		...state,
		scene: action.scene,
	    };
	    
	default:
	    return state;
    }
}
