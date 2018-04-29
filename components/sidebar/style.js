import {
    Dimensions,
    StyleSheet
} from 'react-native';
import colors from '../../styles/colors';


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
	backgroundColor: colors.lightBlue
    },
    buttonText: {
	color: colors.white,
    },
    activeButton: {
	backgroundColor: colors.white

    },
    activeButtonText: {
	color: colors.lightBlue
    }
});
