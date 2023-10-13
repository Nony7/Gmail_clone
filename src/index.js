import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './index.css';
import {  BrowserRouter as Router}  from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
/*
import { useSelector } from 'react-redux';
 import  "./features/MailSlice";
import { selectSendMessageIsOpen } from  "./features/MailSlice"; 

import { selectUser } from './features/UserSlice';
import Login from './Login'; 
const sendMessageIsOpen= useSelector(selectSendMessageIsOpen); 

console.log(sendMessageIsOpen)
const user= useSelector(selectUser) ;
console.log(selectUser)
*/



const container = document.getElementById('root');
const root = createRoot(container);




root.render(
  <React.StrictMode>
    
    <Provider store={store}>
      

      
      <Router>

        
              <App />

    

      </Router>
      
    </Provider>
    
  </React.StrictMode>

);


