import React from 'react';
import {connect} from 'react-redux';

class EnvironmentService extends React.Component{
    constructor(props){
	super(props);
    }

    hello(){
	return 'world';
    }
}


const configs = {
    firebase: {
	dev: {
	    apiKey: "AIzaSyDP9aJBSE69ZJd7gXbLQZXQwKA2HLnw5No",
	    authDomain: "start-rn-development.firebaseapp.com",
	    databaseURL: "https://start-rn-development.firebaseio.com",
	    projectId: "start-rn-development",
	    storageBucket: "start-rn-development.appspot.com",
	    messagingSenderId: "1025972558572"
	}
    }
}

export default connect(({}) => ({}))(EnvironmentService);
