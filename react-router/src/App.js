import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { Link, Switch } from 'react-router-dom';

import HomePage from './components/HomePage/HomePage';
import Settings from './components/Settings/Settings';
import User from './components/User/User';
import NotFound from './components/NotFound/NotFound'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/settings">Settings</Link></li>
            <li><Link to="/user">User</Link></li>
          </ul>
        </nav>
        {/* definition for the routes */}
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/settings" component={Settings} />
          <Route
            path="/user/:username"
            // component = {User}
            render={(props) => {
              console.log(props.match)
              return <User {...props} func={() => props.history.goBack()}></User>
              }}
            />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
