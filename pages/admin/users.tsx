import React from 'react'
import { AdminLayout } from '../../components/layouts/AdminLayout';
import { PeopleOutline } from '@mui/icons-material';
import { Box, Grid, MenuItem, Select, Typography } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import useSWR from 'swr';
import { IUser } from '../../interfaces';
import { tesloApi } from '../../api';

const UsersPage = () => {

    const { data, error } = useSWR<IUser[]>('/api/admin/users')

    if (!data && !error) return (<></>)

    const onRoleUpdated = async (userId: string, newRole: string) => {

        try {
            await tesloApi.put('/admin/users', { userId, role: newRole })
        } catch (error) {
            console.log(error)
            alert('no se pudo actualizar el rol del usuario')
        }
    }

    const columns: GridColDef[] = [
        { field: 'email', headerName: 'Correo', width: 250 },
        { field: 'name', headerName: 'Nombre completo', width: 300 },
        {
            field: 'role',
            headerName: 'Rol',
            width: 300,
            renderCell(params) {
                return (
                    <Select
                        value={params.value}
                        onChange={(e) => onRoleUpdated(params.id as string, e.target.value)}
                    >

                        <MenuItem value="admin">Administrador</MenuItem>
                        <MenuItem value="client">Cliente</MenuItem>
                    </Select>
                )
            }
        }
    ]

    const rows = data!.map(user => ({
        id: user._id,
        email: user.email,
        name: user.name,
        role: user.role
    }))

    return (
        <AdminLayout
            title='Usuarios'
            subTitle='Mantenimiento de usuarios'
            icon={<PeopleOutline />}
        >
            <Box>
                <PeopleOutline />
                <h3>Usuaios</h3>
            </Box>
            <Box>
                <Typography>
                    Mantenimiento de usuarios
                </Typography>
            </Box>

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

export default UsersPage