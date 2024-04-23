import React from "react";
import "./contact.css";
import github from "../../assets/github-icon.png"
import linkedin from "../../assets/linkedin.png"
import mail from "../../assets/mail.png"


export const Contact = () => {
  return (
    <section id="contact" className="containerContact">
        <div className="text">
          <h2>Contact</h2>
          <p>Feel free to reach out!</p>
        </div>
        <ul className="links">
          <li className="link">
            <img src={mail} alt="Email icon" />
            <a href="mailto:rpaducell@gmail.com">rpaducell@gmail.com</a>
          </li>
          <li className="link">
            <img
              src={linkedin}
              alt="LinkedIn icon"
            />
            <a href="https://www.linkedin.com/in/rpaducel/">linkedin.com/rpaducel</a>
          </li>
          <li className="link">
            <img src={github} alt="Github icon" />
            <a href="https://www.github.com/rpaducel">github.com/rpaducel</a>
          </li>
        </ul>
    </section>
  );
}
export default Contact