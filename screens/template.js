import React from 'react';
import {Text, View} from 'react-native'
import Sidebar from '../components/sidebar';
import style from './style'

export default class Screen extends React.Component {
  render() {
      return (
	  <View style={style.wrapper}>
	      <Sidebar navigation={this.props.navigation}
	      screenName=''></Sidebar>
	      <View style={style.screen}>
		  <Text></Text>
	      </View>
	  </View>
    );
  }
}
