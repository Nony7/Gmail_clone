import { IconButton } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import SettingsIcon from '@mui/icons-material/Settings';
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

import { db } from "./Firebase";
import React, { useEffect, useState } from "react";  
import './EmailList.css'
import Section from "./Section";
import EmailRow from "./EmailRow";
import  {collection, getDocs} from 'firebase/firestore'



function EmailList(){

const [emails, setEmails]=useState( [ ] )
  
/* 
    useEffect(() =>{

            db.collection('emails').onSnapshot (snapshot =>{

                setEmails(snapshot.docs.map(doc=>({

                    id:doc.id,
                    data:doc.data()
                })))

            })

    }, []);

 */

/*   useEffect(() =>{

        db.collection('emails').onSnapshot(snapshot =>(

            setEmails(snapshot.docs.map(doc => doc.data() ))


        )) 
                    
},  [ ] );
 */

    useEffect (()=>{

            ;(async ( ) => {

                const colRef = collection(db, 'emails')

                const snapshots= await getDocs(colRef)

                const docs=snapshots.docs.map((doc) =>{

                            const data= doc.data()

                            data.id= doc.id

                            return data

                })
                setEmails(docs)
              console.log(docs)
            }) ()
    },  [ ] )


 
    return(
    
    <div className="emailList">

                 <div className="emailList__settings">





                                    <div className="emailList__settingsLeft">
                                        

                                                                <IconButton>
                                                    <ArrowDropDownIcon />
                                                                </IconButton>

                                                                <IconButton>    
                                                    <RedoIcon />
                                                                </IconButton>
                                                    
                                                                <IconButton>
                                                    <MoreVertIcon />
                                                                </IconButton>

                                    </div>

        





                                  <div className="emailList__settingsRight">
                                                                                
                                                                <IconButton>

                                                                            <ChevronLeftIcon />

                                                                </IconButton>
                                                                    


                                                                <IconButton>
                                                                    <ChevronRightIcon />
                                                                </IconButton>


                                                                <IconButton>
                                                                            <KeyboardHideIcon />
                                                                </IconButton>


                                                                <IconButton>
                                                                            <SettingsIcon />
                                                                </IconButton>


                                      </div>






                            <div className="emailList__Sections">

                                        <Section  Icon={InboxIcon}  title="primary" color="" selected    />
                                        <Section  Icon={PeopleIcon}  title="Social" color="" selected    />
                                        <Section  Icon={LocalOfferIcon}  title="Promotions" color="" selected    />

                            </div>

                            <br></br>





                                    <div className="emailList__list" >  

                                                              
                                                 {emails.map (({ to, subject, message ,id }) =>(

                                       <EmailRow  key={id}  id={id}   title={to}  subject={subject}   message= {message}   />
                                                                

                                                    ))} 




                                           {/*          {
                                            
                                                        emails.map(({ id, data})=>{

                                          return   <EmailRow  key={id}   title={data.to}  subject={data.subject}   message= {data.message}   />

                                                        })
                                                    }
  */}



                                    </div>






                                {/*     <EmailRow  title="to" subject="subjetc"   description= "describe" time="800pm"  /> */}

                                
                        {/*         {

                                            emails.map(({id,data})=>{

                                                    return  <EmailRow  to={data.to}  subject={data.subject}   message={data.message}     />

                                            })

                                }
 */}


        </div>

            

    </div>


    )
}

export default EmailList;