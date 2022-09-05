import React from 'react'
import { BrowserRouter as BR, Routes, Route } from 'react-router-dom'
import Home from './Component/Home'
import Navbar from './Component/Navbar'
import Box from '@mui/material/Box'
import './index.css'
import VideoDetails from './Component/VideoDetails'
import ChannelDetails from './Component/ChannelDetails'
import Search from './Component/Search'
export default function App() {
  return (

    <BR>
      <Box sx={{ backgroundColor: '#000' }}>
        <Navbar />
        <Routes>

          <Route path='/' element={<Home />} />
           <Route path='/video/:id' element={<VideoDetails/>} />
           <Route path='/channel/:id' element={<ChannelDetails/>} />
           <Route path='/search/:id' element={<Search/>} />
           <Route path='*' element={<Home/>} />
        </Routes>
      </Box>
    </BR>

  )
}
