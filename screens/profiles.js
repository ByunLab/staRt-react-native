import React from 'react';
import {Text, View} from 'react-native'
import Sidebar from '../components/sidebar';
import style from './style'

export default class ProfilesScreen extends React.Component {
  render() {
      return (
	  <View style={style.wrapper}>
	      <Sidebar navigation={this.props.navigation}
	      screenName='Profiles'></Sidebar>
	      <View style={style.screen}>
		  <Text>Profiles</Text>
	      </View>
	  </View>
    );
  }
}
