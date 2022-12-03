import React from 'react'
import { Box } from '@mui/material'
import avg from './../images/logo-avg.jpg'
import usaid from './../images/logo-usaid.jpg'

function Home() {
  return (
    <Box
    sx={{
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'center',
      alignItems: 'center',
      padding: "40px 0"
    }}
    >
      <Box>
        <img src={usaid} alt="Logo USAID" />
      </Box>
      <Box>
        <img src={avg} width="450px" height="450px" alt="Logo Alliance Voahary Gasy" />
      </Box>
    </Box>
  )
}

export default Home