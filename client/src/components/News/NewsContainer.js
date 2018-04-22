import React from 'react';

import Photos from './Events/Events';
import Events from './Photos/Photos';

const style = {
   marginTop: '2px',
   width: '30%',
   border: '1px solid #eee',
   alignItems: 'center',
   zIndex: '100'
}


const NewsContainer = (props) => (

    <div style={style}>
      <Events />
      <Photos />
    </div>

);


export default NewsContainer;
