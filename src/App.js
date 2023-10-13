
import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Mail from  './Mail';
import EmailList from './EmailList';
import SendMail from './SendMail';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './Firebase';
import  "./features/MailSlice";
import { selectSendMessageIsOpen } from  "./features/MailSlice"; 

import Parman from './Parman';
import { logIn, selectUser } from './features/UserSlice';
import Login from './Login';

import {
  Routes,
  Route,

} from "react-router-dom";



function App() {
  

  const sendMessageIsOpen= useSelector(selectSendMessageIsOpen); 

    console.log(sendMessageIsOpen)
    const user= useSelector(selectUser) ;
    console.log(selectUser)
    const dispatch=useDispatch();


    useEffect(()=>{

      auth.onAuthStateChanged(user =>{
        if(user){
          // user is logged in
          dispatch(logIn({
            displayName: user.displayName,
            email: user.email,
            profile: user.photoURL

          }))
        }
      })
      
    }, [ ])
    
  
  return (


       
          <div className='overall'>


        
                            
               { !user ?(

                  <Login />

              ): (

                        
                        
    <div className="App">






      

    <Header  />   
    
    <div className='app__body'>
      <Sidebar    /> 
    
    
    
                                  <Routes>
    
                              
                                                      
                                                          <Route path='/Mail' element={ <Mail /> }   />
    
                                                         <Route path='/'  element={  <EmailList /> }   />

                                  <Route  path='/user/:userName'  element={ <Parman />  }     /> 

                                         
                                    </Routes>
    
    
    
    </div>
    
                { sendMessageIsOpen &&   < SendMail />   }
    
    </div>
    



              ) }
 


 </div>






  );

};


export default App;
 	