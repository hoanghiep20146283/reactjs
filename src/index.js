import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { About, Contact } from './App';
import App from './App';
import CustomHook from './components/hooks/CustomHook/CustomHook';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/app' element={<App destructuredProperty="destructuredProperty" />}>
        </Route>
        <Route path='/about' element={<About />} />
        <Route path='/custom' element={<CustomHook initialValue='12' />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
