import React, { Component, Fragment, Section } from "react";
import { Document, Page } from "react-pdf";
import API from "../../utils/API";
// import Pdf from "../../images/Sample_Menu.pdf";

class PdfPage extends Component {
    state = {
        numPages: null,
        pageNumber: 1,
        menu: null
    }

    componentDidMount() {
        this.loadMenu();

    }

    loadMenu = () => {
        API.getChef(this.props.match.params.id)
            .then(res => this.setState({ menu: res.data.menu }))
            // .then(res => console.log(res.data.menu))
            .catch(err => console.log(err));
    };

    onDocumentLoad = ({ numPages }) => {
        // console.log("booty");
        this.setState({ numPages });
        console.log(this.state);
    }

    render() {
        const { pageNumber, numPages, menu } = this.state;
        return (
            <div>
                <Fragment>
                <Section className="center">
                    <Document
                        file={`data:application/pdf;base64,${menu}`}
                        onLoadSuccess={this.onDocumentLoad}
                    >
                        <Page pageNumber={pageNumber} />
                    </Document>
                    <p>Page {pageNumber} of {numPages}</p>
                </Section>
                </Fragment>
            </div>
        );
    }
}
export default PdfPage;