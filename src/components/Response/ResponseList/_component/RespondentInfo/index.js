import React from "react";
import classes from './index.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'


function RespondentInfo () {
    return(
        <div className={classes.Respondent}>
            <FontAwesomeIcon icon={faUserCircle} className={classes.UserPic}/>
            <span>مشکل Auth در ری اکت</span>
        </div>
    )
}

export default RespondentInfo