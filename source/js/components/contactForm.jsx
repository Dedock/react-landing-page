import React from 'react';
import { Field, reduxForm } from 'redux-form';

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length > 15) {
    errors.name = 'Must be 15 characters or less';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.message) {
    errors.message = 'Required';
  }
  return errors;
};

const renderInput = ({
                       input,
                       label,
                       type,
                       meta: { touched, error, warning },
                     }) => (
                       <div className='contact__input--wrapper'>
                         <input { ...input } placeholder={ label } type={ type } className='contact__input' />
                         { touched &&
    ((error && <span className='contact__input--error'>{ error }</span>) ||
      (warning && <span className='contact__input--error'>{ warning }</span>)) }
                       </div>
);
const renderTextarea = ({
                       input,
                       label,
                       type,
                       meta: { touched, error, warning },
                     }) => (
                       <div className='contact__textarea--wrapper'>
                         <textarea { ...input } placeholder={ label } type={ type } className='contact__textarea' />
                         { touched &&
    ((error && <span className='contact__textarea--error'>{ error }</span>) ||
      (warning && <span className='contact__textarea--error'>{ warning }</span>)) }
                       </div>
);

const SyncValidationForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={ handleSubmit } className='contact__form'>
      <Field
        name='name'
        type='text'
        component={ renderInput }
        label='Name'
      />
      <Field name='email' type='email' component={ renderInput } label='Email' />
      <Field name='message' type='textarea' component={ renderTextarea } label='Send a mesage' />
      <div>
        <button type='submit' disabled={ submitting } className='contact__send'>
          Send
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'contactForm',
  validate,
})(SyncValidationForm);
