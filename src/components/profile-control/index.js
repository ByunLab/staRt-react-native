import ProfileControl from './profile-control';
import {connect} from 'react-redux';
import {
    logout
} from '../../actions';

const mapDispatchToProps = {
    logout,
}

export default connect(null, mapDispatchToProps)(ProfileControl);
