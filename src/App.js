import './App.css';
import React from 'react';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
function App() {
  return (
    <div>
      <Header />
      <hr/>
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<Home/>} />
    </Routes>
    
    </BrowserRouter>
    <hr style={{position:'absolute',bottom:'65px',left:'0px',width:'100%'}} />
    <Footer />
    </div>
   
  );
}

export default App;

