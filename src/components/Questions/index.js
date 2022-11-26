import React, { useEffect, useState } from 'react'
import classes from './index.module.css'
import QuestionDetails from './_components/QuestionDetails'
import QuestionerInfo from './_components/QuestionerInfo'
import { useNavigate} from "react-router-dom";
import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

function Questions () {
    const navigate = useNavigate()

    const [questions,setQuestions]= useState(null)

    useEffect(()=>{
        axios.get('http://localhost:3001/questions').then((response)=>{
            setQuestions(response.data)
        })
    },[])
    const handleShowResponse = (id) => {
        navigate('/response',{questionId : id})
    }
    return(
       <>
         {questions && questions.map((item )=>{
            return (
                <div className={classes.QuestionsList}>
                    <div className={classes.MainBox}>
                        <div className={classes.QuestionNav}>
                            <QuestionerInfo title={item.title} questioner={item.questioner}/>
                            <QuestionDetails hour={item.hour} date={item.date}/>
                        </div>
                        <div className={classes.QuestionSub}>
                            {item.description}
                        </div>
                        <div className={classes.ShowDetails}>
                            <button onClick={()=>handleShowResponse(item.questionId)}>مشاهده جزییات</button>
                        </div>
                    </div>
                </div>
            )
        })}
       </>
        
    )
}

export default Questions