import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Stack, Box, Typography } from '@mui/material'
import { CheckCircle, RemoveRedEye } from '@mui/icons-material'
import { FetchFromApi } from '../utils/FetchFromApi'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Video from './Video'
export default function VideoDetails() {
  const { id } = useParams()
  const [vdata, setvdata] = useState(null)
  const [videos, setvideos] = useState([])
  useEffect(() => {
    FetchFromApi(`videos?part=snippet%2Cstatistics&id=${id}`).then((data) => setvdata(data.items[0])
    )
    FetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video&maxResults=10`).then((data) => setvideos(data.items))
  }, [id])
  return (
    <Box
      minHeight="95vh"
    >
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", postion: "sticky", top: "86px" }}>
            <ReactPlayer url={`http://www.youtube.com/watch?v=${id}`} className="react-player" controls />
          </Box>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", color: "#fff" }}
            p={2}
          >
            {vdata?.snippet?.title.slice(0, 60) || "...title"}
          </Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{ color: "#fff" }}
            py={1}
            px={2}
          >
            <Link to={`/channel/${vdata?.snippet?.channelId}`}>
              <Typography
                variant="subtitle2"
                fontWeight="bold"
                color="gray"
              >
                {vdata?.snippet?.channelTitle || "...title"}
                <CheckCircle sx={{ fontSize: 12, color: "gray", marginLeft: "5px" }} />
              </Typography>
            </Link>
            <Stack direction="row" gap="20px" alignItems="center">
              <Typography
                variant="body1"
                sx={{ opacity: 0.7 }}
              >
                <RemoveRedEye sx={{ fontSize: 18, color: "gray", marginLeft: "5px" }} />


                {parseInt(vdata?.statistics?.viewCount).toLocaleString()}
              </Typography>
              <Typography
                variant="body1"
                sx={{ opacity: 0.7 }}
              >
                <ThumbUpIcon sx={{ fontSize: 18, color: "gray", marginLeft: "5px" }} />


                {parseInt(vdata?.statistics?.likeCount).toLocaleString()}

              </Typography>
            </Stack>
          </Stack>
        </Box>
        <Box px={2} py={{ ms: 1, sx: 5 }} justifyConent="center">
          <Video videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  )
}
