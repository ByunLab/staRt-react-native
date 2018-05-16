import React from 'react';
import {Text} from 'react-native';
import style from './style';

export default class ScreenHeader extends React.Component {
    render(){
	return (
	    <Text style={style.header}>
		{this.props.children}
	    </Text>
	)
    }
}
