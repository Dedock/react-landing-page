import React, { Component } from 'react';
import ContactForm from './contactForm';

export default class Skill extends Component {

  logFormData(data) {
    console.log(data);
  }

  render() {
    return (
      <div className='container contact' id='contact'>
        <h3 className='contact__title'>
          contact
        </h3>
        <div className='contact__content'>
          <div className='contact__info'>
            <div className='contact__info--item'>
              <p className='contact__info--title'>
                Phone number:
              </p>
              <p className='contact__info--value'>
                +38066-66-66-666
              </p>
            </div>
            <div className='contact__info--item'>
              <p className='contact__info--title'>
                Email:
              </p>
              <p className='contact__info--value'>
                mail@gmail.com
              </p>
            </div>
            <div className='contact__info--item'>
              <p className='contact__info--title'>
                Skype:
              </p>
              <p className='contact__info--value'>
                mySkypeAcc
              </p>
            </div>
          </div>
          <ContactForm onSubmit={ this.logFormData } />
        </div>
      </div>
    );
  }
}
