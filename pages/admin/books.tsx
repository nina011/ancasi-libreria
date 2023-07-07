import useSWR from 'swr';
import NextLink from 'next/link';

import { AdminLayout } from '../../components/layouts/AdminLayout';
import { CategoryOutlined } from '@mui/icons-material';
import {  CardMedia, Grid, Link } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

import { IBook } from '../../interfaces';

const columns: GridColDef[] = [
    { 
        field: 'image', 
        headerName: 'Foto del libro',  
        width: 300,
        renderCell(params) {
            return (
                <a href={`/books/${ params.row.slug }`} target='_blank' rel='noreferrer'>
                    <CardMedia 
                        component={'img'}
                        alt={ params.row.title }
                        className='fadeIn'
                        image={`/books/${ params.row.image }`}
                    />
                </a>
            )
        }
    },
    { 
        field: 'title', 
        headerName: 'Titulo del libro', 
        width: 300,
        renderCell: ({ row }) => {
            return(
                <NextLink href={`/admin/books/${ row.slug }`} passHref legacyBehavior>
                    <Link underline='always'>
                    { row.title }
                    </Link>
                </NextLink>
            )
        },
    },
    { field: 'gender', headerName: 'Género' },
    // { field: 'type', headerName: 'Tipo' },
    { field: 'inStock', headerName: 'inventario' },
    { field: 'price', headerName: 'Precio' }, 
]

const BooksPage = () => {

    const { data, error } = useSWR<IBook[]>('/api/admin/books')

    if (!data && !error) return (<></>);

    const rows = data!.map(book => ({
        id: book._id,
        image: book.image,
        title: book.title,
        gender: book.gender,
        inStock: book.inStock,
        price: book.price,
        slug: book.slug
    }))


    return (
        <AdminLayout
            title={`Libros (${ data?.length })`}
            subTitle='Mantenimiento de libros'
            icon={<CategoryOutlined />}
        >
            <Grid container className='fadeIn'>
                <Grid item xs={12} sx={{ height: 650, width: '100%' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                    // rowsPerPageOptions={[10]}
                    // pageSize={10}
                    />
                </Grid>
            </Grid>

        </AdminLayout>
    )
}

export default BooksPage