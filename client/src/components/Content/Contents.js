import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import Content from './Content';
import ContentControls from './ContentControls';

const style = {
   marginLeft: '5px',
   display: 'flex',
   flexWrap: 'wrap',

   maxWidth: '790px',
   height: '100%'


}

class Contents extends Component {
    componentDidMount () {
        this.props.onFetchContents();
    }

    contentSelectedHandler = ( id ) => {
      this.props.history.push( '/content/' + id);
    }

    render () {
      let contents = "Loading..."
      if (this.props.contents) {
        contents = this.props.contents.map( content => (
            <Content
                key={content._id}
                type={content.content.type}
                spanish={content.content.spanish}
                english={content.content.english}
                example={content.content.example}
                name={content.name}
                meetupId={content.meetupId}
                timeStamp={content.timeStamp}
                clicked={() => this.contentSelectedHandler( content._id )} />
        ) )
      }
      contents.reverse();

      return (
        <React.Fragment>
          <ContentControls />
          <div style={style}>
            {contents}
          </div>
        </React.Fragment>
      );
    }
}

const mapStateToProps = state => {
    return {
        contents: state.content.contents,
        loading: state.content.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchContents: () => dispatch( actions.fetchContents() )
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( Contents );
