import NextLink from 'next/link'

import { AppBar, Toolbar, Link, Typography, Button, Box, IconButton, Badge } from "@mui/material"
import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import { useRouter } from 'next/router'

export const Navbar = () => {

  const { asPath } = useRouter()
  

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

            <Box sx={{ display: { 
                xs: 'none',
                sm: 'block'
                }
            }}>
                <NextLink  href='/category/men' passHref legacyBehavior>
                    <Link>
                        <Button
                            color={ asPath === '/category/men'
                                    ? 'primary'
                                    : 'info'
                            }
                        >
                            Hombres
                        </Button>
                    </Link>
                </NextLink>
            
                <NextLink  href='/category/women' passHref legacyBehavior>
                    <Link>
                        <Button
                            color={ asPath === '/category/women'
                            ? 'primary'
                            : 'info'
                    }
                        >
                            Mujeres
                        </Button>
                    </Link>
                </NextLink>
                
                <NextLink  href='/category/kid' passHref legacyBehavior>
                    <Link>
                        <Button
                        color={ asPath === '/category/kid'
                                    ? 'primary'
                                    : 'info'
                            }
                        >
                            Niños
                        </Button>
                    </Link>
                </NextLink>
            </Box>

            <Box flex={ 1 } />

            <IconButton>
                <SearchOutlined />+
            </IconButton>
            {/* TODO FLEX */}

            <NextLink href={'/cart'} passHref legacyBehavior>
                <Link>
                    <IconButton>
                        <Badge badgeContent={ 2 } color='secondary'>
                            <ShoppingCartOutlined />
                        </Badge>
                    </IconButton>
                </Link>
            </NextLink>

            <Button>
                Menú
            </Button>
        </Toolbar>
    </AppBar>
  )
}
