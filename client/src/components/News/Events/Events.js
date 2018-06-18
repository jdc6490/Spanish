import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions/index';

import Event from './Event';

const style = {
   backgroundColor: 'white',
   marginRight: '10px',
   marginBottom: '10px',
   border: '1px solid #bca38f',
   alignItems: 'center',
   padding: '10px',
   boxShadow: '0 1px 2px 0 rgba(0,0,0,0.2)'
}

class Events extends Component {
  componentDidMount () {
      this.props.onFetchEvents();
  }

  render() {
    let events = "Loading..."
    if (this.props.events) {
      events = this.props.events.map( event => (
          <Event
              key={event.id}
              name={event.name}
              date={event.date}
              time={event.time}
              rsvps={event.rsvp}
              location={event.location}
              link={event.link} />
      ) )
    }

    return (
      <div style={style}>
        <h2>Upcoming Events</h2>
        {events}
      </div>
    )
  };
}

const mapStateToProps = state => {
    return {
        events: state.meetup.events,
        eventsLoading: state.meetup.eventsLoading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchEvents: () => dispatch( actions.fetchEvents() )
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( Events );
