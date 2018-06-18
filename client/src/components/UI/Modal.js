import React, { Component} from 'react';

import Backdrop from './Backdrop'


const style = {
  position: 'fixed',
  backgroundColor: '#ede6de',
  width: '70%',
  border: '1px solid #ccc',
  boxShadow: '1px 1px 1px black',
  padding: '16px',
  left: '15%',
  top: '30%',
  boxSizing: 'border-box',
  transition: 'all 0.3s ease-out'
}




class Modal extends Component {
  render () {
    return (
      <React.Fragment>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          style={{
            ...style,
            transform: this.props.show ? 'translateY(0)' : 'translateY(-10000vh)',
            opacity: this.props.show ? '1' : '0',
            zIndex: this.props.show ? '500' : '-500' }}
        >

          {this.props.children}
        </div>
      </React.Fragment>
    )
  }
}

export default Modal;
