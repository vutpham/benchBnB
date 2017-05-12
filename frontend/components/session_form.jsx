import React from 'react';
import { withRouter } from 'react-router'


class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: ""
		};
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsername(e) {
    e.preventDefault();
    const username = document.getElementById('username').value
    this.setState({username});
  }

  handlePassword(e) {
    e.preventDefault();
    const password = document.getElementById('password').value
    this.setState({password});
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  render(){
    return (
      <form>
        <input type='text' onChange={this.handleUsername} value={this.state.username} id='username'></input>
        <input type='text' onChange={this.handlePassword} value={this.state.password} id='password'></input>
        <button onClick={this.handleSubmit}>Submit</button>
      </form>
    )
  }
}

export default withRouter(SessionForm);
