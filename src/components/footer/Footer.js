import React, { Component } from "react";
import Modal from "../../components/modal/Modal.js";
import {Link} from "react-router-dom"
import {isMobile} from "react-device-detect";
import "./Footer.css";

import {ReactComponent as EmailIcon} from "../../assets/email.svg";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false
    }

    this.handleClickEmail = this.handleClickEmail.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  componentDidMount() {
    document.addEventListener("copy", e => {
      e.clipboardData.setData("text/plain", "caleworkman@gmail.com");
      e.preventDefault();
    });
  }

  componentWillUnmount() {
    document.removeEventListener("copy", function(e){});
  }

  handleClickEmail() {
    // On mobile, open mail app. On desktop, copy to clipbard.
    if (isMobile) {
      console.log("mobile");
    } else {
      // copy to clipboard
      document.execCommand("copy");
      this.toggleModal();
    }
  }

  toggleModal() {
    this.setState(prevState => {
      return {showModal: !prevState.showModal}
    });
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
        </div>
        {this.state.showModal
          ? <Modal onClick={this.toggleModal}>
              <div className="footer__modal-container">
                <div className="footer__modal-content">
                  Email copied successfully.
                </div>
              </div>
            </Modal>
          : null
        }
      </div>
    );
  }
}

export default Footer;
