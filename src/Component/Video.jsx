import React from 'react'
import { Box } from '@mui/material'
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';
export default function Video(props) {
  return (
    <div className='d-flex justify-content-around flex-wrap '
     style={{flexDirection:props.direction||"row",minHeight:"95vh"}}

      >
      {
        props.videos.map((item, index) => {
          return <Box key={index} >
            {item.id.videoId && <VideoCard vdetails={item} />}
            {item.id.channelId && <ChannelCard cdetails={item} />}
          </Box>

        })
      }

    </div>
  )
}
