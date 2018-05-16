import {
    Dimensions,
    StyleSheet
} from 'react-native';
import colors from '../../style/colors';


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
	backgroundColor: colors.blue
    },
    buttonText: {
	color: colors.white,
    },
    activeButton: {
	backgroundColor: colors.white

    },
    activeButtonText: {
	color: colors.blue
    }
});
