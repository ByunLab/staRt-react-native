import React from 'react';
import {Text, View} from 'react-native'
import Sidebar from '../components/sidebar';
import style from './style'

export default class QuizScreen extends React.Component {
  render() {
      return (
	  <View style={style.wrapper}>
	      <Sidebar navigation={this.props.navigation}
	      screenName='Quiz'></Sidebar>
	      <View style={style.screen}>
		  <Text>Quiz</Text>
	      </View>
	  </View>
    );
  }
}
