import logo from './logo.svg';
import './App.css';
import Signup from './Components/Signup';
import Login from './Components/Login';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Components/Home';
import Update from './Components/Update';
import About from './Components/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/Signup' element={<Signup/>}></Route>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/Update' element={<Update/>}></Route>
        <Route path='/About' element={<About/>}></Route>


      </Routes>  
      </BrowserRouter>
    
    </div>
  );
}

export default App;
