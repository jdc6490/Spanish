import React, { Component } from 'react';


import Feeds from '../../components/Newsfeed/Feeds';
import ContentAdder from './ContentAdder';
import Button from '../../components/UI/Button';
import Modal from '../../components/UI/Modal';


class ContentControls extends Component {
  state = {
    addingContent: false
  }

    addContentHandler = () => {
      this.setState({addingContent: true});
    }

    closeModalHandeler = () => {
      this.setState({addingContent: false});
    }

    render () {
      return (
        <div style={{marginBottom: '10px', marginLeft: '5px'}}>
          <Modal show={this.state.addingContent} modalClosed={this.closeModalHandeler}>
            <ContentAdder
              contentSubmitted={this.closeModalHandeler}
              />
          </Modal>
          <Button clicked={() => this.addContentHandler()}> Add Content </Button>
        </div>
      );
    }
}

export default ContentControls;
