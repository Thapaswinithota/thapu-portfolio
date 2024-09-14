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
            University Of Central Florida-Aug 2024</h1>
          <ul>
          <li>Deepened my understanding of full-stack web development, including front-end frameworks, back-end integration, and building secure financial applications, while teaching students in the FinTech space.</li>
          <li>Enhanced my teaching skills by simplifying complex concepts for students, guiding them through hands-on labs, and facilitating engaging discussions.Strengthened leadership and mentoring abilities, helping students solve problems effectively and providing personalized feedback on their performance.</li>
          <li>Gained in-depth knowledge of operating system fundamentals, such as process scheduling, memory management, and security protocols, enhancing my ability to explain system processes clearly to students.</li>
          <li>Improved communication skills through regular interactions with students, explaining technical topics clearly and addressing their questions and concerns.</li>
          <li>Fostered a collaborative learning environment by encouraging teamwork and creating a supportive space for student growth and development.</li>
          </ul>
        </div>
        <div className="experience-container2">
          <h1>2. Software Developer Intern</h1>
          <h1>TechCiti Software Consulting Private Limited- May 2022 - Dec 2022</h1>
          <ul>
            <li>Worked on both Frontend and Backend and designed and implemented a web-based platform to facilitate the efficient disposal of food waste, aiming to reduce environmental impact and promote sustainable practices.</li>
            <li>Utilized Python for backend development, creating robust and scalable server-side functionalities, including data processing, user authentication, and waste tracking mechanisms.</li>
            <li>Integrated and managed a database to store and retrieve user information and waste disposal records, ensuring data integrity and security.</li>
            <li>Collaborated on the front-end development using HTML, CSS, and JavaScript to create an intuitive and user-friendly interface, enhancing user experience and engagement.</li>
            </ul>
        </div>
        <div className="experience-container3">
          <h1>2. Web Development Intern</h1>
          <h1>Internshala (Online Intern)-Oct 2020</h1>
          <ul>
            <li>Interned as a web developer, gaining hands-on experience in implementing HTML, CSS, Bootstrap, and working with Database Management Systems
            (DBMS)</li>
            <li>Successfully completed final project modules, demonstrating proficiency in front-end and back-end development.</li>
            <li>Acquired valuable insights into responsive web design and user experience principles.</li>
          </ul>
        </div>
    
    </div>
  )
}

export default Services
