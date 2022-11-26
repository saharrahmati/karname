import React , {useEffect,useState} from "react";
import QuestionerInfo from "../Questions/_components/QuestionerInfo";
import QuestionDetails from "../Questions/_components/QuestionDetails";
import classes from './index.module.css'
import ResponseList from "./ResponseList";
import axios from "axios";
import {useLocation} from 'react-router-dom';

const baseUrl = 'http://localhost:3001/Response'

function Response (){
    const [response,setResponse] = useState(null)

    const location = useLocation();
    const id= location.state.id

    useEffect(()=>{
        axios.get(baseUrl).then((response)=>{
            const data = response.data
            const filterData= data.filter( item => item.questionId === id )
            setResponse(filterData)
        })
    },[])
    return(
        <div className={classes.MainQuestion}>
            <div className={classes.MainBox}>
                <div className={classes.QuestionNav}>
                    <QuestionerInfo />
                    <QuestionDetails />
                </div>
                <div className={classes.QuestionDes}>
                سلام من میخوام یه authentication ساده تو react بسازم اما این error رو بهم میده. نمیدونم مشکل از کجاست. عکس خروجی console رو هم گذاشتم که ببینید دقیقا چه مشکلی وجود داره 

                </div>
            </div>
            <h2>پاسخ ها</h2>
           <ResponseList response={response}/>
        </div>
    )
}

export default Response