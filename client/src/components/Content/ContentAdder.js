import React, {Component} from 'react';
import { connect } from 'react-redux';

import Input from '../UI/Input';
import Button from '../UI/Button';
import { checkValidity } from '../../shared/utility';

import * as actions from '../../store/actions/index';

class ContentAdder extends Component {
  state = {
    contentForm: {
      type: {
          elementType: 'select',
          elementConfig: {
             options: [
               {value: 'neutral', displayValue: 'Neutral'},
               {value: 'slang', displayValue: 'Slang'},
               {value: 'grammar', displayValue: 'Grammar'}
             ]
           },
           value: 'neutral',
           validation: {},
           valid: true
      },
      spanish: {
          elementType: 'input',
          elementConfig: {
              type: 'text',
              placeholder: 'Newly learned Spanish'
          },
          value: '',
          validation: {
              required: true
          },
          valid: false,
          touched: false
      },
      english: {
          elementType: 'input',
          elementConfig: {
              type: 'text',
              placeholder: 'English translation'
          },
          value: '',
          validation: {
              required: true
          },
          valid: false,
          touched: false
      },
      example: {
          elementType: 'input',
          elementConfig: {
              type: 'text',
              placeholder: 'Example usage'
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

  contentHandler = (event) => {
    event.preventDefault();

    const formData = {};
    for (let formElementIdentifier in this.state.contentForm) {
      formData[formElementIdentifier] = this.state.contentForm[formElementIdentifier].value;
    }

    const content = {
      contentData: formData,
      name: this.props.name,
      meetupId: this.props.meetupId
    }

    this.props.onSumbitContent(content)
  }

  inputChangedHandler = (event, inputIdentifier) => {

    const updatedContentForm = {
      ...this.state.contentForm
    };

    const updatedFormElement = {
      ...updatedContentForm[inputIdentifier]
    };

    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = checkValidity(event.target.value, updatedFormElement.validation);
    updatedFormElement.touched = true;
    updatedContentForm[inputIdentifier] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedContentForm) {
        formIsValid = updatedContentForm[inputIdentifier].valid && formIsValid;
    }

    this.setState({contentForm: updatedContentForm, formIsValid: formIsValid});
  }

  render () {
    const formElementsArray = [];
    for (let key in this.state.contentForm) {
      formElementsArray.push({
        id: key,
        config: this.state.contentForm[key]
      });
    }
    let form = (
      <form onSubmit={this.contentHandler}>
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
         <Button disabled={!this.state.formIsValid} clicked={this.props.contentSubmitted} >Submit</Button>
      </form>

    )

    return (
      <div>
        <h2>Add new Spanish</h2>
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
        onSumbitContent: (content) => dispatch(actions.addContent(content))
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( ContentAdder );
