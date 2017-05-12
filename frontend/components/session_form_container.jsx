import SessionForm from './session_form';
import { connect } from 'react-redux';
import { login, signup } from '../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: state.session.currentUser ? true : false,
  errors: state.session.errors,
  formType: ownProps.location.pathname === 'api/session/new' ? 'login' : 'signup'
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (user) => {
    ownProps.location.pathname === "api/session/new" ? dispatch(login(user)) : dispatch(signup(user))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
