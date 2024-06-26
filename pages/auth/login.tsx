import NextLink from 'next/link'
import { Box, Button, Chip, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../../components/layouts"
import { useForm } from 'react-hook-form'
import { validations } from '../../utils'
import { tesloApi } from '../../api'
import { ErrorOutline } from '@mui/icons-material'
import { useContext, useState } from 'react'
import { AuthContext } from '../../context'
import { useRouter } from 'next/router'
// import axios from 'axios'

type FormData = {
    email   : string;
    password: string;
}

const LoginPage = () => {

  const router = useRouter()

  const { loginUser } = useContext( AuthContext )

  const { register, handleSubmit, formState: { errors }} = useForm<FormData>()
  const [ showError, setShowError ] = useState(false)
    
  const onLoginUser = async(data: FormData) => {

    setShowError(false)

    const { email, password } = data;
    const isValidLogin = await loginUser( email, password )

    if(!isValidLogin){
        setShowError(true)
        return;
    }

    const destination = router.query.p?.toString() || '/';
    router.replace(destination)

    // try{ version primer login
    //     const { data } = await tesloApi.post('/user/login',{ email, password });
    //     const { token, user } = data;
    //     console.log({ token, user })

    // }catch(err){
    //     // if(axios.isAxiosError(error)){
    //     //     error
    //     // }
    //     console.log('error en las credenciales')
    //     setShowError(true)
    //     // setTimeout(() => { setShowError(false),10000 })
    // }
  }
  
  
  return (
    <AuthLayout
        title="ingresar"
    >
        <form onSubmit={ handleSubmit( onLoginUser) }>
        <Box
            sx={{ width:358, padding:'10px 20px'}}
        >
            <Grid
                container
                spacing={2}
            >
                <Grid item>
                    <Typography variant='h1' component='h1' >Iniciar Sesión</Typography>
                    <Chip 
                        label='No reconocemos este usuario / contraseña'
                        color='error'
                        icon={ <ErrorOutline />}
                        className='fadeIn'
                        sx={{ display: showError ? 'flex':'none'}}
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField 
                        type='email'
                        label='correo' 
                        variant='filled' 
                        fullWidth
                        { ...register('email',{
                            required: 'Este capo es requerido',
                            validate: (value) => validations.isEmail(value)
                        })}
                        error={!!errors.email}
                        helperText={errors.email?.message}
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField 
                        label='contraseña' 
                        type="password" 
                        variant='filled' 
                        fullWidth
                        {...register('password',{
                            required: 'Este campo es requerido',
                            minLength: { value: 6, message: 'Mínimo 6 caracteres'}
                        })}
                        error={!!errors.password}
                        helperText={errors.password?.message}
                    />
                </Grid>

                <Grid item xs={12}>
                    <Button 
                        type='submit'
                        color='secondary' 
                        className='circular-btn' 
                        size='large' 
                        fullWidth
                        >
                        Ingresar
                    </Button>
                </Grid>

                <Grid item xs={12} display='flex' justifyContent={'end'} >
                    <NextLink href={router.query.p ? `/auth/register?p=${router.query.p}` : '/auth/register'} passHref legacyBehavior>
                        <Link underline='always'>
                            ¿No tienes cuenta?
                        </Link>
                    </NextLink>
                </Grid>
            </Grid>
        </Box>
        </form>
    </AuthLayout>
  )
}

export default LoginPage