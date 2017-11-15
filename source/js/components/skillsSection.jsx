import React, { Component } from 'react';
import Skill from './skill';

const skills = [
  { name: 'HTML5', level: 8 },
  { name: 'CSS3', level: 5 },
  { name: 'JavaScript', level: 10 },
  { name: 'ReactJS', level: 8 },
  { name: 'AngularJS', level: 8 },
];

export default class SkillsSection extends Component {

  renderSkills() {
    return skills.map((skill, index) => {
      return <Skill skill={ skill } key={ index } />;
    });
  }

  render() {
    return (
      <div className='wrapper' id='skills'>
        <div className='container skills'>
          <h3 className='skills__title'>
            skills
          </h3>
          { this.renderSkills() }
        </div>
      </div>
    );
  }
}
