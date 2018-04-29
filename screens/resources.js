import React from 'react';
import {Text, View} from 'react-native'
import Sidebar from '../components/sidebar';
import style from './style'

export default class ResourcesScreen extends React.Component {
  render() {
      return (
	  <View style={style.wrapper}>
	      <Sidebar navigation={this.props.navigation}
	      screenName='Resources'></Sidebar>
	      <View style={style.screen}>
		  <Text>Resources</Text>
	      </View>
	  </View>
    );
  }
}
