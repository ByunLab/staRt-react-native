import React from 'react';
import {Text} from 'react-native';

export default class ParticipantProfile extends React.Component {
    render(){
	return (
	    <Text {...this.props}>
		Participant Profile
	    </Text>
	);
    }
}
