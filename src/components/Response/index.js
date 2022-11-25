import React from "react";
import QuestionerInfo from "../Questions/_components/QuestionerInfo";
import QuestionDetails from "../Questions/_components/QuestionDetails";
import classes from './index.module.css'
import ResponseList from "./ResponseList";

function Response (){
    return(
        <div className={classes.MainQuestion}>
            <div className={classes.MainBox}>
                <div className={classes.QuestionNav}>
                    <QuestionerInfo />
                    <QuestionDetails />
                </div>
                <div className={classes.QuestionDes}>
                /* سلام من میخوام یه authentication ساده تو react بسازم اما این error رو بهم میده. نمیدونم مشکل از کجاست. عکس خروجی console رو هم گذاشتم که ببینید دقیقا چه مشکلی وجود داره */

                </div>
            </div>
            <h2>پاسخ ها</h2>
           <ResponseList />
           <ResponseList />
           <ResponseList />
        </div>
    )
}

export default Response