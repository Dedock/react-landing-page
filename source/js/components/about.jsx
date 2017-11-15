import React, { Component } from 'react';


export default class Header extends Component {

  render() {
    return (
      <div className='wrapper' id='about'>
        <div className='container about'>
          <h3 className='about__title'>
            About
          </h3>
          <div className='about__content'>
            <div className='about__goals'>
              <p className='about__goals--title'>
                Goals
              </p>
              <p className='about__goals--description'>
                Lorem ipsum dolor sit amet, ac erat dolor quisque magna consectetur leo, pede nec phasellus praesent
                adipiscing. Nullam diam magna at mauris amet, non ut urna a commodo. Donec vivamus semper nisi velit,
                proin
                id turpis, vehicula amet nullam convallis adipiscing ut sit, sit viverra. Duis interdum eu eu sodales
                nec
                ut, non nibh accumsan eleifend. Purus ut vitae sapien dui duis dolores, porttitor tempus nascetur id ut,
                integer ut dignissim harum.
              </p>
            </div>


            <div className='about__avatar'>
              <img src='../../assets/img/avatar.png' alt='avatar' />
            </div>

            <div className='about__dreams'>
              <p className='about__dreams--title'>
                Dreams
              </p>
              <p className='about__dreams--description'>
                Lorem ipsum dolor sit amet, ac erat dolor quisque magna consectetur leo, pede nec phasellus praesent
                adipiscing. Nullam diam magna at mauris amet, non ut urna a commodo. Donec vivamus semper nisi velit,
                proin
                id turpis, vehicula amet nullam convallis adipiscing ut sit, sit viverra. Duis interdum eu eu sodales
                nec
                ut, non nibh accumsan eleifend. Purus ut vitae sapien dui duis dolores, porttitor tempus nascetur id ut,
                integer ut dignissim harum.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
