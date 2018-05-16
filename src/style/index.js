import {
    Dimensions,
    StyleSheet
} from 'react-native';

import colors from './colors';

var {height, width} = Dimensions.get('window');

export default StyleSheet.create({
    wrapper: {
	height: height,
	display: 'flex',
	flexDirection: 'column',
    },
    button: {
	flex: 1,
	minHeight: 30,
	padding: 10,
	backgroundColor: '#53c8e9'
    },
    buttonText: {
	color: '#fff'
    },
    activeButton: {
	backgroundColor: '#fff'
    },
    activeButtonText: {
	color: '#53c8e9'
    },
    input: {
	flex: 1,
	borderBottomColor: colors.black,
	borderBottomWidth: 1
    }
});
