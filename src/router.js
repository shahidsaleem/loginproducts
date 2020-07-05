import React, { Component } from 'react';
import { RegisterForm } from './components/form';
import { ProductsList } from './components/products';

import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Redirect,
  Prompt,
  Route,
} from 'react-router-dom';

export const PublicHomePage = () => {
  return <div>Home PAge public</div>;
};

export class RouterComp extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      user: '',
    };

    this.loginHandle = this.loginHandle.bind(this);
  }
  loginHandle = (user) => {
    this.setState((prevState) => ({
      loggedIn: !prevState.loggedIn,
      user: user,
    }));
  };
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/">
            {this.state.loggedIn ? (
              <Redirect
                to={{
                  pathname: '/dashboard',
                }}
              />
            ) : (
              <RegisterForm loginHandle={this.loginHandle} />
            )}
          </Route>

          <Route path="/dashboard" exact strict>
            {!this.state.loggedIn ? (
              <Redirect to="/" />
            ) : (
              <ProductsList user={this.state.user} />
            )}
          </Route>
        </div>
      </Router>
    );
  }
}
