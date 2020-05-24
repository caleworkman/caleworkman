import React, { Component } from "react";
import Contact from "../../components/contact/Contact.js";
import Modal from "../../components/modal/Modal.js";
import {Link} from "react-router-dom"

import {ReactComponent as EmailIcon} from "../../assets/email.svg";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";

import "./Footer.css";


class Footer extends Component {

  render() {
    return (
      <div className="footer">
        <div className="footer__copyright">
          © 2020 Cale Workman
        </div>
        <div className="footer__socials">
          <Link to="//github.com/caleworkman" target="_blank">
            <img
              src={github}
              alt="GitHub"
              className="footer__social-icon"
            />
          </Link>
          <Link to="//www.linkedin.com/in/caleworkman/" target="_blank">
            <img
              src={linkedin}
              alt="LinkedIn"
              className="footer__social-icon"
            />
          </Link>
          <Contact>
            <EmailIcon className="footer__social-svg" />
          </Contact>
        </div>

      </div>
    );
  }
}

export default Footer;
