import React from 'react';

const photo = ( props ) => {

  return (
    <div>
      <img src={props.photoThumb} alt="Photos from Meetup" />
    </div>
  )

}

export default photo;
