import React from "react";
import classes from './index.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGrin } from "@fortawesome/free-solid-svg-icons";
import {faFrown} from "@fortawesome/free-solid-svg-icons";
import {connect} from "react-redux"

function QuestionDetails (props) {
    const {hour,date,grinEmoji,frownEmoji,id,responseGood,responseBad} = props
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
                {<span>{props.responseGood[id]}</span>}
                <span>{grinEmoji}</span>
            </div>
            <div className={classes.FaFrown}>
                <FontAwesomeIcon icon={faFrown}/>
                {<span>{props.responseBad[id]}</span>}
                <span>{frownEmoji}</span>
            </div>
        </div>
    )
}

const mapStateToProps = (state)=> {
    return {
        responseGood: state.responseGood,
        responseBad: state.responseBad
    }
}

export default connect(mapStateToProps)(QuestionDetails)