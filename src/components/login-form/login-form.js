import React from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    Button
} from 'react-native';
import style from '../../style';

import * as firebase from 'firebase';
import t from 'tcomb-form-native';

const Form = t.form.Form;

const User = t.struct({
    email: t.String,
    password: t.String
});

const options = {
    auto: 'placeholders',
    fields: {
	email: {
	},
	password: {
	    password: true,
	    secureTextEntry: true
	}
    }
};

const defaultValues = {
    email: 'jon@sharebyteaching.org',
    password: 'ragnorak'
}

class LoginForm extends React.Component{
    constructor(props){
	super(props);
	this.state = {
	    email: '',
	    password: ''
	};
    }
    
    render(){
	return (
	    <View style={{flex: 1}}>
		<Form    
		    ref="loginForm"
		    type={User}
		    value={defaultValues}
		    options={options} />
		<TouchableHighlight style={style.button}
				    onPress={() => {this.handleLogin()}}
				    underlayColor='#99d9f4'>
		    <Text style={style.buttonText}>Login</Text>
		</TouchableHighlight>
	    </View>
	);
    }
    
    handleLogin(){
	var user = this.refs.loginForm.getValue();
	
	firebase.auth().signInWithEmailAndPassword(
	    user.email,
	    user.password
	).then((data) => {
	    this.props.login(data);

	}).catch((error) => {
	    switch(error.code){
		case "auth/network-request-failed":

		    break;
		case "auth/user-disabled":

		    break;
		case "auth/user-not-found":
		    
		    break;
		default:

		    break;
	    }
	    // alert(JSON.stringify(error));
	});
    }

}
export default LoginForm;
