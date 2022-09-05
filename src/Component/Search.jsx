import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Typography } from '@mui/material'
import Video from './Video'
import { FetchFromApi } from '../utils/FetchFromApi'
export default function Search() {
  const [Videos, setVideos] = useState([])
  let { id } = useParams()
  useEffect(() => {
    FetchFromApi(`search?q=${id}&part=snippet&maxResults=50`).then((data) => setVideos(data.items)).catch((error) => console.log(error))
  }, [id])

  return (


    <Box p={2} sx={{ overflowY: "auto", height: "92vh", flex: 2 }} className="mt-2">
      <Typography
        variant="h5"
        fontWeight="bold"
        mb={2}
        sx={{ color: "white" }}
      >
        Search result found for  <span style={{ color: "#F31503" }}>{id || "..."}</span>
      </Typography>
      <Video videos={Videos} />
    </Box>
  )
}
