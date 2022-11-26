import React from "react";
import classes from './index.module.css'
import RespondentInfo from './_component/RespondentInfo'
import ResponseDetails from './_component/ResponseDetails'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGrin } from "@fortawesome/free-solid-svg-icons";
import {faFrown} from "@fortawesome/free-solid-svg-icons";

function ResponseList () {
    return(
        <div className={classes.ResponseList}>
            <div className={classes.MainBox}>
                <div className={classes.ResponseNav}>
                    <RespondentInfo />
                    <ResponseDetails />
                </div>
                <div className={classes.ResponseDes}>
                    هراد دوجو یلکشم هچ اقیقد دینیبب هک متشاذگ مه ور console یجورخ سکع .تساجک زا لکشم منودیمن .هدیم مهب ور error نیا اما مزاسب react وت هداس authentication هی ماوخیم نم مالس
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
}

export default ResponseList