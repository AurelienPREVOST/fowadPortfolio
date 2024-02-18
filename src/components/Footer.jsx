import React from 'react';
import githubIcon from '../assets/illustrations/github.svg';
import linkedInIcon from '../assets/illustrations/linkedin.svg'

function Footer() {
  return (
    <div id="footer">
      <span>xxxxxxxxxx@gmail.com</span>
      <span>06 XX XX XX XX</span>
      <span>55 Rue du Faubourg Saint-Honoré, 75008 Paris</span>
      <a href="https://github.com/fk-crafter/">
        <img src={githubIcon} alt="GitHub Icon" />
      </a>
      <a href="https://www.linkedin.com/in/fowad-khan-124b70282/">
        <img src={linkedInIcon} alt="Linkedin Icon" />
      </a>
    </div>
  );
}

export default Footer;