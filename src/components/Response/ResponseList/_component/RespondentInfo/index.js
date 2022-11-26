import React from "react";
import classes from './index.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'


function RespondentInfo (props) {
    const {respondentName,respondentImg} = props
    return(
        <div className={classes.Respondent}>
            {respondentImg ? <img src={respondentImg} title="respondentImg"/>:<FontAwesomeIcon icon={faUserCircle} className={classes.UserPic}/>}
            <span>{respondentName}</span>
        </div>
    )
}

export default RespondentInfo