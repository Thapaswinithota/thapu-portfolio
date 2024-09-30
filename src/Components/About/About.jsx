import React from 'react'
import profile_img from '../../assets/profile.jpg'
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
                    <p>Hello! again with a strong foundation in both front-end and back-end technologies. Currently pursuing my Master’s degree in Computer Science at the University of Central Florida, I have a deep interest in creating innovative and efficient software solutions.I specialize in developing dynamic web applications using modern frameworks like React.js, Node.js, and Python. My experience includes working on real-world projects, collaborating in team settings, and applying Agile methodologies to deliver high-quality results. I thrive on solving complex problems and continuously seek to learn new skills and technologies.</p>
                    <p>In addition to my technical skills, I am committed to writing clean, maintainable code and focusing on user experience. I believe that effective communication and collaboration are key to successful project outcomes, and I enjoy working with cross-functional teams to bring ideas to life. When I'm not coding, you can find me exploring the latest trends in technology, participating in hackathons, or contributing to open-source projects. I’m excited to connect and explore opportunities to collaborate on impactful projects!</p>
                    {/* <p>Feel free to reach out if you'd like to discuss potential collaborations or just want to connect!</p> */}
                    <h1>Education</h1>
                    <p>1. Master Degree: Masters in Computer Science <em>GPA</em>: 3.88/4.00 </p>
                    <p>College: University Of Central Florida</p>
                    <p> Design and Analysis of Algorithms, Machine learning, Operating Systems, Advanced Computer Architecture, Computer Vision, Incident Responce Technologies
                        Malware and Software vulnerability, Machine learning for biomedical, Advanced Virtual reality, Advanced Software Systems Security.
                    </p>
                    <p>2. Degree: Bachelors in Computer Science <em>GPA</em>: 8/10</p>
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
                    <div className="about-skill"><p>React JS</p><hr style={{width:"80%"}}/></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>Angular JS</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>Python</p><hr style={{width:"90%"}}/></div>
                    <div className="about-skill"><p>C</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>MYSQL</p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>flask</p><hr style={{width:"40%"}}/></div>
                    <div className="about-skill"><p>Node.js</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>Java</p><hr style={{width:"40%"}}/></div>
                    <div className="about-skill"><p>Django</p><hr style={{width:"70%"}}/></div>
    
                </div>
            </div>
        </div>
        <div className="about-achievements">
            {/* <div className="about-achievement">
                <h1>+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div> */}
            {/* <hr /> */}
            <div className="about-achievement">
                <h1>10+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
        </div>
    
    </div>
  )
}

export default About
