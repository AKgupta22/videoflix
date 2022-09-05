import React, { useState, useEffect } from 'react'
import { Stack, Box, Typography } from '@mui/material'
import Sidebar from './Sidebar'
import Video from './Video'
import { FetchFromApi } from '../utils/FetchFromApi'
export default function Home() {
  const [selectedCategory, setselectedCategory] = useState("New")
  const [Videos, setVideos] = useState([])

  useEffect(() => {
    FetchFromApi(`search?q=${selectedCategory}&part=snippet&maxResults=50&regionCode=IN`).then((data) => setVideos(data.items)).catch((error) => console.log(error))
  }, [selectedCategory])

  return (
    <Stack
      sx={{ flexDirection: { sx: "column", md: "row" } }}
    >
      <Box
        sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setselectedCategory={setselectedCategory}
        />
        <Typography
          className='copyright'
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}

        >
          Copyright &copy; 2022 Akash Gupta
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "92vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory} <span style={{ color: "#F31503" }}>Videos</span>
        </Typography>
        <Video videos={Videos} />
      </Box>
    </Stack>
  )
}
