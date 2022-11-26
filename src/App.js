import React,  {useEffect,useState}from 'react';
import axios from 'axios';
import NavBar from './components/Navbar';
import Questions from './components/Questions';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from 'react-redux';
import Response from './components/Response';
import './App.css';


const baseUrl = 'http://localhost:3001/Response'
const baseUrl2= 'http://localhost:3001/questions'

function App() {
  const [response,setResponse] = useState(null)
  const [questions,setQuestions]= useState(null)

  const dispatch = useDispatch()

  const getResponse = () => {
      axios.get(baseUrl).then((response)=>{
          setResponse(response.data)
          dispatch({type:'SET_RESPONSE', payload:response.data})
      })
  }
  const getQuestion = () => {
    axios.get(baseUrl2).then((response)=>{
      setQuestions(response.data)
    })
  }
  useEffect(()=>{
      getQuestion()
      getResponse()
  },[])

  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Questions questions={questions}/>}></Route>
          <Route path='/response' element={<Response response={response} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
