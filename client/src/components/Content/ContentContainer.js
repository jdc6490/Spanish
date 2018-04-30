import React from 'react';

import ContentAdder from './ContentAdder'
import Contents from './Contents';

const style = {
   marginTop: '2px',
   border: '1px solid #eee',
   width: '70%',
   zIndex: '100',
   boxSizing: 'border-box'
}

const ContentContainer = () => {
  return (
    <div style={style}>
      <ContentAdder />
      <Contents />
    </div>
  );
}

export default ContentContainer;
