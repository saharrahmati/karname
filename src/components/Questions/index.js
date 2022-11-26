import React, { useEffect, useState } from 'react'
import classes from './index.module.css'
import QuestionDetails from './_components/QuestionDetails'
import QuestionerInfo from './_components/QuestionerInfo'
import { useNavigate} from "react-router-dom";
import {connect} from 'react-redux'


function Questions (props) {
    const navigate = useNavigate()
    const {questions,response} = props

    const handleShowResponse = (item) => {
        navigate('/response',{ state: {item} })
    }

    return(
       <>
         {questions && questions.map((item )=>{
            return (
                <div className={classes.QuestionsList} key={item.questionId}>
                    <div className={classes.MainBox}>
                        <div className={classes.QuestionNav}>
                            <QuestionerInfo title={item.title} questioner={item.questioner} />
                            <QuestionDetails hour={item.hour} date={item.date} response={response} question={item}/>
                        </div>
                        <div className={classes.QuestionSub}>
                            {item.description}
                        </div>
                        <div className={classes.ShowDetails}>
                            <button onClick={()=>handleShowResponse(item)}>مشاهده جزییات</button>
                        </div>
                    </div>
                </div>
            )
        })}
       </>
        
    )
}
const mapStateToProps = (state) => {
    return {
        response : state
    }
}

export default connect(mapStateToProps)(Questions)