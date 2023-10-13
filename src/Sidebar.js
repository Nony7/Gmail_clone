
import React from "react";
import { Button, IconButton } from "@mui/material";
import SidebarOption from "./SidebarOption"
import "./SidebarOption.css"
import "./Sidebar.css"


import AddIcon from '@mui/icons-material/Add';
import InboxIcon from '@mui/icons-material/Inbox';
import StarIcon from '@mui/icons-material/Star';
import PersonIcon from '@mui/icons-material/Person';
import DuoIcon from '@mui/icons-material/Duo';
import PhoneIcon from '@mui/icons-material/Phone';

import { useDispatch } from "react-redux";
import { openSendMessage } from "./features/MailSlice";


import  {signOut} from 'firebase/auth'; 
import { auth} from './Firebase';
import { logOut } from "./features/UserSlice";



function Sidebar(){

    const dispatch=useDispatch();




   const logoutEmailPasword = async ()=>{

        await signOut (auth).then(() =>{
            dispatch(logOut());
        });
        console.log("signed out succesfully")
    
};
 

    

 /*    const logoutEmailPasword = ()=>{

        auth.signOut().then(() =>{
            dispatch(logOut());
        });
}; */
 

    return ( <div className="sidebar">  

         

 <Button startIcon={<AddIcon fontSize="large" />}  className="sidebar__compose"  onClick={() => dispatch(openSendMessage())}   >
                                Compose

                        </Button> 



                <SidebarOption  selected={true}  Icon={InboxIcon}  title="Inbox" number="27" />

                  <SidebarOption   Icon={StarIcon}  title="Starred" number="24" />

                  <SidebarOption     title="Starred" number="424" />
                  <SidebarOption   title="Snooze" number="214" />
                  <SidebarOption    title="Important" number="34" />
                  <SidebarOption    title="Drafts" number="424" />
                  <SidebarOption    title="More" number="524" />


                <div className="sidebar__footer">


                    <div className="sidebar__footerIcons" >

                            <IconButton>
                                <PersonIcon></PersonIcon>
                            </IconButton>

                            <IconButton>
                                <DuoIcon></DuoIcon>
                            </IconButton>
    
                            <IconButton>
                                <PhoneIcon></PhoneIcon>
                            </IconButton>


                    </div>

                </div>

       <button onClick={logoutEmailPasword}> SIGN out </button> 



    </div>

    )
};


export default Sidebar;