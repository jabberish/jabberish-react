import React from 'react';
import PropTypes from 'prop-types';
import AuthForm from '../components/AuthForm';

import { connect } from 'react-redux';
import { getUserId, getUserError } from '../selectors/userSelectors';
import { loginUser, verifyUser } from '../actions/userActions';

class Login extends React.Component {
  static propTypes = {
    userId: PropTypes.string,
    error: PropTypes.string,
    submitLogin: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    verifyUser: PropTypes.object.isRequired
  }
  
  state = {
    username: '',
    password: ''
  }

  componentDidMount() {
    this.props.verifyUser();
  }

  componentDidUpdate(prevState, prevProps) {
    const { error, userId } = this.props;
    if(prevProps !== this.props) {
      if(!error && userId) {
        this.props.history.push('/');
      }
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    const user = {
      username: this.state.username,
      password: this.state.password
    };

    this.props.submitLogin(user);
  };

  handleUpdate = e => {
    this.setState({ [e.target.name]: e.target.value });
  }
  
  render() {
    const { error } = this.props;
    return (
      <>
        <AuthForm 
          formTitle="Login"
          handleSubmit={this.handleSubmit}
          handleUpdate={this.handleUpdate}
          errorMessage={error}
        />
      </>
    );
  }
}


const mapStateToProps = state => ({
  userId: getUserId(state),
  error: getUserError(state)
});

const mapDispatchToProps = dispatch => ({
  submitLogin: (user) => dispatch(loginUser(user)),
  verifyUser: () => dispatch(verifyUser())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
