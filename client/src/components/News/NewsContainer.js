import React, { Component } from 'react';

import Photos from './Events/Events';
import Events from './Photos/Photos';

const style = {
   position: 'absolute',
   width: '330px',
   top: '0',
   left: '780px',
   marginRight: '5px'





}


class NewsContainer extends Component {
  render() {
    return (
      <div style={style}>
        <Photos/>
        <Events/>
      </div>
    )
  }
}

export default NewsContainer;
