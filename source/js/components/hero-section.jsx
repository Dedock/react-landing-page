import React, { Component } from 'react';

const heroSectionBackground = {
  backgroundImage: 'url(../assets/img/hero-section-background.png)',
};


export default class HeroSection extends Component {

  render() {
    return (
      <div className='hero-section__wrapper' style={ heroSectionBackground }>
        <div className='hero-section__content'>
          <h1 className='hero-section__title'>
            NAME SURNAME
          </h1>
          <h2 className='hero-section__description'>
            FRONT-END DEVELOPER
          </h2>
        </div>
      </div>
    );
  }
}
