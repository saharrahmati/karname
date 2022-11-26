import React from "react";
import classes from './index.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots} from '@fortawesome/free-solid-svg-icons'

function QuestionDetails (props) {
    return(
        <div className={classes.Details}>
            <div className={classes.Clock}>
                <span>ساعت : </span>
                <span>{props.hour}</span>
            </div>
            <div className={classes.Date}>
                <span>تاریخ : </span>
                <span>{props.date}</span>
            </div>
            <div className={classes.Comments}>
                <FontAwesomeIcon icon={faCommentDots}/>
                <span>20</span>
            </div>
        </div>
    )
}

export default QuestionDetails