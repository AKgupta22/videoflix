import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import Video from './Video'
import ChannelCard from './ChannelCard'
import { FetchFromApi } from '../utils/FetchFromApi'
export default function ChannelDetails() {
  const [channeldata, setchanneldata] = useState()
  const [videos, setvideos] = useState([])
  const { id } = useParams()
  useEffect(() => {
    FetchFromApi(`channels?id=${id}&part=snippet`).then((data) => setchanneldata(data.items[0]))
    FetchFromApi(`search?channelId=${id}&part=snippet&order=date&maxResults=50`).then((data) => setvideos(data.items))
  }, [id])
  return (
    <Box
      minHeight="95vh"
    >
      <Box width="100%">
        <div className='linear' />
      </Box>
      <ChannelCard cdetails={channeldata} marginTop="-90px" />
      <Box display="flex" p="2" >
        <Video videos={videos} />
      </Box>

    </Box >
  )
}
