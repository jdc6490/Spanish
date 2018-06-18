import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';

import Photo from './Photo';

const panel = {
   backgroundColor: 'white',
   border: '1px solid #bca38f',
   marginRight: '10px',
   padding: '10px',
   boxShadow: '0 1px 2px 0 rgba(0,0,0,0.2)'
}

const columns = {
  columnCount: '3',
  alignItems: 'center',

}

class Photos extends Component {
  componentDidMount () {
      this.props.onFetchPhotos();
  }

  render() {
    let photos = "Loading..."
    if (this.props.photos) {
      photos = this.props.photos.map( photo => (
          <Photo
              key={photo.id}
              photoThumb={photo.thumb_link} />
      ) )
    }
    return (
      <div style={panel}>
        <h2>Past Events</h2>
        <div style={columns}>
          {photos}
        </div>
      </div>
    )
  };

}

const mapStateToProps = state => {
    return {
        photos: state.meetup.photos,
        photosLoading: state.meetup.photosLoading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchPhotos: () => dispatch( actions.fetchPhotos() )
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( Photos );
