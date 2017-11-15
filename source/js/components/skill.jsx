import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Skill extends Component {

  static propTypes = {
    skill: PropTypes.object,
  };

  renderSkillLevel() {
    const skillRate = [];
    for (let i = 0; i < 10; i++) {
      skillRate.push(<div className={ `skill__level--dot${ (i < this.props.skill.level) ? ' skill__level--active-dot' : '' }` } key={ i } />);
    }
    return skillRate;
  }

  render() {
    return (
      <div className='skill'>
        <p className='skill__name'>
          { this.props.skill.name }
        </p>
        <div className='skill__level'>
          { this.renderSkillLevel() }
        </div>
      </div>
    );
  }
}
