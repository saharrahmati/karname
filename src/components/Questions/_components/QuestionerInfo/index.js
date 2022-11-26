import React from "react";
import classes from './index.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'


function QuestionerInfo (props) {
    return(
        <div className={classes.Subject}>
            {props.questioner ? <img src={props.questioner} alt="profilePic"/> : <FontAwesomeIcon icon={faUserCircle} className={classes.UserPic}/>}
            <span>{props.title}</span>
        </div>
    )
}

export default QuestionerInfo