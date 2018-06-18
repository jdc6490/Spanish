import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


import Feeds from '../../../components/Newsfeed/Feeds';
import Button from '../../../components/UI/Button';
import Modal from '../../../components/UI/Modal';


class Notifications extends Component {
  state = {
    viewing: false
  }

    viewNotificationsHandler = () => {
      this.setState({viewing: true});
    }

    closeNotificationsHandeler = () => {
      this.setState({viewing: false});
    }

    render () {
      return (
        <div>
          <Modal show={this.state.viewing} modalClosed={this.closeNotificationsHandeler}>
            <Feeds/>
          </Modal>
          <Button clicked={() => this.viewNotificationsHandler()}> Notifications </Button>
        </div>
      );
    }
}

export default Notifications;
