import React from "react";
import  "./EmailRow.css";
import {  LabelImportantOutlined, StarBorderOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useNavigate } from 'react-router-dom';
/* import  {useHistory} from "react-router-dom" */
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { selectedMail } from "./features/MailSlice";
import { useDispatch } from "react-redux";
import { selectMail } from "./features/MailSlice";

/* function EmailRow({id, title,subject, description,time}) { */

function EmailRow({id, title, subject,message, time}) {



    const navigate=useNavigate();
    const dispatch =useDispatch();



        const openMail=()=>{
             dispatch(selectMail({
 
                        message,
                        title, 
                        subject,
     
            })) ;

            navigate("/Mail")
            
        };



    return (

            <div className="emailRow"  onClick={openMail}>

    

    <div className="emailRow">



                <div className="emailRow__options">
                  
                        <IconButton>

                            <CheckBoxOutlineBlankIcon   />
                            
                        </IconButton>

                    <IconButton>
                        <StarBorderOutlined />
                    </IconButton>


                    <IconButton>
                        <LabelImportantOutlined />
                    </IconButton>

                </div>



        <h3  className="emailRow__title"> {title} </h3>
            


                <div className="emailRow__subject">

                                    <h4>

                                        {subject}


                                    </h4>

                </div>




              < div className="emailRow__message" >  
              
                  
                    <p>  
                   
   {/*          {message} */}


                    </p>

              
              </div>   


      
              
              
        
            
 
    </div>;

    </div>


    );
};

export default EmailRow;