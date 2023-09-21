import React from 'react'
import 'SwipeButtons.css'
import ReplayIcon from "@mui/icons/Replay";
import CloseIcon from "@mui/icons/Close";
import StarRateIcon from "@mui/icons/StarRate";
import FavouriteIcon from "@mui/icons/Favourite";
import FlashOnIcon from "@mui/icons/FalshOn";
import { IconButton } from '@mui/material';

const SwipeButtons = () => {
  return (
    <div className='swipeButtons'>
        <IconButton  className='swipeButtons__repeat' >
            <ReplayIcon fontSize='large' />
        </IconButton>
        <IconButton  className='swipeButtons__left'>
            <CloseIcon fontSize='large' />
        </IconButton>
        <IconButton  className='swipeButtons__star'>
            <StarRateIcon fontSize='large' />
        </IconButton>
        <IconButton  className='swipeButtons__right'>
            <FavouriteIcon fontSize='large' />
        </IconButton>
        <IconButton  className='swipeButtons__lightning'>
            <FlashOnIcon fontSize='large' />
        </IconButton>
    </div>
  )
}

export default SwipeButtons