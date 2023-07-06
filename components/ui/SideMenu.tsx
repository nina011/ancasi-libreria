import { 
    AccountCircleOutlined, 
    AdminPanelSettings, 
    CategoryOutlined, 
    ConfirmationNumberOutlined, 
    EscalatorWarningOutlined, 
    FemaleOutlined, 
    LoginOutlined, 
    MaleOutlined, 
    SearchOffOutlined, 
    VpnKeyOutlined,
    Accessibility,
    FilterDrama,
    Gavel,
    PrecisionManufacturing,
    Thunderstorm,
    LaptopChromebook
} from "@mui/icons-material"
import { Box, Divider, Drawer, IconButton, Input, InputAdornment, List, ListItem, ListItemIcon, ListItemText, ListSubheader } from "@mui/material"
import { useContext, useEffect, useState } from "react"
import { AuthContext, UIContext } from "../../context"
import { useRouter } from "next/router"


export const SideMenu = () => {

    const router = useRouter()

    const { isMenuOpen, toggleSideMenu } = useContext(UIContext);
    const { user, isLoggedIn, logout } = useContext(AuthContext)

    const [searchTerm, setSearchTerm] = useState('')

    const onSearchTerm = () => {
        console.log('ejecutando sidemenu')
        if (searchTerm.trim().length === 0) return;

        navigateTo(`/search/${searchTerm}`)

    }

    const navigateTo = (url: string) => {
        toggleSideMenu()
        router.push(url)
    }

    const onLogout = () =>{
        logout()
    }
    return (
        <Drawer
            open={isMenuOpen}
            anchor='right'
            sx={{
                backdropFilter: 'blur(4px)',
                transition: 'all .5s ease-out'
            }}
            onClose={toggleSideMenu}
        >
            <Box>
                <List>
                    <ListItem>
                        <Input
                            // autoFocus
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' ? onSearchTerm() : null}
                            placeholder="Buscar..."
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={onSearchTerm}
                                    >
                                        <SearchOffOutlined />
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </ListItem>

                    {
                        isLoggedIn && (
                            <>
                                <ListItem button>
                                    <ListItemIcon>
                                        <AccountCircleOutlined />
                                    </ListItemIcon>
                                    <ListItemText primary={'Perfil'} />
                                </ListItem>

                                <ListItem button>
                                    <ListItemIcon>
                                        <ConfirmationNumberOutlined />
                                    </ListItemIcon>
                                    <ListItemText primary={'Mis Ordenes'} />
                                </ListItem>
                            </>
                        )
                    }


                    <ListItem
                        button
                        // sx={{ display: { xs: '', sm: 'none' } }}
                        onClick={() => navigateTo('/category/autoayuda')}
                    >
                        <ListItemIcon>
                            <Accessibility />
                        </ListItemIcon>
                        <ListItemText primary={'Autoayuda'} />
                    </ListItem>

                    <ListItem
                        button
                        // sx={{ display: { xs: '', sm: 'none' } }}
                        onClick={() => navigateTo('/category/drama')}
                    >
                        <ListItemIcon>
                            <FilterDrama />
                        </ListItemIcon>
                        <ListItemText primary={'Drama'} />
                    </ListItem>

                    <ListItem
                        button
                        // sx={{ display: { xs: '', sm: 'none' } }}
                        onClick={() => navigateTo('/category/novela')}
                    >
                        <ListItemIcon>
                            <Gavel />
                        </ListItemIcon>
                        <ListItemText primary={'Novelas'} />
                    </ListItem>
                    <ListItem
                        button
                        // sx={{ display: { xs: '', sm: 'none' } }}
                        onClick={() => navigateTo('/category/ficcion')}
                    >
                        <ListItemIcon>
                            <PrecisionManufacturing />
                        </ListItemIcon>
                        <ListItemText primary={'Ficción'} />
                    </ListItem>
                    <ListItem
                        button
                        // sx={{ display: { xs: '', sm: 'none' } }}
                        onClick={() => navigateTo('/category/terror')}
                    >
                        <ListItemIcon>
                            <Thunderstorm />
                        </ListItemIcon>
                        <ListItemText primary={'Terror'} />
                    </ListItem>
                    <ListItem
                        button
                        // sx={{ display: { xs: '', sm: 'none' } }}
                        onClick={() => navigateTo('/category/informatica')}
                    >
                        <ListItemIcon>
                            <LaptopChromebook />
                        </ListItemIcon>
                        <ListItemText primary={'Informatica'} />
                    </ListItem>
                    


                    {
                        isLoggedIn ? (
                            <ListItem
                                 button
                                 onClick={onLogout}
                            >
                                <ListItemIcon>
                                    <LoginOutlined />
                                </ListItemIcon>
                                <ListItemText primary={'Salir'} />
                            </ListItem>
                        ) : (
                            <ListItem
                                button
                                onClick={() => navigateTo(`/auth/login?p=${ router.asPath }`)}
                            >
                                <ListItemIcon>
                                    <VpnKeyOutlined />
                                </ListItemIcon>
                                <ListItemText primary={'Ingresar'} />
                            </ListItem>
                        )
                    }

                    {/* Admin */}
                    {
                        user?.role === 'admin' && 
                        isLoggedIn &&
                        (
                            <>
                                <Divider />
                                <ListSubheader>Admin Panel</ListSubheader>

                                <ListItem button>
                                    <ListItemIcon>
                                        <CategoryOutlined />
                                    </ListItemIcon>
                                    <ListItemText primary={'Productos'} />
                                </ListItem>
                                <ListItem button>
                                    <ListItemIcon>
                                        <ConfirmationNumberOutlined />
                                    </ListItemIcon>
                                    <ListItemText primary={'Ordenes'} />
                                </ListItem>

                                <ListItem 
                                    button
                                    onClick={() => navigateTo('/admin/users')}
                                    >
                                    <ListItemIcon>
                                        <AdminPanelSettings />
                                    </ListItemIcon>
                                    <ListItemText primary={'Usuarios'} />
                                </ListItem>
                            </>
                        )
                    }

                </List>
            </Box>
        </Drawer>
    )
}
