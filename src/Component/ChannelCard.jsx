import React from 'react'
import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../utils/constant'
export default function ChannelCard({ cdetails, marginTop, height, width }) {
  return (
    <Box
      sx={{ boxShadow: "none", borderRadius: "20px", marginTop: marginTop, height: height, width: width }}
    >
      <Link to={`/channel/${cdetails?.id?.channelId ? cdetails?.id?.channelId : cdetails?.id}`} className="d-flex justify-content-center">
        <CardContent
          sx={{ display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center", color: "#fff" }}
        >
          <CardMedia image={cdetails?.snippet?.thumbnails?.high?.url || demoProfilePicture} alt={cdetails?.snippet?.title}
            sx={{ borderRadius: "50%", height: "180px", width: "180px", mb: 2 }}
          />
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", color: "gray" }}
          >
            {cdetails?.snippet?.title || "Channel.."}
            <CheckCircle sx={{ fontSize: 12, color: "gray", marginLeft: "5px" }} />

          </Typography>
          {  
             cdetails?.statistics?.subscriberCount &&
            <Typography>
              {parseInt(cdetails?.statistics?.subscriberCount).toLocaleString()} Subscrbers
            </Typography>
          }
        </CardContent>
      </Link>

    </Box>
  )
}
