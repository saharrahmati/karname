import './App.css';
import NavBar from './components/Navbar';
import Questions from './components/Questions';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Response from './components/Response';

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Questions />}></Route>
          <Route path='/response' element={<Response />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
