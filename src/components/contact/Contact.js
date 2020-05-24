import React, { Component } from "react";
import Modal from "../../components/modal/Modal.js";
import { copyText } from "../../Utilities.js";
import {isMobile} from "react-device-detect";

import "./Contact.css";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false
    }

    this.handleContact = this.handleContact.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  handleContact() {
    // On mobile, open mail app. On desktop, copy to clipbard.
    if (isMobile) {
      console.log("mobile");
      // TODO: open mail app
    } else {
      copyText("caleworkman@gmail.com");
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
      <React.Fragment>
        {React.Children.map(this.props.children, child => {
          return React.cloneElement(child, {
            onClick: this.handleContact
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

export default Contact;
