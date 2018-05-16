import React, {Component} from 'react';
import {View} from 'react-native';

import ProfilesContainer from './src/containers/ProfilesContainer.js';

import {
    Router,
    Scene
} from 'react-native-router-flux'

import {
    connect,
    Provider,
} from 'react-redux';

import configureStore from './src/store/configureStore';

const store = configureStore();
const ConnectedRouter = connect()(Router);

export default class App extends Component{
    render(){
	return(
	    <Provider store={store}>
		<View style={{height: 300}}>
		    <ConnectedRouter>
			<Scene key='root'>
			    <Scene key='profiles' component={ProfilesContainer} hideNavBar={true} initial />
			</Scene>
		    </ConnectedRouter>
		</View>
	    </Provider>
	);
    }
}
