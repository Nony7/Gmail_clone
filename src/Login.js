import React from 'react';

import { useDispatch } from 'react-redux';
import { logIn } from './features/UserSlice';
import { signInWithPopup} from 'firebase/auth'; 
import { auth ,googleprovider} from './Firebase';
import   './Login.css';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
/* import { GoogleAuthProvider } from 'firebase/auth';
import { useState } from 'react';
import { logOut } from "./features/UserSlice"; */

function Login() {


/*     const[registerEmail, setRegisterEmail] =useState("");
    const[registerPassword, setRegisterPassword] =useState("");
    const[loginEmail, setLoginEmail] =useState("");
    const[loginPassword, setLoginPassword] =useState(""); */


    const dispatch =useDispatch();


    

   

 
        

                   




















                    const Signinn = () =>{

                                signInWithPopup( auth, googleprovider )
                                    .then( ( user ) =>{

                                        dispatch(logIn({

                                            displayName: user.displayName,
                                            email: user.email,
                                            profile: user.photoURL
 
                                         }))


        

                                    })

                                    .catch((error) =>{
                                        console.log(error);
                                    });



                    }; 

    


  return (

<div className='login'>

<div class="logo text-center">

  <Alert  variant="primary" >
  Google Sign In
        </Alert>
</div>


      

                            <br></br>

                            

                              <div  className='botton' >
                              <Button variant="primary" onClick={Signinn} >Sign In </Button>

                              </div>

                        

                            <br></br>
      
      

        

              

        
 </div>

  )
}

export default Login