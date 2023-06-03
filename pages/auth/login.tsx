import NextLink from 'next/link'
import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../../components/layouts"



const LoginPage = () => {
  return (
    <AuthLayout
        title="ingresar"
    >
        <Box
            sx={{ width:358, padding:'10px 20px'}}
        >
            <Grid
                container
                spacing={2}
            >
                <Grid item>
                    <Typography variant='h1' component='h1' >Iniciar Sesión</Typography>
                </Grid>

                <Grid item xs={12}>
                    <TextField label='correo' variant='filled' fullWidth></TextField>
                </Grid>

                <Grid item xs={12}>
                    <TextField label='contraseña' type="password " variant='filled' fullWidth></TextField>
                </Grid>

                <Grid item xs={12}>
                    <Button color='secondary' className='circular-btn' size='large' fullWidth>
                        Ingresar
                    </Button>
                </Grid>

                <Grid item xs={12} display='flex' justifyContent={'end'} >
                    <NextLink href={'/auth/register'} passHref legacyBehavior>
                        <Link underline='always'>
                            ¿No tienes cuenta?
                        </Link>
                    </NextLink>
                </Grid>
            </Grid>
        </Box>


    </AuthLayout>
  )
}

export default LoginPage