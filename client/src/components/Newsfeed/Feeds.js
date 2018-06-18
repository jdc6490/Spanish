import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

import Feed from './Feed';

const style = {

    maxWidth: '420px',

}

class Feeds extends Component {
  state = {
    feeds: null
  }

  componentDidMount () {
    this.loadData();
  }

  async loadData () {
    const {data} = await axios.get( '/api/newsfeed/');
    this.setState( { feeds: data.reverse() })
  }

  contentSelectedHandler = ( id ) => {
    this.props.history.push( '/content/' + id);
  }

    render () {
      let feeds = "Loading..."
      if (this.state.feeds) {
        feeds = this.state.feeds.map( feed => (
            <Feed
                key={feed._id}
                type={feed.type}
                action={feed.action}
                preview={feed.preview}
                name={feed.name}
                meetupId={feed.meetupId}
                timeStamp={feed.timeStamp}
                clicked={() => this.contentSelectedHandler( feed.contentId)} />
        ) )
      }

      return (
        <div style={style}>
          {feeds}
        </div>
      )
    }
}

export default withRouter( Feeds );
