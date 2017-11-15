import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/header';
import HeroSection from '../../components/hero-section';
import About from '../../components/about';
import SkillsSection from '../../components/skillsSection';
import ContactSection from '../../components/contactSection';
import Footer from '../../components/footer';

@connect(() => ({}))
export default class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <HeroSection />
        <About />
        <SkillsSection />
        <ContactSection />
        <Footer />
      </div>
    );
  }
}
