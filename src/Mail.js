import { ArrowBack,  CheckCircle,  ExitToApp,  Label,  LabelImportant,  MoreVert,  MoveToInbox, UnfoldMore, WatchLater } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React  from "react";
import ErrorIcon from '@mui/icons-material/Error';
import EmailIcon from '@mui/icons-material/Email';
import DeleteIcon from '@mui/icons-material/Delete';
import PrintIcon from '@mui/icons-material/Print';


import "./Mail.css"
import { selectOpenMail } from "./features/MailSlice";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";



function Mail(){

    const navigate=useNavigate();

const selectedMailz= useSelector(selectOpenMail); 

    
    console.log(selectedMailz)
    return (

            <div className="mail">

                <div className="mail__tools">

                    <div className="mail__toolsLeft" >

                            <IconButton onClick={()=> navigate("/")} >

                                <ArrowBack />
                            </IconButton>

                            <IconButton>
                                <MoveToInbox />
                            </IconButton>

                            <IconButton>
                                <ErrorIcon />
                            </IconButton>

                            <IconButton>
                                <DeleteIcon/>
                            </IconButton>

                            <IconButton>
                                <EmailIcon/>
                            </IconButton>

                            <IconButton>
                                <WatchLater/>
                            </IconButton>

                            <IconButton>
                                <CheckCircle/>
                            </IconButton>

                            <IconButton>
                                <Label/>
                            </IconButton>

                            <IconButton>
                                    <MoreVert/>
                            </IconButton>

                       

                    </div>

                    <div className="mail__toolsRight" >

                                <IconButton>
                                    <UnfoldMore/>
                                </IconButton>

                                <IconButton>
                                    <PrintIcon/>
                                </IconButton>

                                <IconButton>
                                    <ExitToApp/>
                                </IconButton>

                    </div>



                </div>

                <div className="mail__body">



                            <div className="mail__bodyHeader">
                                
              <h4> {selectedMailz.title} </h4>  

                    

                                        <LabelImportant className="mail__important"/>

                              <h3> {selectedMailz.subject} </h3> 


                            </div>




                                    <div className="mail__message">
                                          
                                                    <h2> {selectedMailz.message} </h2>
                                      

                                    </div>  
                                            

                       

                </div>



              


            </div>


    )
}

export default Mail;