import React, { FC } from 'react'
import { ShopLayout } from '../../components/layouts'
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { NextServer } from 'next/dist/server/next'
import { GetServerSideProps } from 'next'
import { jwt } from '../../utils'

const AddressPage: FC = () => {
  return (
    <ShopLayout
        title='Dirección'
        pageDescription='Confirmar dirección del destino'
    >
        <Typography
            variant='h1'
            component={'h1'}
        >
            Dirección
        </Typography>
        <Grid
            container
            spacing={ 2 }
            sx={{ mt: 2 }}
        >
            <Grid
                item
                xs={12}
                sm={6}
            >
                <TextField 
                    label='Nombre'
                    variant='filled'
                    fullWidth
                />
            </Grid>
            <Grid
                item
                xs={12}
                sm={6}
            >
                <TextField 
                    label='Apellido'
                    variant='filled'
                    fullWidth
                />
            </Grid>

            <Grid
                item
                xs={12}
                sm={6}
            >
                <TextField 
                    label='Dirección'
                    variant='filled'
                    fullWidth
                />
            </Grid>
            <Grid
                item
                xs={12}
                sm={6}
            >
                <TextField 
                    label='Dirección 2 (opcional)'
                    variant='filled'
                    fullWidth
                />
            </Grid>

            <Grid
                item
                xs={12}
                sm={6}
            >
                <TextField 
                    label='Código Postal'
                    variant='filled'
                    fullWidth
                />
            </Grid>
            <Grid
                item
                xs={12}
                sm={6}
            >
                <TextField 
                    label='Ciudad'
                    variant='filled'
                    fullWidth
                />
            </Grid>

            <Grid
                item
                xs={12}
                sm={6}
            >
                <FormControl
                    fullWidth
                >
                    <Select
                        variant='filled'
                        label='País'
                        value={1}
                    >
                        <MenuItem value={1}>Chile</MenuItem>
                        <MenuItem value={2}>Honduras</MenuItem>
                        <MenuItem value={3}>El Salvador</MenuItem>
                        <MenuItem value={4}>México</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid
                item
                xs={12}
                sm={6}
            >
                <TextField 
                    label='Teléfono'
                    variant='filled'
                    fullWidth
                />
            </Grid>
        </Grid>

        <Box
            sx={{ mt: 5 }}
            display={'flex'}
            justifyContent={''}
        >
            <Button
                color='secondary'
                className='circular-btn'
                size='large'
            >
                Revisar pedido
            </Button>
        </Box>
    </ShopLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async(ctx) => {
    
    const { req } = ctx;
    const { token = '' } = req.cookies;

    let isValidToken = false;

    try{    
        await jwt.isValidToken( token )
        isValidToken = true;

    }catch(err){
        isValidToken = false;
    }

    if( !isValidToken ){
        return {
            redirect: {
                destination: '/auth/login?p=/checkout/address',
                permanent: false
            }
        }
    }

    return{
        props:{
            
        }
    }
}
export default AddressPage