import React from 'react';

const style = {
   lineHeight: '.4',
   whiteSpace: 'nowrap',
   width: '100%',
   overflow: 'hidden',
   display: 'block',
   textOverflow: 'ellipsis',
   borderTop: '.5px solid #f2f2f2',

}


const event = ( props ) => {
  let date = new Date(props.date + " ").toLocaleDateString('en-US', {month: 'short', day: '2-digit'});
  let time = new Date(props.date + " " + props.time).toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'});

  let location = 'To Be Decided'
  if (props.location) {
    location = props.location.name
  }

  return (

      <div style={style}>
        <p><b>{date} <a href={props.link}> {props.name} </a></b></p>
        <p>{time} - {location}  </p>
        <p>{props.rsvps} RSVPs</p>

      </div>

  )
}

export default event;
