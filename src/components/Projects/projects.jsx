import React from 'react';
import './projects.css';
import project1 from "../../assets/soon.jpg";
import project2 from "../../assets/soon.jpg";
import project3 from "../../assets/soon.jpg";
import project4 from "../../assets/soon.jpg";
import project5 from "../../assets/soon.jpg";
import project6 from "../../assets/soon.jpg";
import newtab from "../../assets/website.png";
import github1 from "../../assets/github1.svg";

const Projects = () => {
  const projects = [
    { image: project1, githubIcon: github1, siteIcon: newtab },
    { image: project2, githubIcon: github1, siteIcon: newtab },
    { image: project3, githubIcon: github1, siteIcon: newtab },
    { image: project4, githubIcon: github1, siteIcon: newtab },
    { image: project5, githubIcon: github1, siteIcon: newtab },
    { image: project6, githubIcon: github1, siteIcon: newtab },
  ];

  return (
    <section className="projects">
      <h2 className="projectsTitle">My projects</h2>
      <div className="projectsImgs">
        {projects.map((project, index) => (
          <div key={index} className="popUp">
            <div className="imgContainer">
              <img src={project.image} alt="" className="projectsImg" />
              <a href="" target="_blank" rel="noopener noreferrer">
                <div className="overlayLeft">
                    <img src={project.githubIcon} alt="Github" className="icon" />
                    <h2>GitHub</h2>
                </div>
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <div className="overlayRight">
                    <img src={project.siteIcon} alt="Website" className="icon" />
                    <h2>Website</h2>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
