import React , {useState} from "react";
import classes from './index.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes} from '@fortawesome/free-solid-svg-icons'
import axios from "axios";


function AddQuestion (props) {
    const [state, setState] = useState({
        title: "",
        description: ""
      })
    const handelChange = (e) => {
        const value = e.target.value;
        setState({
          ...state,
          [e.target.name]: value
        });
    }
     
    const handlePostQuestion = () => {
        const current = new Date();
        const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
        const hour = `${current.getHours()}:${current.getMinutes()}`;
        let data = JSON.stringify({
            title: state.title,
            description: state.description,
            date: date,
            hour:hour
          });
        axios.post('http://localhost:3001/questions',data,{headers:{"Content-Type" : "application/json"}})
        .then((res)=>{
            if(res.status === 201){
                props.setOpenModal(false)
                alert('پرسش شما با موفقیت ثبت شد.')
                props.getQuestion()
            }

        })
    }
    return(
        <div className={classes.AddQuestion}>
            <div className={classes.Title}>
                <h2>ایجاد سوال جدید</h2>
                <FontAwesomeIcon icon={faTimes} onClick={props.closeModal} style={{cursor:"pointer"}}/>
            </div>
            <div className={classes.QuestionForm}>
                <label htmlFor="subject">موضوع</label><br />
                <input 
                    type="text" 
                    id="title" 
                    name="title" 
                    value={state.title} 
                    onChange={(e)=>handelChange(e)}
                /><br />
                <label htmlFor="question">متن سوال</label><br />
                <textarea 
                    rows="6" 
                    cols="50" 
                    name="description" 
                    value={state.description} 
                    onChange={(e)=>handelChange(e)}
                /><br/>
            </div> 
            <div className={classes.BtnGroup}>
                <button className={classes.CancelBtn} onClick={props.closeModal}>انصراف</button>
                <button className={classes.SubmitBtn} onClick={handlePostQuestion}>ایجاد سوال</button>
            </div>
        </div>
    )
}

export default AddQuestion
