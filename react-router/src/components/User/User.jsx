import React from 'react';
import './User.css';
import {store} from '../store';
console.log(store)

class User extends React.Component {
  constructor(props) {
    super(props);
  }

  callThisFunction() {
    console.log('do Something');
    this.props.func();
  }

  render() {
    console.log(this.props)
    console.log(store, this.props.match.params.username)
    return (
      <div className="User">
        <button onClick={() => this.callThisFunction()}>click</button>
        I am in User Page
        <p>{(this.props.match && this.props.match.params) ? this.props.match.params.username : ''}</p>
        <p>{store[this.props.match.params.username].log}</p>
      </div>
    );
  }
}

export default User;
