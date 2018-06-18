import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { formatDate } from '../../shared/utility';


import Rate from 'rc-rate';
import CommentAdder from '../Comment/CommentAdder';
import Comments from '../Comment/Comments';

import './index.css';

const card = {
  marginLeft: '5px',
  marginBottom: '10px',
  border: '1px solid #bca38f',
  borderRadius: '3px',
  width: '762px',
  backgroundColor: 'white',
  boxSizing: 'border-box',
  paddingTop: '0',
  boxShadow: '0 1px 2px 0 rgba(0,0,0,0.2)'
}
const body = {
  margin: '0',
  top: '0',
  left: '10',
  padding: '10px',
  wordWrap: 'break-word',
  display: 'block',
  borderBottom: '1px solid #f2f2f2',
  textOverflow: 'ellipsis'
}
const header = {
  background: '#cfbeaf',
  background: 'linear-gradient(#cfbeaf, #e2d8cf)',
  margin: '0',
  boxSizing: 'border-box',
  display: 'inline-block',
  paddingLeft: '5px',
  borderTopLeftRadius: '3px',
  borderTopRightRadius: '3px',
  width: '100%',
  height: '30px',
  zIndex: '500',
  top: '0',
  left: '0',
}
const footer = {
  background: '#f2f2f2',
  margin: '0',
  boxSizing: 'border-box',
  display: 'flex-box',
  width: '100%',
  height: '30px',
  zIndex: '500',
  bottom: '0',
  left: '0',
  padding: '5px'
}

const mainStyle = {
  width: '100%',
  height: '100%'
}

class ContentViewer extends Component {
  state = {
    loadedContent: null
  }

  componentDidMount () {
      this.loadData();
  }

  async loadData () {
    if (this.props.match.params.id) {
      if ( !this.state.loadedContent || (this.state.loadedContent && this.state.loadedContent.id !== this.props.match.params.id) ) {
        const {data} = await axios.get( '/api/content/' + this.props.match.params.id);
        console.log(data);
        this.setState( { loadedContent: data })
      }
    }
  }

  accuracyChangeHandler = (value) => {
    const accuracy = {
      contentId: this.props.match.params.id,
      value: value,
      postedBy: { name: this.props.name, meetupId: this.props.meetupId }
    }
    console.log('accuracy' , accuracy);
  }

  difficultyChangeHandler = (value) => {
    const difficulty = {
      contentId: this.props.match.params.id,
      value: value,
      postedBy: { name: this.props.name, meetupId: this.props.meetupId }
    }
    console.log('difficulty' , difficulty);
  }

  render () {

    let content = <p>'Loading...'</p>;
    if (this.state.loadedContent) {
      let date = formatDate(this.state.loadedContent.timeStamp);
      console.log('loaded content', this.state.loadedContent);
      content = (
        <div style={card}>
          <h2 style={header}> {this.state.loadedContent.content.type} </h2>
          <div style={body}>
            Accuracy:
              <Rate
               defaultValue={0}
               onChange={(value) => this.accuracyChangeHandler(value)}
               style={{ fontSize: 20 }}
               allowClear={false}
               character={'☉'} />
            Difficulty:
             <Rate
              defaultValue={0}
              onChange={(value) => this.difficultyChangeHandler(value)}
              style={{ fontSize: 30}}
              allowClear={false}
              character={'🠹'} />

            <p>Spanish: {this.state.loadedContent.content.spanish}</p>
            <p>English: {this.state.loadedContent.content.english}</p>
            <p>Example: {this.state.loadedContent.content.example}</p>
          </div>
          <p style={footer}> <i>written by: <Link to={'/profile/' + this.state.loadedContent.meetupId}> {this.state.loadedContent.name} </Link> </i> <i style={{float: 'right', paddingRight: '5px'}}> {date} </i> </p>

        </div>


      );
    }
    return (
      <div style={mainStyle}>
        {content}
        <Comments contentId={this.props.match.params.id} contentData={this.state.loadedContent} />
      </div>
    )

  }
}

const mapStateToProps = state => {
    return {
        name: state.auth.name,
        meetupId: state.auth.meetupId
    };
};



export default connect( mapStateToProps )( ContentViewer );
