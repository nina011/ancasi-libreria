import NextLink from 'next/link'

import { AppBar, Toolbar, Link, Typography, Button, Box, IconButton, Badge, Input, InputAdornment, Tooltip } from "@mui/material"
import { ClearOutlined, SearchOffOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import { useRouter } from 'next/router'
import { useContext, useState } from 'react'
import { CartContext, UIContext } from '../../context'

export const Navbar = () => {

    const { asPath, push } = useRouter()
    const { toggleSideMenu } = useContext(UIContext)
    const { numberOfItems } = useContext(CartContext)

    const [searchTerm, setSearchTerm] = useState('')
    const [isSearchVisible, setIsSearchVisible] = useState(false)
    console.log('searchTerm', searchTerm)
    const onSearchTerm = () => {
        if (searchTerm.trim().length === 0) return;
        navigateTo(`/search/${searchTerm}`)
    }

    const navigateTo = (url: string) => {
        // toggleSideMenu() esto debe quedar comentado para que no se ejecute el toggleside menu
        push(url) // extraido de router
    }

    return (
        <AppBar>
            <Toolbar>
                <NextLink href={'/'} passHref legacyBehavior>
                    <Link display={'flex'} alignItems={'center'}>
                        <Typography variant='h6'>Librería</Typography>
                        <Typography sx={{ ml: 0.5 }}>Ancasi</Typography>
                    </Link>
                </NextLink>

                {/* TODO FLEX */}
                <Box flex={1} />

                <Box sx={{
                    display: 
                    isSearchVisible ? 'none':
                    {
                        xs: 'none',
                        sm: 'flex '
                    }
                }}>
                    <NextLink href='/category/men' passHref legacyBehavior>
                        <Link>
                            <Button
                                color={asPath === '/category/men'
                                    ? 'primary'
                                    : 'info'
                                }
                            >
                                Hombres
                            </Button>
                        </Link>
                    </NextLink>

                    <NextLink href='/category/women' passHref legacyBehavior>
                        <Link>
                            <Button
                                color={asPath === '/category/women'
                                    ? 'primary'
                                    : 'info'
                                }
                            >
                                Mujeres
                            </Button>
                        </Link>
                    </NextLink>

                    <NextLink href='/category/kid' passHref legacyBehavior>
                        <Link>
                            <Button
                                color={asPath === '/category/kid'
                                    ? 'primary'
                                    : 'info'
                                }
                            >
                                Niños
                            </Button>
                        </Link>
                    </NextLink>
                </Box>

                <Box flex={1} />

                {/* pantallas grandes */}
                {
                    isSearchVisible
                        ? (
                            <Input
                                autoFocus
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' ? onSearchTerm() : null}
                                placeholder="Buscar.1.."
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            // onClick={onSearchTerm}
                                            onClick={() => setIsSearchVisible(false)}
                                            className='fadein'
                                        >
                                            <ClearOutlined />
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        )
                        :
                        (
                            <Tooltip
                                title='Aquí puedes buscar por autor o palabra del titulo'
                                >
                            <IconButton
                                // sx={{ display: { xs: 'flex', sm: 'none' } }}
                                // onClick={toggleSideMenu}
                                onClick={() => setIsSearchVisible(true)}
                            >
                                <SearchOutlined />
                            </IconButton>
                            </Tooltip>
                        )
                }
                
                {/* TODO FLEX */}

                <NextLink href={'/cart'} passHref legacyBehavior>
                    <Link>
                        <IconButton>
                            <Badge badgeContent={numberOfItems > 9 ? '+9' : numberOfItems} color='secondary'>
                                <ShoppingCartOutlined />
                            </Badge>
                        </IconButton>
                    </Link>
                </NextLink>

                <Button
                    onClick={toggleSideMenu}
                >
                    Menú
                </Button>
            </Toolbar>
        </AppBar>
    )
}