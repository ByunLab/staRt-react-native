import {
    Dimensions,
    StyleSheet
} from 'react-native';
import colors from '../../style/colors';


var {height, width} = Dimensions.get('window');

export default StyleSheet.create({
    header: {
	color: colors.blue,
	backgroundColor: colors.lightBlue,
	fontSize: 30,
	paddingLeft: 30,
	paddingRight: 0,
	paddingTop: 10,
	paddingBottom: 10
    }
});
