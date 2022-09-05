import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'
export default function SearchBar() {
    let [searchkey,setsearchkey]=useState("")
    let Navigate = useNavigate()
     function SearchData(e){
       e.preventDefault()
       Navigate(`/search/${searchkey}`)
       setsearchkey("")
    }
    return (
        <>
            <Paper
                component="form"
                onSubmit={SearchData}
                sx={{
                    borderRadius: 20,
                    border: "1px solid #e3e3e3",
                    pl: 2,
                    boxShadow: "none",
                    mr: { sm: 5 }

                }}
            >
                <input
                    className='search-bar'
                    placeholder='Search...'
                    value={searchkey}
                    onChange={(e) => setsearchkey((olddata)=>e.target.value)}

                />
                <IconButton
                    type="submit"
                    sx={{ p: '10px', color: "red" }}
                >
                    <Search />
                </IconButton>

            </Paper>

        </>
    )
}
