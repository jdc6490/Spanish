import React, { Component } from 'react';
import axios from 'axios';

import ProfileData from './ProfileData';
import ProfileContents from './ProfileContents';

const style = {
   marginTop: '50px',
   minWidth: '100vw',
   minHeight: '100vw'

}


class Profile extends Component {
  state = {
    profileData: null,
    contents: null
  }

  componentDidMount () {
    this.loadData();
  }

  async loadData () {
    if (this.props.match.params.id) {
      if ( !this.state.profile || (this.state.profile && this.state.profile.meetupId !== this.props.match.params.id) ) {
        const {data} = await axios.get( '/api/profile/' + this.props.match.params.id);
        this.setState( {
          profileData: data.profile,
          contents: data.contents
        })
      }
    }
  }


  render () {




    return (
        <div style={style}>
          <ProfileData
            profileData={this.state.profileData} />
          <ProfileContents
            contents={this.state.contents}
            history={this.props.history} />
        </div>
    );
  }
}



export default Profile;
