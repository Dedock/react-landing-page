import React, { Component } from 'react';

const logo = '</>';

export default class Header extends Component {

  render() {
    return (
      <div className='footer__wrapper'>
        <div className='container footer'>
          <div className='footer__contact-info'>
            <div className='footer__contact-info--item'>
              <p className='footer__contact-info--title'>
                Mobile:
              </p>
              <p className='footer__contact-info--value'>
                +38066-66-66-666
              </p>
            </div>
            <div className='footer__contact-info--item'>
              <p className='footer__contact-info--title'>
                Email:
              </p>
              <p className='footer__contact-info--value'>
                mail@gmail.com
              </p>
            </div>
            <div className='footer__contact-info--item'>
              <p className='footer__contact-info--title'>
                Skype:
              </p>
              <p className='footer__contact-info--value'>
                mySkypeAcc
              </p>
            </div>
          </div>
          <p className='footer__logo'>
            { logo }
          </p>
        </div>
      </div>
    );
  }
}
