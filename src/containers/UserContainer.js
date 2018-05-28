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

import {
    login,
    logout,
} from '../actions';

import LoginForm from '../components/login-form';
import SignupForm from '../components/signup-form';

import ProfileControl from '../components/profile-control';

import SegmentedControlTab from 'react-native-segmented-control-tab';

const tabs = ['login', 'signup'];


class UserContainer extends React.Component {
    constructor(props){
	super(props);
	this.state = {
	    currentTabIndex: 0
	};
    }

    handleSegmentChange = (index) => {
	this.setState({
	    currentTabIndex: index
	});
    }
    
    render(){
	var renderload;
	switch(this.props.user.isAuthed){
	    case null:
		// auth state is unknown
		
		break;
	    case false:
		// user is known not to be authed
		let form = tabs[this.state.currentTabIndex] == 'login' ? <LoginForm /> : <SignupForm />;
		renderload = <View>
		    <SegmentedControlTab
			values={['login', 'signup']}
			selectedIndex={this.state.currentTabIndex}
			onTabPress={this.handleSegmentChange}
		    />
		    {form}
		</View>;
		break;
	    case true:
		// user is known to be authed
		renderload = <ProfileControl />
		break;
	    default:
		// do something?
	}

	return renderload;
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


const mapStateToProps = state => ({
    user: state.user,
    routes: state.routes,
    environment: state.environment
});


const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps)(UserContainer);
