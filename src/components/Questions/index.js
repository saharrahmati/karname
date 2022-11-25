import React from 'react'
import classes from './index.module.css'
import Details from './_components/Details'
import Subject from './_components/Subject/Index'
import { useNavigate ,Link } from "react-router-dom";


function Questions () {
    const navigate = useNavigate()

    const handleShowAnswers = () => {
        navigate('/answer')
    }
    return(
        <div className={classes.QuestionsList}>
            <div className={classes.MainBox}>
                <div className={classes.QuestionNav}>
                    <Subject />
                    <Details />
                </div>
                <div className={classes.QuestionSub}>
                    هراد دوجو یلکشم هچ اقیقد دینیبب هک متشاذگ مه ور console یجورخ سکع .تساجک زا لکشم منودیمن .هدیم مهب ور error نیا اما مزاسب react وت هداس authentication هی ماوخیم نم مالس
                </div>
                <div className={classes.ShowDetails}>
                    <button onClick={handleShowAnswers}>مشاهده جزییات</button>
                </div>
            </div>
        </div>
    )
}

export default Questions