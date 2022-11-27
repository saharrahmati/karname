import React,{useEffect,useState} from "react";
import classes from './index.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots} from '@fortawesome/free-solid-svg-icons'

function QuestionDetails (props) {
    const [responseLength , setResponseLength]= useState(null)
    const {question,response,FilterResponse} = props

    const getResponseLength = () => {
        const filterData= response.filter((item)=> item.questionId === question.questionId).length
        setResponseLength(filterData)

    }
    useEffect(()=>{
        if(response){
            getResponseLength() 
        }
    },[response])

    return(
        <div className={classes.Details}>
            <div className={classes.Clock}>
                <span>ساعت : </span>
                <span>{props.hour}</span>
            </div>
            <div className={classes.Date}>
                <span>تاریخ : </span>
                <span>{props.date}</span>
            </div>
            <div className={classes.Comments}>
                <FontAwesomeIcon icon={faCommentDots}/>
                <span>{FilterResponse && FilterResponse? FilterResponse.length : responseLength}</span>
            </div>
        </div>
    )
}

export default QuestionDetails