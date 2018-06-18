//This will be more about react (the rendering layer of the application - react router)
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, Switch } from 'react-router-dom';

import * as actions from './store/actions/index';
import Layout from './hoc/layout';

import Dashboard from './components/Dashboard';
import Landing from './components/Landing/Landing';
import Profile from './components/Profile/Profile';
import Feeds from './components/Newsfeed/Feeds';

const style = {
  position: 'absolute',
  left: '0',
  top: '0',
  margin: '0 auto',

  textAlign: 'left'

}

const pageStyle = {

  maxWidth: '1300px',
  margin: 'auto'
}

class App extends Component {
  componentDidMount () {
      this.props.onTryAutoSignUp();
  }

  render () {
    let routes = (
      <Route path="/" component={Landing} />
    );
    if ( this.props.isAuthenticated ) {
      routes = (

        <Switch>
          <Route path="/profile/:id" exact component={Profile} />
          <Route path="/newsfeed" component={Feeds} />
          <Route path="/" component={Dashboard} />
        </Switch>

      );
    }

    return (
      <div >
        <Layout />
        <div style={pageStyle}>
          {routes}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token != null,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignUp: () => dispatch( actions.authFetchUser() )
  };
};

export default withRouter( connect( mapStateToProps, mapDispatchToProps )( App ) );
