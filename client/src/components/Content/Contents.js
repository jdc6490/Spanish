import React, { Component } from 'react';
import { connect } from 'react-redux';


import * as actions from '../../store/actions/index';
import Content from './Content';


class Contents extends Component {
    componentDidMount () {
        this.props.onFetchContents();
    }

    render () {
      console.log(this.props.contents)

      let contents = "Loading..."
      if (this.props.contents) {
        contents = this.props.contents.map( content => (
            <Content
                key={content.id}
                type={content.content.type}
                spanish={content.content.spanish}
                english={content.content.english}
                example={content.content.example} />
        ) )
      }


      return (
          <div>
              {contents}
          </div>
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
