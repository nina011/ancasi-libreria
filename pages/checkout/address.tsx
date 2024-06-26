import React, { FC, useState } from 'react'
import { ShopLayout } from '../../components/layouts'
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Modal, Select, TextField, Typography } from '@mui/material'
// import { NextServer } from 'next/dist/server/next'
// import { GetServerSideProps } from 'next'
// import { jwt } from '../../utils'
import { countries } from '../../utils'
import { SubresourceIntegrityAlgorithm } from 'next/dist/build/webpack/plugins/subresource-integrity-plugin'
import { useForm } from 'react-hook-form'
import style from 'styled-jsx/style'

type FormData = {
    firstName: string;
    lastName: string;
    address: string;
    address2?: string;
    zip: string;
    city: string;
    country: string;
    phone: string;
}

const AddressPage: FC = () => {

    const [modalVisible, setModalVisible ] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const onSubmitAddress = ( data: FormData) => {
        console.log({ data })
    }

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
                spacing={2}
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
                        {...register('firstName', {
                            required: 'Este campo es requerido',
                        })}
                        error={!!errors.firstName}
                        helperText={errors.firstName?.message}
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
                        {...register('lastName', {
                            required: 'Este campo es requerido',
                            // validate: (value) => validations.isEmail(value)
                        })}
                        error={!!errors.lastName}
                        helperText={errors.lastName?.message}
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
                        {...register('address', {
                            required: 'Este campo es requerido',
                            // validate: (value) => validations.isEmail(value)
                        })}
                        error={!!errors.address}
                        helperText={errors.address?.message}
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
                        {...register('address2', {
                            required: 'Este campo es requerido',
                            // validate: (value) => validations.isEmail(value)
                        })}
                        error={!!errors.address2}
                        helperText={errors.address2?.message}
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
                        {...register('zip', {
                            required: 'Este campo es requerido',
                            // validate: (value) => validations.isEmail(value)
                        })}
                        error={!!errors.zip}
                        helperText={errors.zip?.message}
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
                        {...register('city', {
                            required: 'Este campo es requerido',
                            // validate: (value) => validations.isEmail(value)
                        })}
                        error={!!errors.city}
                        helperText={errors.city?.message}
                    />
                </Grid>

                {/* <Grid
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
                            {...register('country', {
                                required: 'Este campo es requerido',
                                // validate: (value) => validations.isEmail(value)
                            })}
                            error={!!errors.country}
                        >
                            {
                                countries.countries.map(country => (
                                    <MenuItem
                                        key={country.code}
                                        value={country.code}
                                    >
                                        {country.name}
                                    </MenuItem>
                                ))
                            }
                            {/* <MenuItem value={1}>Chile</MenuItem>
                        <MenuItem value={2}>Honduras</MenuItem>
                        <MenuItem value={3}>El Salvador</MenuItem>
                        <MenuItem value={4}>México</MenuItem> 
                        </Select>
                    </FormControl>
                </Grid> */}
                <Grid
                    item
                    xs={12}
                    sm={6}
                >
                    <TextField
                        label='Teléfono'
                        variant='filled'
                        fullWidth
                        {...register('phone', {
                            required: 'Este campo es requerido',
                        })}
                        error={!!errors.phone}
                        helperText={errors.phone?.message}
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
                    onClick={() => setModalVisible(true)}
                >
                    Realizar pedido
                </Button>
            </Box>
            <Modal
                open={modalVisible}
                onClose={() => setModalVisible(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box style={{
                    width: '400',
                    height: '500',
                    backgroundColor: 'white'
                }}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                    ¡Estás a punto de pagar!
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Aquí es donde lleva a escoger metodos de pago y se integra con una aplicación de pago
                    </Typography>
                </Box>
                </Modal>
        </ShopLayout>
    )
}

// export const getServerSideProps: GetServerSideProps = async(ctx) => {

//     const { req } = ctx;
//     const { token = '' } = req.cookies;

//     let isValidToken = false;

//     try{    
//         await jwt.isValidToken( token )
//         isValidToken = true;

//     }catch(err){
//         isValidToken = false;
//     }

//     if( !isValidToken ){
//         return {
//             redirect: {
//                 destination: '/auth/login?p=/checkout/address',
//                 permanent: false
//             }
//         }
//     }

//     return{
//         props:{

//         }
//     }
// }
export default AddressPage