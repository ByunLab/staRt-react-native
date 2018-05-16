import {
    Dimensions,
    StyleSheet
} from 'react-native';
import colors from '../style/colors';


var {wh, ww} = Dimensions.get('window');

export default StyleSheet.create({
    wrapper: {
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'stretch'
    },
    screen: {
	flex: 3
    },
    subscreen: {
	padding: 10
    }
});
