import React from 'react';

const style = {
     padding: '10px',
}

const profileData = ( props ) => {
  let profile = <p>'Loading...'</p>;

  if (props.profileData) {
    profile = (
      <div>
        <h2>{props.profileData.name}&#39;s Profile</h2>
        <p>Meetup link: <a href={"https://www.meetup.com/meetup-group-llQYfjbx/members/" + props.profileData.meetupId}> {props.profileData.meetupId} </a></p>
      </div>
    );
  }
  return (
    <div style={style}>
      {profile}
    </div>
  )

}

export default profileData;
