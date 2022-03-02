import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Art from './components/Art';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Results from './components/Results'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='results' element={<Results />}></Route>
          <Route path=':artID' element={<Art />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
