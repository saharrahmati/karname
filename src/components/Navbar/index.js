import React from "react";
import classes from './index.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import {useLocation} from 'react-router-dom';


function NavBar(props) {
    const location = useLocation()
    return (
        <div className={classes.NavBar}>
            <h1>{location.pathname === '/response' ?'جزییات سوال' :'لیست سوالات'}</h1>
            <div className={classes.NavInfo}>
                <button className={classes.AddQuestion} onClick={props.showAddQuestionModal}>
                    <FontAwesomeIcon icon={faPlus} />
                    <span>سوالات جدید</span>
                </button>
                <div className={classes.UserInfo}>
                    <FontAwesomeIcon icon={faUserCircle} className={classes.UserPic}/>
                    <span>سحر رحمتی</span>
                    <FontAwesomeIcon icon={faCaretDown} />
                </div>
            </div>
        </div>
    )
}

export default NavBar