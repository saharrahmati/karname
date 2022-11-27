import React, { useEffect, useState } from "react";
import classes from './index.module.css'
import RespondentInfo from './_component/RespondentInfo'
import ResponseDetails from './_component/ResponseDetails'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGrin } from "@fortawesome/free-solid-svg-icons";
import {faFrown} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";

function ResponseList (props) {
   const [goodResponse,setGoodResponse] = useState({})
   const [badResponse,setBadResponse] = useState({})

   const dispatch = useDispatch()

    const handleGoodResponse = (index) => {
        setGoodResponse({
            ...goodResponse,
            [index] : goodResponse[index] ?  goodResponse[index]+ 1 : 1
        })        
    };
    const handleBadResponse = (index) => {
        setBadResponse({
            ...badResponse,
            [index] : badResponse[index] ?  badResponse[index]+ 1 : 1
        })        
    };
    
    useEffect(()=>{
        dispatch({type:'SET_RESPONSE_Good', payload: goodResponse})
        dispatch({type:'SET_RESPONSE_Bad', payload: badResponse})
    },[goodResponse,badResponse])
    
    const {response} = props

    return(
        <>
            {response && response.map((item , index)=>{
                return (
                    <div className={classes.ResponseList} key={item.id}>
                        <div className={classes.MainBox}>
                            <div className={classes.ResponseNav}>
                                <RespondentInfo respondentName= {item.respondentName} respondentImg={item.respondentImg}/>
                                <ResponseDetails hour={item.hour} date={item.date} id={index}/>
                            </div>
                            <div className={classes.ResponseDes}>
                                {item.response}
                            </div>
                            <div className={classes.BtnResponse}>
                                <button className={classes.GrinBtn} onClick={()=>handleGoodResponse(index)}>
                                    <FontAwesomeIcon icon={faGrin}/>
                                    <span>پاسخ خوب بود</span>
                                </button>
                                <button className={classes.FrownBtn} onClick={()=>{handleBadResponse(index)}}>
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