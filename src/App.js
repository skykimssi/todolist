import * as React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './router/home';
import Memo from './router/memo';
function App() {
  return (
    <div className='App'>
      <div>네비메뉴 만들면 얘는 고정인가 </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="*" element={<Home />} />
          <Route path="/memo" element={<Memo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
