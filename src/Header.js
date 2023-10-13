
import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, IconButton } from '@mui/material';
import { ArrowDropDown } from '@mui/icons-material';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useSelector } from 'react-redux';
import { selectUser } from './features/UserSlice';


function Header() {


        const userd=useSelector(selectUser);

    return <div className='header'>

    

        <div className='header_left'>
            <IconButton>

            <MenuIcon />

            </IconButton>
          
            
    <img src="https://www.cleanfox.io/blog/wp-content/uploads/2020/03/gmail-1.jpeg" alt="" className='img1'
    
    />

        </div>

        <div className='header_middle'>
 
                        <SearchIcon />
                                                
                        <input type="text" placeholder='SEARCH GMAIL'  />
                        <ArrowDropDown className='header_input' />


        </div>

        <div className='header_right'>

                <IconButton>

                    <AppsIcon />
                </IconButton>

                <IconButton>

                <NotificationsIcon />

                </IconButton>

        <Avatar     src={userd.photoURL}   />

        </div>


    </div>

  
}



export default Header;