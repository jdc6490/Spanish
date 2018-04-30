import React from 'react';

const content = ( props ) => {


  return (
    <div>
      <h2> {props.type} </h2>
      <p>Spanish: {props.spanish}</p>
      <p>English: {props.english}</p>
      <p>Example: {props.example}</p>
    </div>
  )
}

export default content;
