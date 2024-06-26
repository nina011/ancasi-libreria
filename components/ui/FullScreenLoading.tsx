import { Box, CircularProgress, Typography } from '@mui/material'
import React from 'react'

export const FullScreenLoading = () => {
  return (
    <Box 
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            height='calc(100vh - 200px'    
        >
            <Typography
                variant='h2'
                component='h2'
                fontSize={40}
                fontWeight={150}
            >
               Cargando...
            </Typography>

            <CircularProgress thickness={ 2 } />

        </Box>
  )
}
