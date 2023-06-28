import { useContext, useState } from 'react';
import NextLink from 'next/link';

import { Box, Button, Chip, Grid, Link, TextField, Typography } from "@mui/material"
import { ErrorOutline } from '@mui/icons-material';
import { useForm } from 'react-hook-form'

import { tesloApi } from '../../api';
import { AuthLayout } from "../../components/layouts"
import { validations } from '../../utils';
import { useRouter } from 'next/router';
import { AuthContext } from '../../context';

type FormData = {
    name    : string;
    email   : string;
    password: string;
}

const RegiterPage = () => {

    const router = useRouter()

    const { registerUser } = useContext(AuthContext)

    const { register, handleSubmit, formState: { errors }} = useForm<FormData>()
    const [ showError, setShowError ] = useState(false)

    const onRegisterForm = async(data: FormData) => {
        setShowError(false)
        const { email, password, name } = data;
        const { hasError, message } = await registerUser(name, email, password)

        if(hasError){
            setShowError(true)
            return;
        }

    const destination = router.query.p?.toString() || '/';
    router.replace(destination)

    // try{ codigo viejo

    //     const { data } = await tesloApi.post('/user/register',{ name, email, password });
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
        title="Registro"
    >
        <form onSubmit={ handleSubmit( onRegisterForm) }>
        <Box
            sx={{ width:358, padding:'10px 20px'}}
        >
            <Grid
                container
                spacing={2}
            >
                <Grid item>
                    <Typography variant='h1' component='h1' >Crear cuenta</Typography>
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
                        label='Nombre completo' 
                        variant='filled' 
                        fullWidth
                        {...register('name',{
                            required: 'Este campo es requerido',
                            minLength: { value: 2, message: 'Mínimo 2 caracteres'}
                        })}
                        error={!!errors.name}
                        helperText={errors.name?.message}
                    >

                        </TextField>
                </Grid>

                <Grid item xs={12}>
                    <TextField 
                        type='email'
                        label='Correo' 
                        variant='filled' 
                        fullWidth
                        { ...register('email',{
                            required: 'Este capo es requerido',
                            validate: (value) => validations.isEmail(value)
                        })}
                        error={!!errors.email}
                        helperText={errors.email?.message}
                    ></TextField>
                </Grid>

                <Grid item xs={12}>
                    <TextField 
                        label='Contraseña' 
                        type="password " 
                        variant='filled' 
                        fullWidth
                        {...register('password',{
                            required: 'Este campo es requerido',
                            minLength: { value: 6, message: 'Mínimo 6 caracteres'}
                        })}
                        error={!!errors.password}
                        helperText={errors.password?.message}
                    ></TextField>
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
                    <NextLink href={router.query.p ? `/auth/login?p=${router.query.p}` : '/auth/login'}
                        passHref 
                        legacyBehavior>
                        <Link underline='always'>
                            ¿Ya tienes cuenta?
                        </Link>
                    </NextLink>
                </Grid>
            </Grid>
        </Box>
        </form>
    </AuthLayout>
  )
}

export default RegiterPage;