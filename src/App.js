import './App.css';
import NavBar from './components/Navbar';
import Questions from './components/Questions';
import Answers from './components/Answers'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Questions />}></Route>
          <Route path='/answers' element={<Answers />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
