import React, { Component } from "react";
import {Link} from "react-router-dom"
import {isMobile} from "react-device-detect";
import "./Footer.css";

import {ReactComponent as EmailIcon} from "../../assets/email.svg";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.handleClickEmail = this.handleClickEmail.bind(this);

    this.emailRef = React.createRef();
  }

  handleClickEmail() {
    // On mobile, open mail app. On desktop, copy to clipbard.
    const email = "caleworkman@gmail.com";

    if (isMobile) {
      console.log("mobile");
    } else {
      // copy to clipboard
      console.log(this.emailRef);
      document.execCommand("copy");
    }
  }

  render() {
    return (
      <div className="footer">
        <div className="footer__copyright">
          Copyright Cale Workman 2020
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
          <EmailIcon
            className="footer__social-svg"
            onClick={this.handleClickEmail}
          />
          <div className="footer__email" ref={this.emailRef}>
            caleworkman@gmail.com
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
