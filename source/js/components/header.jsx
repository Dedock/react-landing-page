import React, { Component } from 'react';

const logo = '</>';

export default class Header extends Component {

  render() {
    return (
      <div className='container header'>
        <a href='#' className='logo'>
          { logo }
        </a>
        <ul className='header__navigation'>
          <li className='header__navigation--item'>
            <a href='#'>
              Home
            </a>
          </li>
          <li className='header__navigation--item'>
            <a href='#about'>
              About
            </a>
          </li>
          <li className='header__navigation--item'>
            <a href='#skills'>
              Skills
            </a>
          </li>
          <li className='header__navigation--item'>
            <a href='#contact'>
              Contact
            </a>
          </li>
        </ul>
        <div className='burger'>
          <span />
          <span />
          <span />
        </div>
      </div>
    );
  }
}
