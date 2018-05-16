import React from 'react';
import {
    Text,
    TouchableHighlight,
    View
} from 'react-native';
import style from './style';
import {Actions} from 'react-native-router-flux';

export default class Sidebar extends React.Component {
    constructor(props){
	super(props);
    }

    render(){
	let screens = screenData.map((screen, index) => {
	    let buttonStyle = [style.button];
	    if(this.props.screenName == screen.where){
		buttonStyle.push(style.activeButton);
	    }
	    let buttonTextStyle = [style.buttonText];
	    if(this.props.screenName == screen.where){
		buttonTextStyle.push(style.activeButtonText);
	    }	    
	    return(
		<TouchableHighlight
		    key={index}
			onPress={() => {this._navigateTo(screen.where);}}
		    style={buttonStyle}
		>
		    <Text style={buttonTextStyle}>{screen.label}</Text>
		</TouchableHighlight>
	    );
	});
	return(
	    <View style={style.wrapper}>
		{screens}
	    </View>
	)
    }
    
    _navigateTo(where){
	Actions.replace(where);
    }
}

const screenData = [
    {
	label: "Profiles",
	where: "profiles",
	icon: ""
    },
    {
	label: "Tutorial",
	where: "tutorial",
	icon: ""
    },
    {
	label: "Quiz",
	where: "quiz",
	icon: ""
    },
    {
	label: "Free Play",
	where: "freeplay",
	icon: ""
    },
    {
	label: "Quest",
	where: "quest",
	icon: ""
    },
    {
	label: "Resources",
	where: "resources",
	icon: ""
    },
];
