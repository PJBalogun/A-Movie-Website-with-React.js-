import React from "react";
//Link
import { Link } from "react-router-dom";

//styles
import styles from './BreadCrumb.module.css'

const BreadCrumb = ({ movieTitle }) => (
    <div className={styles.breadcrumb_container}>
        <div className={styles.breadcrumb}>
            <Link to="/"><span style={{ textDecoration: "none" }}>Home</span></Link>
            <span>|</span>
            <span>{movieTitle}</span>
        </div>
    </div>
)
export default BreadCrumb;