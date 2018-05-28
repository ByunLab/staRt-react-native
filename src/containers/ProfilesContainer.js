import React from 'react';
import {
    Text,
    View
} from 'react-native'
import SideBar from '../components/sidebar';
import ScreenHeader from '../components/screen-header';
import style from './style'
import {
    StyleSheet
} from 'react-native';

import UserContainer from './UserContainer';
import {connect} from 'react-redux';

class ProfilesContainer extends React.Component {

    constructor(props){
	super(props);
    }
    
  render() {
      /*
	 <ParticipantsList style={profileStyle.item}></ParticipantsList>
	 <ParticipantProfile style={profileStyle.item}></ParticipantProfile>
      */
      
      return (
	  <View style={style.wrapper}>
	      <SideBar></SideBar>
	      <View style={style.screen}>
		  <ScreenHeader>
		      Profiles 
		  </ScreenHeader>
		  <View style={[profileStyle.wrapper, style.subscreen]}>
		      <UserContainer style={profileStyle.item}></UserContainer>
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

export default connect()(ProfilesContainer);
