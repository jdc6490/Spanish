import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Logo from '../Logo/Logo';
import Title from '../Title/Title';
import Notifications from '../Notifications/Notifications';
import ContentControls from '../../../components/Content/ContentControls';

const style = {
  height: '56px',
  width: '100%',
  backgroundColor: '#703B09',
  top: '0',
  left: '0',
  zIndex: '100',
  position: 'fixed',
  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
};

const textStyle = {
  width: '1105px',
  justifyContent: 'space-between',
  alignItems: 'center',
  display: 'flex',
  padding: '0 20px',
  boxSizing: 'border-box',
  margin: 'auto'
}

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
          <Link to={'/profile/' + this.props.meetupId}>{this.props.name}</Link>
        </div>
      )
    }
    return (
      <div style={style}>
        <div style={textStyle}>
        <Logo />
        <Title />
        <Notifications />
        {auth}
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token != null,
    name: state.auth.name,
    meetupId: state.auth.meetupId
  };
};



export default  connect( mapStateToProps )( Toolbar ) ;
