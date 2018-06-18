import React from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from '../../shared/utility';

const card = {
   marginBottom: '10px',
   marginRight: '12px',
   border: '1px solid #bca38f',
   borderRadius: '3px',
   width: '375px',
   backgroundColor: 'white',
   boxSizing: 'border-box',
   paddingTop: '0px',
   boxShadow: '0 1px 2px 0 rgba(0,0,0,0.2)'
}

const header = {
  background: '#cfbeaf',
  background: 'linear-gradient(#cfbeaf, #e2d8cf)',
  margin: '0',
  boxSizing: 'border-box',
  display: 'inline-block',
  paddingLeft: '5px',
  borderTopLeftRadius: '3px',
  borderTopRightRadius: '3px',
  width: '100%',
  height: '30px',
  zIndex: '500',
  top: '0',
  left: '0',
}

const body = {
  margin: '0',
  top: '0',
  left: '10',
  padding: '10px',
  whiteSpace: 'nowrap',
  width: '94.5%',
  overflow: 'hidden',
  display: 'block',
  borderBottom: '1px solid #f2f2f2',
  textOverflow: 'ellipsis'
}

const footer = {
  background: '#f2f2f2',
  margin: '0',
  boxSizing: 'border-box',
  display: 'flex-box',
  width: '100%',
  height: '30px',
  zIndex: '500',
  bottom: '0',
  left: '0',
  padding: '5px'
}

const content = ( props ) => {
  let date = formatDate(props.timeStamp);

  return (
    <div style={card} onClick={props.clicked}>
      <h2 style={header}> {props.type} </h2>
      <div >
        <p style={body}><b>ES:</b> {props.spanish}</p>
        <p style={body}><b>EN:</b> {props.english}</p>
      </div>
      <p style={footer}> <i>written by: {props.name} </i> <i style={{float: 'right', paddingRight: '5px'}}> {date} </i> </p>

    </div>
  )
}

export default content;
