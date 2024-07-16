import React from 'react'
import theme_pattern from '../../assets/theme_pattern.svg'
import './Experiences.css'

const Services = () => {
  return (
    <div id='experiences' className= 'experiences'>
        <div className="experiences-title">
            <h1>My Experiences</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="experience-container">
          <h1>1. Graduate Teaching Assistant
            University Of Central Florida-Jan 2024</h1>
          <p>*As a Graduate Teaching Assistant (GTA) at UCF, I facilitated lab sessions and lectures for the Data Structures and Algorithms (DSA) course.</p>
          <p>*My role involved guiding undergraduate students in understanding complex DSA concepts, assisting with problem-solving, and evaluating their 
          performance through grading.</p>
          <p>*I aimed to create a supportive learning environment and fostered student growth and development throughout the course.</p>
        </div>
        <div className="experience-container2">
          <h1>2. Web Development Intern
            Internshala (Online Intern)-Oct 2022</h1>
            <p>*Interned as a web developer, gaining hands-on experience in implementing HTML, CSS, Bootstrap, and working with Database Management Systems
            (DBMS).</p>
            <p>*Successfully completed final project modules, demonstrating proficiency in front-end and back-end development.</p>
            <p>*Acquired valuable insights into responsive web design and user experience principles.</p>
        </div>
        <div className="experience-container3">
          <h1>3. Software Develper Intern-Sep 2021</h1>
          <h1>TechCiti Software Consulting Private Limited </h1>
            <p>*Engaged as a Software Developer intern, actively contributing to the "Bug Tracking Application" project.</p>
            <p>*Collaborated with the development team to enhance the application's functionality, resolve bugs, and improve overall performance.</p>
            <p>*Acquired valuable experience in software development lifecycle and teamwork.</p>
        </div>
    
    </div>
  )
}

export default Services
