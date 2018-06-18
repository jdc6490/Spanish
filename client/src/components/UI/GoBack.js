import React from 'react';
import { Link } from 'react-router-dom';

const style = {
   marginBottom: '10px',
   marginRight: '10px',
   border: '1px solid #c6c1ba',
   borderRadius: '3px',
   width: '100px',
   backgroundColor: 'white',
   boxSizing: 'border-box',
   padding: '10px'
}

const goBack = (props) => (
  <div  style={style} >
    <Link to={'/'}> <p>Go back</p> </Link>
  </div>
);

export default goBack;
