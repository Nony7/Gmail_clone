
import CloseIcon from '@mui/icons-material/Close';

import React, { useEffect, useState } from "react";
import  "./SendMail.css";
import { Button } from "@mui/material";
import * as yup from 'yup';
import {yupResolver } from "@hookform/resolvers/yup"
import { useDispatch } from 'react-redux';

import { useForm } from 'react-hook-form';
import { FirebaseApp } from '@firebase/app';
import { db,auth,googleprovider  } from './Firebase';
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import {  addDoc, collection,getDocs } from '@firebase/firestore';
import { closeSendMessage } from './features/MailSlice';



function SendMail() {

    const dispatch=useDispatch();


        const [to, setto]= useState( "" );
 /*    const [password, setpassword]= useState( "" );  */
        const [subject, setsubject]= useState( "" );
        const [message, setmessage]= useState( "" );

        const emailsonline= collection(db, "emails");


        const schema= yup.object().shape({

                to:yup.string().email("Enter valid Email").required("your email is required"),
                subject:yup.string().required(),
                message:yup.string().required()          

        })







    

     const { register,  handleSubmit , formState: {errors}, } =useForm({

     resolver:yupResolver(schema),
               
            });




        const  formSubmit = async (formData) => {

            console.log(formData)

            try {

                await addDoc(emailsonline, {
                    to: to,
                    subject:subject,
                    message:message,
                    
                   
                });

            } catch(err){
                console.log(err)
            }

                setto("");
                setsubject("");
                setmessage("");

                alert("Email Sent Successfully!")
                dispatch(closeSendMessage()); 


        };









    return(

                <div className="sendMail">


                                    <div className="sendMail__Header">

                                                <h3>New Message</h3>

                                                <CloseIcon  onClick={( ) => dispatch(closeSendMessage())}

                                                className="sendMail__close"  />

                                    </div>


                                    <br></br>




                                             <form  onSubmit={handleSubmit(formSubmit)}>




 <input name='to'  type="email" placeholder='TO'   value={to}  {...register("to")}   onChange={(e)=> setto(e.target.value)}  />


        { errors.to  && <p className='sendMail__error'>to is required  </p>}
        

                                                                    <br></br>
                                                                    <br></br>

 <input name='subject'  type="text" placeholder='subject'  {...register("subject")}  value={subject}  onChange={(e)=> setsubject(e.target.value)}  />
                                     
 {errors.subject  && <p className='sendMail__error'>subject is required</p>}

                               

                                                                    <br></br>



 <input name='message'  type="text" placeholder='Message...'   value={message}   {...register("message")}  className='sendMail__message'    onChange={(e)=> setmessage(e.target.value)}    /> 


 {errors.message &&  <p className='sendMail__error'> Message is required </p>  }


                                                        <div className="sendMail__options">

          <Button className='sendMail__send' variant='contained' color='primary' type='submit'>     Send    </Button>
                                                                                         

                                                                    </div>

                                                        </form>



                </div>


    );

};

export default SendMail;