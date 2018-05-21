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
    password: t.String,
    confirmPassword: t.String
});

const options = {
    auto: 'placeholders',
    fields: {
	email: {
	},
	password: {
	    password: true,
	    secureTextEntry: true
	},
	confirmPassword: {
	    password: true,
	    secureTextEntry: true
	}
    }
};

const defaultValues = {
    email: "jon@sharebyteaching.org",
    password: 'ragnorak',
    confirmPassword: 'ragnorak'
}

class SignupForm extends React.Component{
    constructor(props){
	super(props);
	this.state = {
	    email: '',
	    password: '',
	    confirmPassword: '',
	};
    }
    
    render(){
	return (
	    <View>
		<Form    
		    ref="form"
		    type={User}
		    value={defaultValues}
		    options={options} />
		<TouchableHighlight style={style.button}
				    onPress={() => {this.handleSignup()}}
				    underlayColor='#99d9f4'>
		    <Text style={style.buttonText}>Signup</Text>
		</TouchableHighlight>
	    </View>
	);
    }
    
    handleSignup(){
	var user = this.refs.form.getValue();
	firebase.auth()
		.createUserWithEmailAndPassword(user.email, user.password)
		.then(() => {

		})
		.catch((error) => {
		    alert(error.message);
		});
    }

}
export default SignupForm;
