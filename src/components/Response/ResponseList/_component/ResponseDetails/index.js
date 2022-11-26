import React from "react";
import classes from './index.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGrin } from "@fortawesome/free-solid-svg-icons";
import {faFrown} from "@fortawesome/free-solid-svg-icons";

function QuestionDetails (props) {
    const {hour,date} = props
    return(
        <div className={classes.Details}>
            <div className={classes.Clock}>
                <span>ساعت : </span>
                <span>{hour}</span>
            </div>
            <div className={classes.Date}>
                <span>تاریخ : </span>
                <span>{date}</span>
            </div>
            <div className={classes.FaGrin}>
                <FontAwesomeIcon icon={faGrin}/>
                <span>20</span>
            </div>
            <div className={classes.FaFrown}>
                <FontAwesomeIcon icon={faFrown}/>
                <span>20</span>
            </div>
        </div>
    )
}

export default QuestionDetails