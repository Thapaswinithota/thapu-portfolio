import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Typewriter from 'react-typewriter-effect';
import profile_img from '../../assets/profile.jpg';
import './Hero.css';

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="Profile" />
      <h1> Hello there! Welcome to my <em>Portfolio</em></h1>
      <h1>
        <span>I am Venkata Thapaswini Thota,</span> a passionate&nbsp;
        <Typewriter
          textStyle={{
            color: 'purple',
            fontWeight: 700,
            fontSize: '40px',
          }}
          startDelay={100}
          cursorColor="black"
          multiText={[
            "Full Stack Developer",
            "Software Developer",
            "UI/UX designer",
            "Web Developer",
          ]}
          multiTextDelay={1000}
          typeSpeed={100}
          deleteSpeed={50}
          multiTextLoop
        />
      </h1>
      <p>
        I am on a mission to turn ideas into meaningful digital solutions. I will be graduating
        this December with a Master’s degree in Computer Science from the University of Central
        Florida, where I focus on building responsive and user-friendly applications that tackle
        real-world problems. My skills include React.js, Node.js, and Python, allowing me to
        combine creativity and technical know-how to make projects come alive. This portfolio
        showcases my journey and the innovative projects I’ve worked on, highlighting my dedication
        to quality and my passion for technology.
      </p>
      <p>Feel free to explore my work, and I hope we can connect to create something amazing together!</p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with Me</AnchorLink>
        </div>
        <div className="hero-resume">
          <a href='https://drive.google.com/file/d/1U6IfpIcx03BJn3se61MiPdcug0Q638mb/view?usp=sharing' target='_blank' rel='noopener noreferrer'>My Resume</a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
