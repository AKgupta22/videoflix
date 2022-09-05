import React from 'react'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { demoChannelUrl, demoVideoUrl, demoChannelTitle, demoVideoTitle } from '../utils/constant'
export default function VideoCard({ vdetails: { id: { videoId }, snippet } }) {
    return (
        <Card sx={{ width: { xs: '100%', sm: '100%', md: "320px", }, boxShadow: "none", borderRadius: 0 }} className="mt-3">
            <Link to={videoId ? `/video/${videoId}` : `${demoVideoUrl}`}>
                <CardMedia image={snippet?.thumbnails?.high?.url} alt={snippet?.title} sx={{ width: { xs: '100%', sm: '100%', md: "320px" }, height: 180 }} />
            </Link>
            <CardContent sx={{ backgroundColor: '#1e1e1e', height: "104px" }}>
                <Link to={videoId ? `/video/${videoId}` : `${demoVideoUrl}`}>
                    <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: "bold", color: "#fff" }}
                    >
                        {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                    </Typography>
                </Link>
                <Link to={snippet?.channelId ? `/channel/${snippet.channelId}` : `${demoChannelUrl}`}>
                    <Typography
                        variant="subtitle2"
                        fontWeight="bold"
                        color="gray"
                    >
                        {snippet?.channelTitle || demoChannelTitle}
                        <CheckCircle sx={{ fontSize: 12, color: "gray", marginLeft: "5px" }} />
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    )
}
