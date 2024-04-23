import React from 'react'
import './intro.css'
import bg from '../../assets/imagec.jpeg'
import linkedin from "../../assets/linkedin2.png"
import github from "../../assets/github-icon2.png"


const Intro = () => {
    return(
       <section id="home" className="hero">
        <div className="container">
            <div className="content">
                <div className="hero-main">
                    <div className="hero-text">
                        <h1><span className="">Hello,<br /></span>
                        <span className="introText">I'm <span className="introName">Razvan</span> </span></h1>
                        <p className="introPara">A passionate and driven full-stack developer <br />based in Cluj-Napoca, Romania.</p>
                        <span className='social'>
                            <a href="https://www.linkedin.com/in/rpaducel/"><img src={linkedin} alt="Profile" className="linkedin" /></a>
                            <a href="https://www.github.com/rpaducel"><img src={github} alt="Profile" className="github" /></a>
                        </span>
                    </div>
                    <div><img src={bg} alt="Profile" className="hero-img" /></div>
                </div>
            </div>
        </div>
       </section>
    )
}
export default Intro