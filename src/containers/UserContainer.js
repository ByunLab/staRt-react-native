import React from 'react';
import {
    Button,
    Text,
    View,
} from 'react-native';
import style from './style';
import {
    StyleSheet
} from 'react-native';
import {connect} from 'react-redux';

import LoginForm from '../components/login-form';

import {setEnv} from '../actions';

class UserContainer extends React.Component {
    constructor(props){
	super(props);
    }
    
    render(){
	let renderload = LoginForm;
	switch(this.props.auth.isAuthed){
	    case null:
		// auth state is unknown
		
		break;
	    case false:
		// user is known not to be authed
		renderload = LoginForm;
		break;
	    case true:
		// user is known to be authed

		break;
	    default:
		// do something?
	}
	
      return (
	  <View style={style.wrapper}>
	      <LoginForm></LoginForm>
	  </View>
      );
    }
}

const profileStyle = StyleSheet.create({
    wrapper: {
	display: 'flex',
	flex: 1,
	flexDirection: 'row'
    },
    item: {
	flex: 1
    }
});


export default connect(({auth, routes, environment}) => ({auth, routes, environment}))(UserContainer);
