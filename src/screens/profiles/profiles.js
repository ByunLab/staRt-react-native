import React from 'react';
import {View} from 'react-native'
import Sidebar from '../../components/sidebar';
import ScreenHeader from '../../components/screen-header';
import {ParticipantsList, ParticipantProfile} from './participants';
import style from '../style'
import {
    StyleSheet
} from 'react-native';

export default class ProfilesScreen extends React.Component {
  render() {
      return (
	  <View style={style.wrapper}>
	      <Sidebar navigation={this.props.navigation}
		       screenName='profiles'></Sidebar>
	      <View style={style.screen}>
		  <ScreenHeader>
		      Profiles
		  </ScreenHeader>
		  <View style={[profileStyle.wrapper, style.subscreen]}>
		      <ParticipantsList style={profileStyle.item}></ParticipantsList>
		      <ParticipantProfile style={profileStyle.item}></ParticipantProfile>
		  </View>
	      </View>
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
