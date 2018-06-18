import React from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from '../../shared/utility';


const mainStyle = {
  width: '750px'
}

const commentBody = {
   display: 'inline-block',
   marginRight: '10px',
   marginBottom: '0px',
   border: '1px solid #c6c1ba',
   borderRadius: '25px',
   backgroundColor: '#f2f2f2',
   paddingTop: '6px',
   paddingBottom: '6px',
   paddingLeft: '15px',
   paddingRight: '15px',
   wordWrap: 'break-word',
   alignItems: 'center',
}

const timeStamp = {
  margin: '0',
  paddingLeft: '15px'
}

const comment = ( props ) => {

  let date = formatDate(props.timeStamp);

  return (
    <div >

      <p style={commentBody}><Link to={'/profile/' + props.meetupId}> <b> {props.name} </b> </Link> {props.body} </p>

      <p style={timeStamp}>{date} </p>
    </div>
  )
}

export default comment;
