import NextLink from 'next/link'

import { AppBar, Toolbar, Link, Typography, Button, Box, IconButton } from "@mui/material"
import { SearchOutlined } from '@mui/icons-material'

export const Navbar = () => {
  return (
    <AppBar>
        <Toolbar>
            <NextLink href={'/'} passHref legacyBehavior>
                <Link display={'flex'} alignItems={'center'}>
                    <Typography variant='h6'>Teslo</Typography>
                    <Typography sx={{ ml: 0.5 }}>Shop</Typography>
                </Link>
            </NextLink>

 

            {/* TODO FLEX */}
            <Box flex={ 1 }/>

            <Box>
                <NextLink  href='/category/men' passHref legacyBehavior>
                    <Link>
                        <Button>
                            Hombres
                        </Button>
                    </Link>
                </NextLink>
            
                <NextLink legacyBehavior href='/category/women' passHref legacyBehavior>
                    <Link>
                        <Button>
                            Mujeres
                        </Button>
                    </Link>
                </NextLink>
                
                <NextLink legacyBehavior href='/category/kid' passHref legacyBehavior>
                    <Link>
                        <Button>
                            Niños
                        </Button>
                    </Link>
                </NextLink>
            </Box>

            {/* <Box flex={ 1 } /> */}

            <IconButton>
                <SearchOutlined />+
            </IconButton>
            {/* TODO FLEX */}
        </Toolbar>
    </AppBar>
  )
}
