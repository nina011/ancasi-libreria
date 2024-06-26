import React, { ChangeEvent, FC, useRef, useState } from 'react'
import { GetServerSideProps, NextPage } from 'next'
import { useForm } from 'react-hook-form';
import { AdminLayout } from '../../../components/layouts/AdminLayout';
import { IBook } from '../../../interfaces';
import { DriveFileRenameOutline, SaveOutlined, UploadOutlined } from '@mui/icons-material';
import { dbProducts } from '../../../database';
import { Box, Button, capitalize, Card, CardActions, CardMedia, Checkbox, Chip, Divider, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, Input, ListItem, Paper, Radio, RadioGroup, TextField } from '@mui/material';
import { tesloApi } from '../../../api';
import { Book } from '../../../models';
import { useRouter } from 'next/router';

const validGender = [
    'drama', 
    'ficción', 
    'novela',
    'terror',
    'autoayuda',
    'romance',
    'informática',
    'educacional'
]

interface Props {
    book: IBook;
}

interface FormData{
    _id?: string;
    title: string;
    author: string;
    description: string;
    gender: string;
    tags: string[];
    image: string;
    price: number;
    inStock: number;
    slug: string;
}

const BookAdminPage:NextPage<Props> = ({ book }) => {

    const router = useRouter()
    const fileInputRef = useRef<HTMLInputElement>(null);
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: book
    })
    const [isSaving, setIsSaving ] =  useState(false)

    const onDeleteTag = ( tag: string ) => {

    }

    const onFileSelected = async ({ target }: ChangeEvent<HTMLInputElement>) => {
        if(!target.files || target.files.length === 0){
            return;
        }
        console.log('target.files ', target.files[0].name)
        const formData = new FormData()
        // 
        try{
            for(const file of target.files){
                console.log('no es null')
                // const formData = new FormData()
                formData.append('image', file)
                console.log('form data ', formData)

                const { data } = await tesloApi.post<{ message: string }>('/admin/upload', formData)
            }
            
        }catch(err){
            console.log(err)
        }
    }

    const onSubmit = async( form: FormData ) => {        
        setIsSaving(true)
        console.log({form})
        try{
            const { data } = await tesloApi({
                url: '/admin/books',
                method: form._id ? 'PUT' : 'POST',
                data: form
            })

            if(!form._id){
                router.replace(`/admin/books/${ form.slug }`)
            }else{
                setIsSaving(false)
            }
        }catch(error){
            console.log(error)
            setIsSaving(false)
        }
    }

    return (
        <AdminLayout
            title={'Libro'}
            subTitle={ book._id ? `Editando: `: 'Creando libro'}
            // icon={<DriveFileRenameOutline />}
        >
            <form
                onSubmit={ handleSubmit ( onSubmit )}
            >
                <Box display='flex' justifyContent='end' sx={{ mb: 1 }}>
                    <Button
                        color="secondary"
                        startIcon={<SaveOutlined />}
                        sx={{ width: '150px' }}
                        type="submit"
                        disabled={isSaving}
                    >
                        Guardar
                    </Button>
                </Box>

                <Grid container spacing={2}>
                    {/* Data */}
                    <Grid item xs={12} sm={6}>

                        <TextField
                            label="Título"
                            variant="filled"
                            fullWidth
                            sx={{ mb: 1 }}
                        { ...register('title', {
                            required: 'Este campo es requerido',
                            minLength: { value: 2, message: 'Mínimo 2 caracteres' }
                        })}
                        error={ !!errors.title }
                        helperText={ errors.title?.message }
                        />

                        <TextField
                            label="Descripción"
                            variant="filled"
                            fullWidth
                            multiline
                            sx={{ mb: 1 }}
                            { ...register('description', {
                                required: 'Este campo es requerido',
                                minLength: { value: 2, message: 'Mínimo 2 caracteres' }
                            })}
                            error={ !!errors.description }
                            helperText={ errors.description?.message }
                        />

                        <TextField
                            label="Inventario"
                            type='number'
                            variant="filled"
                            fullWidth
                            sx={{ mb: 1 }}
                            { ...register('inStock', {
                                required: 'Este campo es requerido',
                                min: { value: 0, message: 'Mínimo de valor cero' }
                            })}
                            error={ !!errors.inStock }
                            helperText={ errors.inStock?.message }
                        />

                        <TextField
                            label="Precio"
                            type='number'
                            variant="filled"
                            fullWidth
                            sx={{ mb: 1 }}
                            { ...register('price', {
                                required: 'Este campo es requerido',
                                min: { value: 0, message: 'Mínimo de valor cero' }
                            })}
                            error={ !!errors.price }
                            helperText={ errors.price?.message }
                        />

                        <Divider sx={{ my: 1 }} />

                        <FormControl sx={{ mb: 1 }}>
                            <FormLabel>Género</FormLabel>
                            <RadioGroup
                                row
                            // value={ status }
                            // onChange={ onStatusChanged }
                            >
                                {
                                    validGender?.map(option => (
                                        <FormControlLabel
                                            key={option}
                                            value={option}
                                            control={<Radio color='secondary' />}
                                            label={capitalize(option)}
                                        />
                                    ))
                                }
                            </RadioGroup>
                        </FormControl>
                    </Grid>

                    {/* Tags e imagenes */}
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Slug - URL"
                            variant="filled"
                            fullWidth
                            sx={{ mb: 1 }}
                            { ...register('slug', {
                                required: 'Este campo es requerido',
                                validate: (val) => val.trim().includes(' ') ? 'no puede tener espacios en blanco' : undefined
                            })}
                            error={ !!errors.inStock }
                            helperText={ errors.inStock?.message }
                        />

                        {/* <TextField
                            label="Etiquetas"
                            variant="filled"
                            fullWidth
                            sx={{ mb: 1 }}
                            helperText="Presiona [spacebar] para agregar"
                        /> */}

                        {/* <Box sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            listStyle: 'none',
                            p: 0,
                            m: 0,
                        }}
                            component="ul">
                            {
                                product.tags.map((tag) => {

                                    return (
                                        <Chip
                                            key={tag}
                                            label={tag}
                                            onDelete={() => onDeleteTag(tag)}
                                            color="primary"
                                            size='small'
                                            sx={{ ml: 1, mt: 1 }}
                                        />
                                    );
                                })}
                        </Box> */}

                        <Divider sx={{ my: 2 }} />

                        <Box display='flex' flexDirection="column">
                            <FormLabel sx={{ mb: 1 }}>Imágenes</FormLabel>
                            <Button
                                color="secondary"
                                fullWidth
                                startIcon={<UploadOutlined />}
                                sx={{ mb: 3 }}
                                onClick={ () => fileInputRef.current?.click() }
                            >
                                Cargar imagen
                            </Button>
                            <input 
                                ref={ fileInputRef }
                                type='file'                                
                                accept='image/png, image/jpg, image/jpeg'
                                style={{ display: 'none' }}
                                onChange={ onFileSelected }
                                
                            />

                            {/* <Chip
                                label="Es necesario al 2 imagenes"
                                color='error'
                                variant='outlined'
                            /> */}

                            <Grid container spacing={2}>
                                <Grid item xs={4} sm={3} mt={3} key={book.image}>
                                    <Card>
                                        <CardMedia
                                            component='img'
                                            className='fadeIn'
                                            image={`/books/${book.image}`}
                                            alt={book.image}
                                        />
                                        <CardActions>
                                            <Button fullWidth color="error">
                                                Borrar
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </form>
        </AdminLayout>
    )
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time


export const getServerSideProps: GetServerSideProps = async ({ query }) => {

    const { slug = '' } = query;
    let book: IBook | null;

    if(slug === 'new'){
        const tempBook = JSON.parse( JSON.stringify( new Book() ))
        delete tempBook._id;

        // tempBook.image = 'img1.jpg'

        book = tempBook;
        console.log('slug nd', slug)
        console.log('book', book)

    }else{
        book = await dbProducts.getProductBySlug(slug.toString())
    }

    // const product = await dbProducts.getProductBySlug(slug.toString());

    if (!book) {
        return {
            redirect: {
                destination: '/admin/books',
                permanent: false,
            }
        }
    }


    return {
        props: {
            book
        }
    }
}


export default BookAdminPage