import React from 'react'
import classes from './index.module.css'
import QuestionDetails from './_components/QuestionDetails'
import QuestionerInfo from './_components/QuestionerInfo'
import { useNavigate ,Link } from "react-router-dom";


function Questions () {
    const navigate = useNavigate()

    const handleShowResponse = () => {
        navigate('/response')
    }
    return(
        <div className={classes.QuestionsList}>
            <div className={classes.MainBox}>
                <div className={classes.QuestionNav}>
                    <QuestionerInfo />
                    <QuestionDetails />
                </div>
                <div className={classes.QuestionSub}>
                    هراد دوجو یلکشم هچ اقیقد دینیبب هک متشاذگ مه ور console یجورخ سکع .تساجک زا لکشم منودیمن .هدیم مهب ور error نیا اما مزاسب react وت هداس authentication هی ماوخیم نم مالس
                </div>
                <div className={classes.ShowDetails}>
                    <button onClick={handleShowResponse}>مشاهده جزییات</button>
                </div>
            </div>
        </div>
    )
}

export default Questions