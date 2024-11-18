import React from 'react'
import profile_img from '../../assets/profile.png'
import theme_pattern from '../../assets/theme_pattern.svg'
import './About.css'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1> Who I Am </h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Hey! I’m a full-stack developer finishing up my Master’s in Computer Science at the University of Central Florida. I’m into building smooth, user-friendly web apps with tools like React.js, Node.js, and Python—basically anything that brings ideas to life on the web. I’ve worked on a bunch of real-world projects, which taught me the ins and outs of Agile teamwork and the importance of writing clean, maintainable code.</p>
                    <p>I genuinely enjoy solving tricky problems and making sure the final product not only works well but also gives users a great experience. Outside of coding, you’ll find me diving into new tech trends, taking on side projects, and joining hackathons just for the thrill. I also love contributing to open-source projects, where I get to learn and give back at the same time.</p>
                    <p>If you’re looking to connect or collaborate on something impactful, let’s chat! I’m always up for new projects and love meeting like-minded people who share my passion for tech.</p>
                    {/* <p>Feel free to reach out if you'd like to discuss potential collaborations or just want to connect!</p> */}
                    <h1>My Education Journey</h1>
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
                    <h1>My Skill Set</h1>
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
