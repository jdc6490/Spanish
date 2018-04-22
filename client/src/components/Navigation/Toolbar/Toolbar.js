import React, { Component } from 'react';
import { connect } from 'react-redux';

import Logo from '../Logo/Logo';

const style = {
  height: '56px',
  width: '100%',
  top: '0',
  left: '0',
  zIndex: '100',
  position: 'fixed',
  color: 'white',
  backgroundColor: '#703B09',
  justifyContent: 'space-between',
  alignItems: 'center',
  display: 'flex',
  padding: '0 20px',
  boxSizing: 'border-box'

};

class Toolbar extends Component {
  render() {
    let auth = (
      <div>
        <a href="/auth/meetup">Login With Meetup</a>
      </div>
    )

    if (this.props.isAuthenticated) {
      auth = (
        <div>
          <a href="/api/logout">Logout</a>
          <br />
          {this.props.userName}
        </div>
      )
    }
    return (
      <div style={style}>
        <Logo />
        <h2>Minneapolis Spanish</h2>
        {auth}
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token != null,
    userName: state.auth.name
  };
};



export default  connect( mapStateToProps )( Toolbar ) ;
