import NextLink from 'next/link'
import { Chip, Grid, Link, Typography } from '@mui/material'
import { ShopLayout } from '../../components/layouts'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'fullname', headerName: 'Nombre completo', width: 300 },
    { 
        field: 'paid', 
        headerName: 'pagada', 
        description: 'Muestra información si está pagada o no',
        width: 200,
        renderCell: (params: any) => {
            return (
                params.row.paid
                ? <Chip color='success' label='Pagada' variant='outlined' />
                : <Chip color='error' label='No Pagada' variant='outlined' />
            )
        }
    },
    { 
        field: 'orden', 
        headerName: 'Ver orden', 
        description: 'Muestra información si está pagada o no',
        width: 200,
        sortable: false,
        renderCell: (params: any) => {
            return (
                <NextLink
                    href={`/orders/${ params.row.id }`}
                    passHref
                    legacyBehavior
                >
                    <Link underline='always'>
                        Ver orden
                    </Link>
                </NextLink>
            )
        },
    }
]

const rows = [
    { id: 1, paid: true, fullname: 'Fernando Herrera' },
    { id: 2, paid: false, fullname: 'Melissa flores' },
    { id: 3, paid: true, fullname: 'Hernando Vallejo' },
    { id: 4, paid: false, fullname: 'Emin Reyes' },
    { id: 5, paid: false, fullname: 'Eduardo Rios' },
    { id: 6, paid: true, fullname: 'Natalia Herrera' }
]

const HistoryPage = () => {
  return (
    <ShopLayout 
        title={'Historial de órdenes'} 
        pageDescription={'Historial de ordenes del cliente'}
    >
        <Typography
            variant='h1'
            component={'h1'}
        >
            Historial de ordenes
        </Typography>

        <Grid
            container
        >
            <Grid
                item
                xs={12}
                sx={{ height: 650, width: '100%' }}
            >
                <DataGrid 
                    rows={ rows }
                    columns={ columns } 
                    // pageSize={10}
                    // rowsPerPageOptions={ [10] }
                 />
            </Grid>
        </Grid>
    </ShopLayout>
  )
}

export default HistoryPage