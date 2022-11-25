import React from "react";
import classes from './index.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots} from '@fortawesome/free-solid-svg-icons'

function Details () {
    return(
        <div className={classes.Details}>
            <div className={classes.Clock}>
                <span>ساعت : </span>
                <span>16:48</span>
            </div>
            <div className={classes.Date}>
                <span>تاریخ : </span>
                <span>۱۴۰۰/۲/۱۵</span>
            </div>
            <div className={classes.Comments}>
                <FontAwesomeIcon icon={faCommentDots}/>
                <span>20</span>
            </div>
        </div>
    )
}

export default Details