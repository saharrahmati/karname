import React,  {useEffect,useState}from 'react';
import axios from 'axios';
import NavBar from './components/Navbar';
import Questions from './components/Questions';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Response from './components/Response';
import classes from './App.module.css';
import AddQuestion from './components/Questions/AddQuestion';


const baseUrl = 'http://localhost:3001/Response'
const baseUrl2= 'http://localhost:3001/questions'

function App() {
  const [response,setResponse] = useState(null)
  const [questions,setQuestions]= useState(null)
  const [openModal,setOpenModal] = useState(false)


  const getResponse = () => {
      axios.get(baseUrl).then((response)=>{
          setResponse(response.data)
      })
  }
  const getQuestion = () => {
    axios.get(baseUrl2).then((response)=>{
      setQuestions(response.data)
    })
  }
  const showAddQuestionModal = () => {
    setOpenModal(true)
  }
  const closeModal = () => {
    setOpenModal(false)
  }

  useEffect(()=>{
      getQuestion()
      getResponse()
  },[])
  return (
    <div className={classes.App}>
      {openModal? <div className={classes.BackDrop}></div>:null}
      {openModal ? <AddQuestion getQuestion={getQuestion} closeModal={closeModal} setOpenModal={setOpenModal}/> : null}
      <BrowserRouter>
        <NavBar showAddQuestionModal={showAddQuestionModal} />
        <Routes>
          <Route path='/' element={<Questions questions={questions} response={response}/>}></Route>
          <Route path='/response' element={<Response response={response} getResponse={getResponse} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
