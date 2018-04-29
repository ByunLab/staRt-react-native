import React from 'react';
import {
    Text,
    TouchableHighlight,
    View
} from 'react-native';
import style from './style';

export default class Sidebar extends React.Component {
    constructor(props){
	super(props);
    }

    render(){
	let screens = screensData.map((screen, index) => {
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
	this.props.navigation.navigate(where);
    }
}

const screensData = [
    {
	label: "Profiles",
	where: "Profiles",
	icon: ""
    },
    {
	label: "Tutorial",
	where: "Tutorial",
	icon: ""
    },
    {
	label: "Quiz",
	where: "Quiz",
	icon: ""
    },
    {
	label: "Free Play",
	where: "Free Play",
	icon: ""
    },
    {
	label: "Quest",
	where: "Quest",
	icon: ""
    },
    {
	label: "Resources",
	where: "Resources",
	icon: ""
    },
];
