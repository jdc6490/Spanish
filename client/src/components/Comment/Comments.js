import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';

import Comment from './Comment';
import CommentAdder from './CommentAdder';

const style = {
   marginLeft: '5px',
   marginRight: '10px',
   border: '1px solid #c6c1ba',
   borderRadius: '3px',
   width: '762px',
   backgroundColor: '#ece5df',
   boxSizing: 'border-box',
   padding: '10px'
}

class Comments extends Component {
    componentDidMount () {
        if (this.props.contentId); {
          this.props.onFetchComments(this.props.contentId);
        }

    }

    render () {
      let comments = "Loading..."
      console.log(this.props.comments);
      if (this.props.comments) {
        this.props.comments.reverse();
        comments = this.props.comments.map( comment => (
            <Comment
                key={comment._id}
                body={comment.body}
                timeStamp={comment.timeStamp}
                name={comment.name}
                meetupId={comment.meetupId}
               />
        ) )
      }

      return (
        <div style={style}>
        <CommentAdder contentId={this.props.contentId} contentData={this.props.contentData} />
        {comments}
        </div>
      );
    }
}

const mapStateToProps = state => {
    return {
        comments: state.comment.comments,
        loading: state.comment.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchComments: (id) => dispatch( actions.fetchComments(id) )
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( Comments );
