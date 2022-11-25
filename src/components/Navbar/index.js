import React from "react";
import classes from './index.module.css'

function NavBar() {
    return (
        <div className={classes.NavBar}>
            <h1>لیست سوالات </h1>
            <div className={classes.NavInfo}>
                <div>سوالات جدید</div>
                <div>سحر رحمتی</div>
            </div>
        </div>
    )
}

export default NavBar