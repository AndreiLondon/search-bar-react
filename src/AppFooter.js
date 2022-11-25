import React, {Component, Fragment} from "react";
import './AppFooter.css'

export default class AppFooter extends Component {

    render() {
        const currentYear = new Date().getFullYear();
        return (
            <Fragment>
            <hr />
            <p className="footer"> Copyright &copy; 2021 - {currentYear} Simplify Code.io</p>
            </Fragment>
        );
    }
}