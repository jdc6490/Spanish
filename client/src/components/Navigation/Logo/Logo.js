import React from 'react';
import { Link } from 'react-router-dom';

const Logo = (props) => {
  return (
    <div>
      <Link to={'/'}> <h2>Logo</h2> </Link>
    </div>
  )
};

export default Logo;
