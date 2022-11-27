import React , {useEffect,useState} from "react";
import QuestionerInfo from "../Questions/_components/QuestionerInfo";
import QuestionDetails from "../Questions/_components/QuestionDetails";
import AddResponse from "./AddResponse"
import classes from './index.module.css'
import ResponseList from "./ResponseList";
import {useLocation} from 'react-router-dom';


function Response (props){
    const [FilterResponse,setFilterResponse] = useState(null)

    const location = useLocation();
    const {questionId,hour,date,questioner,description,title}= location.state.item

    const getResponse = () => {
        const filterData= props.response && props.response.filter( item => item.questionId === questionId )
        setFilterResponse(filterData)
    }
    
    useEffect(()=>{
        if(props.response){
            getResponse()
        }
    },[props.response])
    
    return(
        <div className={classes.MainQuestion}>
            <div className={classes.MainBox}>
                <div className={classes.QuestionNav}>
                        <QuestionerInfo  title={title} questioner={questioner} />
                        <QuestionDetails hour={hour} date={date} FilterResponse={FilterResponse} />
                </div>
                <div className={classes.QuestionDes}>
                    {description}
                </div>
            </div>
            <h2>پاسخ ها</h2>
           <ResponseList response={FilterResponse}/>
           <AddResponse response={FilterResponse} getResponse={props.getResponse}/>
        </div>
    )
}


export default Response