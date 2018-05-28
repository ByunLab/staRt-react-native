import React from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    Button
} from 'react-native';
import style from '../../style';

import { withFirebase } from 'react-redux-firebase'

class ProfileControl extends React.Component{
    constructor(props){
	super(props);
    }
    
    render(){
	return (
	    <View style={{flex: 1}}>
		<TouchableHighlight style={style.button}
				    onPress={() => {this.handleLogout()}}
				    underlayColor='#99d9f4'>
		    <Text style={style.buttonText}>Logout</Text>
		</TouchableHighlight>
	    </View>
	);
    }
    
    handleLogout(){
	this.props.firebase.logout();
	/*
	firebase.auth().signInWithEmailAndPassword(
	).then((data) => {
	    // do something with data.user?
	    this.props.login();

	});
	*/
    }

}

export default withFirebase(ProfileControl);
