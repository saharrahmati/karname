import React ,{useEffect, useState} from "react"
import classes from './index.module.css'
import axios from "axios"

function AddResponse (props) {
    const [responseList, setResponseList] = useState("")
    const [questionId,setQuestionId] = useState("")
    const {response} = props
    
    const handelChange = (e) => {
        const value = e.target.value;
        setResponseList(value)
    }
    const getQuestionId = () =>{
        response.map((item)=>{
            setQuestionId(item.questionId)
        })
    }
    useEffect(()=>{
        if(response){
            getQuestionId()
        }
    },[response])
    const handlePostQuestion = () => {
        const current = new Date();
        const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
        const hour = `${current.getHours()}:${current.getMinutes()}`;
        let data = JSON.stringify({
            respondentName: "نام پاسخ دهنده",
            response: responseList,
            date: date,
            hour:hour,
            questionId:questionId
          });
        axios.post('http://localhost:3001/Response',data,{headers:{"Content-Type" : "application/json"}})
        .then((res)=>{
            if(res.status === 201){
                alert('پاسخ شما با موفقیت ثبت شد.')
                props.getResponse()
            }

        })
    }
    return(
        <div className={classes.AddResponse}>
            <h2>پاسخ خود را وارد کنید</h2>
            <textarea 
                rows="6" 
                cols="50" 
                name="response" 
                value={responseList}
                onChange={(e)=>handelChange(e)}
            />
            <div className={classes.ErrorText}>محل قرارگیری متن راهنمای خطا</div>
            <button  onClick={handlePostQuestion}>ارسال پاسخ</button>
        </div>
    )
}

export default AddResponse