import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import profile_img from '../../assets/profile.jpeg'
import './Hero.css'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1>Welcome to my Portfolio</h1>
        <h1><span>I am Venkata Thapaswini Thota,</span> Full Stack Developer</h1>
        <p>I specialize in creating dynamic, user-friendly websites using HTML, CSS, JavaScript, and React.js. My passion for designing clean and intuitive interfaces drives me to continually learn and improve. With a keen interest in Python, Machine Learning, Artificial Intelligence, and DevOps, I am excited to tackle complex challenges and drive meaningful advancements in technology.I thrive on innovation and possess a strong technical acumen, making me eager to collaborate with diverse, cross-functional teams to create transformative solutions. As a hardworking professional, I am experienced in delivering high-quality work and consistently exceeding expectations. I am ready to take on challenging assignments and contribute my skills and expertise to achieve outstanding results.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with Me</AnchorLink></div>
            <div className="hero-resume">
                <a href='Resume.pdf' target='_blank' rel='noopener noreferrer'>My Resume</a>
            </div>
        </div>
      
    </div>
  )
}

export default Hero
