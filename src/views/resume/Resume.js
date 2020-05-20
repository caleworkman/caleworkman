import React, { Component } from "react";
import Layout from "../layout/Layout.js";
import { Document, Page, pdfjs } from "react-pdf";
import "./Resume.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numPages: null,
      pageNumber: 1,
    }
    this.pdfFile = "./Workman_Resume_2020.pdf";
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

  render() {

    return (
      <Layout>
        <div className="resume">
          <a href="./Workman_Resume_2020.pdf">
            <Document
              file={this.pdfFile}
              onLoadSuccess={this.onDocumentLoadSuccess}>
              <Page
                pageNumber={this.state.pageNumber}
                renderAnnotationLayer={false}
                renderTextLayer={false}
              />
            </Document>
            <div className="resume__info">
              Download
            </div>
          </a>
        </div>
      </Layout>
    );
  }
}

export default Resume;
