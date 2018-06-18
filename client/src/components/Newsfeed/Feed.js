import React from 'react';

import { formatDate } from '../../shared/utility';

const box = {
    lineHeight: '.4',
    border: '1px solid #c6c1ba',
    borderRadius: '3px',
    width: '400px',
    margin: '0',
    backgroundColor: 'white',
    boxSizing: 'border-box',

}

const text = {
  paddingLeft: '10px',
  paddingRight: '10px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  display: 'block',
  textOverflow: 'ellipsis',
  width: '95%'
}


const feed = ( props ) => {

let Feed = null;
let date = formatDate(props.timeStamp);

switch (props.action) {
      case ( 'content' ):

        Feed = (
          <div style={box} onClick={props.clicked}>
            <div style={text}>
              <p><b>{props.name}</b> added a new <b>{props.type}</b> entry:</p>
              <p>{props.preview.spanish}</p>
              <p>{props.preview.english}</p>
              <p style={{color: 'gray'}}>{date} </p>
            </div>
          </div>
        )
          break;
      case ( 'comment' ):
        Feed = (
          <div style={box} onClick={props.clicked}>
            <div style={text}>
              <p><b>{props.name}</b> commented on a <b>{props.type}</b>  entry:</p>
              <p><i>"{props.preview}"</i></p>
              <p style={{color: 'gray'}}>{date} </p>
            </div>
          </div>
        )
          break;
      default:
        Feed = null
  }
  return Feed;
}

export default feed;
