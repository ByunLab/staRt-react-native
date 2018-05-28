import LoginForm from './login-form';
import {connect} from 'react-redux';
import {login} from '../../actions';

const mapDispatchToProps = {
    login
}

export default connect(null, mapDispatchToProps)(LoginForm);
