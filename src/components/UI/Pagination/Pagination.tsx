import React, { Fragment } from "react"
import Pagination from "../../../models/pagination";
import classes from './Pagination.module.css';
const pagination: React.FC<Pagination> = (props) => {
    let numberPage = props.totalItems / props.numberItemPerPage;
    const links = [];

    for (let i = 1; i < numberPage + 1; i++) {
        links.push(<a className={classes.active} href="#">{i}</a>);
    }
    return <Fragment>
        <div className={classes.pagination}>
            <a href="#">&laquo;</a>
            {links}
            <a href="#">&raquo;</a>
        </div>
    </Fragment>
}

export default pagination;