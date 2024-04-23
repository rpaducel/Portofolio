import React from 'react'
import './about.css'
import lp from '../../assets/laptop.jpg'

const About = () => {
    return(
      <section className="about" id="about">
        <div className="containerAbout">
          <div className="about-content">
            <div className="img-side">
              <img src={lp} alt="mee" className="mainImg"/>
            </div>
            <div className="text-side">
              <h3>About me</h3>
              <h4>
              Passionate tech enthusiast eager to learn and grow.
              </h4>
              <p>
                While my experience may be in its early stages, my enthusiasm and dedication are boundless.
                <br />
                <br />
                Eager to learn any new language and adapt to different team environments.
                <br />
                Let's connect and collaborate to create innovative solutions together!
              </p>
            </div>
          </div>
        </div>
      </section>  
     )
}
export default About