import React from 'react'
import profile_img from '../../assets/profile.jpeg'
import theme_pattern from '../../assets/theme_pattern.svg'
import './About.css'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1> About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I'm a passionate frontend developer currently pursuing my Master's degree, eager to contribute dynamic web solutions using HTML, CSS, JavaScript, and React.js. With a focus on creating intuitive user interfaces, I bring a commitment to clean, maintainable code and continuous learning.</p>
                    <p>My goal is to apply my academic background and practical skills in frontend development to create significant value in a dynamic work environment in the USA, driving innovation, fostering growth, and achieving exceptional results.</p>
                    <h1>Education</h1>
                    <p>1. Master Degree: Masters in Computer Science GPA: 3.88/4.00 </p>
                    <p>College: University Of Central Florida</p>
                    <p> Design and Analysis of Algorithms, Machine learning, Operating Systems, Advanced Computer Architecture, Computer Vision, Incident Responce Technologies
                        Malware and Software vulnerability, Machine learning for biomedical, Advanced Virtual reality.
                    </p>
                    <p>2. Degree: Bachelors in Computer Science GPA: 9/10</p>
                    <p>College: Bapatla Engineering college-India</p>
                    <p>Bachelor's in Computer Science laid a strong foundation and sparked my interest, leading me to pursue a Master's Degree in the same field. Key Courses during
                        my bachelors included Web development, Machine learning, Deep learning, Computer Vision, Python, OOPS, Data structures and algorithms, Advanced Data structures and algorithms,
                        Operating System, Cyber Security, Cloud Computing, UNIX, AI, IoT
                    </p>
                    {/* <p1>*Open to work*</p1> */}
                </div>
                <div className="about-skills">
                    <h1>Skills</h1>
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"90%"}}/></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>Next JS</p><hr style={{width:"40%"}}/></div>
                    <div className="about-skill"><p>Python</p><hr style={{width:"90%"}}/></div>
                    <div className="about-skill"><p>C</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>MYSQL</p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>flask</p><hr style={{width:"40%"}}/></div>
                    <div className="about-skill"><p>Node.js</p><hr style={{width:"50%"}}/></div>
    
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>4+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>10+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
        </div>
    
    </div>
  )
}

export default About
