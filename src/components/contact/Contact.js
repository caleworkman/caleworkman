import React, { Component } from "react";
import Modal from "../../components/modal/Modal.js";
import { copyText } from "../../Utilities.js";
import { isMobile } from "react-device-detect";

import "./Contact.css";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false
    }

    this.handleCopyText = this.handleCopyText.bind(this);
    this.toggleModal = this.toggleModal.bind(this);

    this.email = "caleworkman@gmail.com";
  }

  handleCopyText() {
    // On mobile, open mail app. On desktop, copy to clipbard.
    copyText(this.email);
    this.toggleModal();
  }

  toggleModal() {
    this.setState(prevState => {
      return {showModal: !prevState.showModal}
    });
  }

  render() {

    if (isMobile) {
      return (
        <a href={"mailto:" + this.email} target="_blank" rel="noopener noreferrer">
          {this.props.children}
        </a>
      )
    } else {
      return (
        <React.Fragment>
          {React.Children.map(this.props.children, child => {
            return React.cloneElement(child, {
              onClick: this.handleCopyText
            });
          })}

          {this.state.showModal
            ? <Modal onClick={this.toggleModal}>
                <div className="contact__modal">
                  Email copied successfully.
                </div>
              </Modal>
            : null
          }
        </React.Fragment>
      );
    }
  }
}

export default Contact;
