import React from 'react';
import parkinson from '../../assets/Parkinson disease.png';
import biomed from '../../assets/biomed.webp';
import netflix from '../../assets/streamflix.png';
import theme_pattern from '../../assets/theme_pattern.svg';
import car from '../../assets/vehicle.webp';
import './MyWork.css';

const MyWork = () => {
  const projects = [
    {
      title: "Parkinson's Disease Detection using ML - 04/2023",
      image: parkinson,
      github: "https://github.com/Thapaswinithota/Parkinson-diseases-detection.git",
    },
    {
      title: "Vehicle Parking Space Counter using OpenCV - 11/2023",
      image: car,
      github: "https://github.com/Thapaswinithota/Vehicle-Parking-Detection-using-CV.git",
    },
    {
      title: "Research paper on GAT: Enhanced Protein-Protein Interaction and Drug Response Prediction - 04/2024",
      image: biomed,
      github: "https://github.com/Thapaswinithota/GAT-With-TGSA.git",
    },
    {
      title: "Netflix Clone - 06/2024",
      image: netflix,
      github: "https://github.com/Thapaswinithota/Netflix-Clone.git",
    },
    {
      title: "Tic-Tac-Toe Game - 11/2024",
      image: "https://images.pexels.com/photos/28454507/pexels-photo-28454507/free-photo-of-tic-tac-toe-game-on-black-surface.jpeg?auto=compress&cs=tinysrgb&w=600", // Replace with an image for the Tic-Tac-Toe game
      github: "https://github.com/Thapaswinithota/Tic-Tac-Toe-game",
      demo: "https://tic-tac-toe-game-three-sooty.vercel.app/", // Replace with your demo link (e.g., from Vercel or Netlify)
    },
  ];

  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My Work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-grid">
  {projects.map((project, index) => (
    <div key={index} className="project-card">
      <img src={project.image} alt={project.title} className="project-image" />
      <h2 className="project-title">{project.title}</h2>
      <div className="project-links">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          View on GitHub
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="demo-link"
          >
            Play Demo
          </a>
        )}
      </div>
    </div>
  ))}
</div>
    </div>
  );
};

export default MyWork;
