import React from 'react';
import {Text} from 'react-native';

export default class ParticipantsList extends React.Component {
    render(){
	return(
	    <Text {...this.props}>
		Participants list
	    </Text>
	);
    }
}
