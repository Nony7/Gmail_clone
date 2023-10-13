import React from 'react';

import { useDispatch } from 'react-redux';
import { logIn } from './features/UserSlice';
import { signInWithPopup, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from 'firebase/auth'; 
import { auth ,googleprovider} from './Firebase';
import   './Login.css';
import { GoogleAuthProvider } from 'firebase/auth';
import { useState } from 'react';
import { logOut } from "./features/UserSlice";

function Login() {


    const[registerEmail, setRegisterEmail] =useState("");
    const[registerPassword, setRegisterPassword] =useState("");
    const[loginEmail, setLoginEmail] =useState("");
    const[loginPassword, setLoginPassword] =useState("");


    const dispatch =useDispatch();


    

   

 
        

                   




















                    const Signinn = () =>{

                                signInWithPopup( auth, googleprovider )
                                    .then( ( user ) =>{

                                        dispatch(logIn({

                                            displayName: user.displayName,
                                            email: user.email,
                                            profile: user.photoURL
 
                                         }))


                                   /*      console.log(result)


                                            const name= result.user.displayName;
                                            const email= result.user.email;
                                            const profilePic= result.user.photoURL;

                                            localStorage.setItem("name", name)

                                            localStorage.setItem("email", email)

                                            localStorage.setItem("profilePic", profilePic)
 */


                                    })

                                    .catch((error) =>{
                                        console.log(error);
                                    });



                    }; 

    


  return (

<div className='login'>

<div class="logo text-center">
  <h1 >LOGIN CREDENTIALS:</h1>
</div>


            <div className='login__container'>

                            <br></br>

                            
                            <button id="login" onClick={Signinn} >SIGN IN  via google</button>

                            <br></br>
      
                                       
            </div>

        

              

        
 </div>

  )
}

export default Login