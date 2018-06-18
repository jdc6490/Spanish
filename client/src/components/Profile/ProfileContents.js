import React from 'react';

import Content from '../../components/Content/Content';

const style = {
   padding: '10px',
   display: 'flex',
   flexWrap: 'wrap',
   align: 'centered'


}


const photo = ( props ) => {

  const contentSelectedHandler = ( id ) => {
    props.history.push( '/content/' + id);
  }


  let contents = "Loading..."
  if (props.contents) {
    contents = props.contents.map( content => (
        <Content
            key={content._id}
            type={content.content.type}
            spanish={content.content.spanish}
            english={content.content.english}
            example={content.content.example}
            name={content.name}
            meetupId={content.meetupId}
            clicked={() => contentSelectedHandler( content._id )} />
    ) )
  }
  return (
    <div style={style}>
      {contents}
    </div>
  )

}

export default photo;
