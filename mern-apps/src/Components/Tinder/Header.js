import React from 'react'
import "./Header.css";
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import { IconButton } from '@mui/material';

const Header = () => {
  return (
    <div className='header'>
        <IconButton>
            <PersonIcon fontSize='large' className='header__icon' />
        </IconButton>

        <img 
        src="Images/tinder.png" 
        className='header__logo' 
        alt="Tinder_logo" />

        <IconButton>
            <ForumIcon fontSize='large' className='header__icon' />
        </IconButton>
    </div>
  )
}

export default Header