import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    if (this.props.currentUser) {
      return (
        <div>
          <h1> Hello {this.props.currentUser.username}! </h1>
        </div>
      )
    }
    else {
      return (
        <div>
          <Link to="/#/api/session/new">Log In</Link>
          <Link to="/#/api/users/new"> Sign Up</Link>
        </div>
      )
    }
  }
}

export default Greeting;
