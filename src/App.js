import * as React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './router/home';
import Memo from './router/memo';
import Navigtion from './component/Navigation';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Navigtion></Navigtion>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/memo" element={<Memo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
