//This will be more about react (the rendering layer of the application - react router)
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';

import * as actions from './store/actions/index';
import Layout from './hoc/layout'



import Dashboard from './components/Dashboard'
import Landing from './components/Landing/Landing'

class App extends Component {
  componentDidMount () {
      this.props.onTryAutoSignUp();
  }

  render () {

    let routes = (
      <Route path="/" exact component={Landing} />
    );

    if ( this.props.isAuthenticated ) {
      routes = (
        <Route path="/" exact component={Dashboard} />

      );
    }

    
    console.log("isAuthenticated" + this.props.isAuthenticated);
    console.log("Username" + this.props.userName);

    return (
      <div>
        <Layout />
        {routes}

      </div>
    );
  }
}


const mapStateToProps = state => {
  console.log(state.auth.token);
  return {
    isAuthenticated: state.auth.token != null,
    userName: state.auth.name
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignUp: () => dispatch( actions.authFetchUser() )
  };
};

export default withRouter( connect( mapStateToProps, mapDispatchToProps )( App ) );
