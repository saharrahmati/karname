import React from "react";
import classes from './index.module.css'
import RespondentInfo from './_component/RespondentInfo'
import ResponseDetails from './_component/ResponseDetails'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGrin } from "@fortawesome/free-solid-svg-icons";
import {faFrown} from "@fortawesome/free-solid-svg-icons";

function ResponseList (props) {
    const {response} = props
    return(
        <>
            {response && response.map((item)=>{
                return (
                    <div className={classes.ResponseList}>
                        <div className={classes.MainBox}>
                            <div className={classes.ResponseNav}>
                                <RespondentInfo respondentName= {item.respondentName} respondentImg={item.respondentImg}/>
                                <ResponseDetails hour={item.hour} date={item.date}/>
                            </div>
                            <div className={classes.ResponseDes}>
                                {item.response}
                            </div>
                            <div className={classes.BtnResponse}>
                                <button className={classes.GrinBtn}>
                                    <FontAwesomeIcon icon={faGrin}/>
                                    <span>پاسخ خوب بود</span>
                                </button>
                                <button className={classes.FrownBtn}>
                                    <FontAwesomeIcon icon={faFrown}/>
                                    <span>پاسخ خوب نبود</span>
                                </button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default ResponseList