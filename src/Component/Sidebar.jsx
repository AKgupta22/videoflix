import React from 'react'
import { Stack } from '@mui/material'
import { categories } from '../utils/constant'
export default function Sidebar({selectedCategory,setselectedCategory}) {
    return (
        <Stack
            direction="row"
            sx={{
                overflowY: "auto",
                height: { sx: 'auto', md: "95%" },
                flexDirection: { md: "column" }

            }}
        >

            {
                categories.map((item, index) => {
                    return <button key={index}
                        className="category-btn"
                        style={{
                            background: item.name === selectedCategory && '#FC1503',
                            color: "white"
                        }}
                        onClick={()=>setselectedCategory(item.name)}
                    >
                        <span
                            style={{ color: item.name === selectedCategory ? "white" : "red", marginRight: "1rem" }}
                        >{item.icon}
                        </span>
                        <span
                            style={{ opacity: item.name === selectedCategory ? "1" : "0.7" }}
                        >
                            {item.name}
                        </span>
                    </button>
                })
            }


        </Stack>
    )
}
