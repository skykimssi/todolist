import * as React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './router/Home';
import Memo from './router/Memo';
import Navigtion from './component/Navigation';
import Footer from './component/Footer';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Navigtion></Navigtion>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/memo" element={<Memo />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
