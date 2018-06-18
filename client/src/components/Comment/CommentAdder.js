import React, {Component} from 'react';
import { connect } from 'react-redux';

import Input from '../UI/Input';
import Button from '../UI/Button';
import { checkValidity } from '../../shared/utility';

import axios from 'axios';
import * as actions from '../../store/actions/index';

const style = {
   marginRight: '10px',
   width: '740px',
   backgroundColor: '#f2f2f2',
   boxSizing: 'border-box',
   padding: '10px',
   display: 'in-line',
}

class CommentAdder extends Component {
  state = {
    commentForm: {
      comment: {
          elementType: 'input',
          elementConfig: {
              type: 'text',
              placeholder: 'Write a comment or suggestion...'
          },
          value: '',
          validation: {
              required: true
          },
          valid: false,
          touched: false
      }
    },
    formIsValid: false
  }

  commentHandler = (event) => {
    event.preventDefault();

    const comment = {
      contentId: this.props.contentId,
      body: this.state.commentForm.comment.value,
      name: this.props.name,
      meetupId: this.props.meetupId,
      contentData: this.props.contentData.content
    }
    this.props.onSumbitComment(comment)

  }

  inputChangedHandler = (event, inputIdentifier) => {

    const updatedCommentForm = {
      ...this.state.commentForm
    };

    const updatedFormElement = {
      ...updatedCommentForm[inputIdentifier]
    };

    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = checkValidity(event.target.value, updatedFormElement.validation);
    updatedFormElement.touched = true;
    updatedCommentForm[inputIdentifier] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedCommentForm) {
        formIsValid = updatedCommentForm[inputIdentifier].valid && formIsValid;
    }

    this.setState({commentForm: updatedCommentForm, formIsValid: formIsValid});
  }

  render () {
    const formElementsArray = [];
    for (let key in this.state.commentForm) {
      formElementsArray.push({
        id: key,
        config: this.state.commentForm[key]
      });
    }
    let form = (
      <form onSubmit={this.commentHandler}>
        {formElementsArray.map(formElement => (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={(event) => this.inputChangedHandler(event, formElement.id)} />
        ))}
         <Button disabled={!this.state.formIsValid}>Add</Button>
      </form>
    )

    return (
      <div style={style}>
        {form}
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        meetupId: state.auth.meetupId,
        name: state.auth.name
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onSumbitComment: (comment) => dispatch(actions.addComment(comment))
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( CommentAdder );
