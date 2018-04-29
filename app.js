import React from 'react';
import {Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SwitchNavigator} from 'react-navigation';

import FreePlayScreen from './screens/free_play';
import ProfilesScreen from './screens/profiles';
import QuestScreen from './screens/quest';
import QuizScreen from './screens/quiz';
import ResourcesScreen from './screens/resources';
import TutorialScreen from './screens/tutorial';


export default SwitchNavigator({
    Profiles: ProfilesScreen,
    Tutorial: TutorialScreen,
    Quiz: QuizScreen,
    "Free Play": FreePlayScreen,
    Quest: QuestScreen,
    Resources: ResourcesScreen
}, {

});
