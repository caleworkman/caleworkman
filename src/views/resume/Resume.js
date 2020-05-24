import React, { Component } from "react";
import Layout from "../layout/Layout.js";
import { Document, Page, pdfjs } from "react-pdf";
import { isMobile } from "react-device-detect";
import { Redirect } from "react-router";

import "./Resume.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numPages: null,
      pageNumber: 1,
      width: null
    }

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

    this.pdfFile = "./Workman_Resume.pdf";
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateWindowDimensions);
    this.updateWindowDimensions();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    if (isMobile) {
      this.setState({
        width: window.innerWidth - 32  // 1rem (16px) on each side
      });
    } else {
      this.setState({width: null})
    }
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

  render() {

    return (
      <Layout>
        <div className="resume" ref={this.resumeRef}>
          <a href="./Workman_Resume.pdf" target="_blank">
            <Document
              file={this.pdfFile}
              onLoadSuccess={this.onDocumentLoadSuccess}
              renderMode="svg">
              <Page
                pageNumber={this.state.pageNumber}
                renderAnnotationLayer={false}
                renderTextLayer={false}
                width={isMobile ? this.state.width : null}
              />
            </Document>
            <div className="resume__download">
              Download
            </div>
          </a>
        </div>
      </Layout>
    );
  }
}

export default Resume;
