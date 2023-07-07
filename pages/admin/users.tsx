import React, { useEffect, useState } from 'react'
import useSWR from 'swr';

import { AdminLayout } from '../../components/layouts/AdminLayout';
import { PeopleOutline } from '@mui/icons-material';
import { Box, Grid, MenuItem, Select, Typography } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

import { tesloApi } from '../../api';
import { IUser } from '../../interfaces';

const UsersPage = () => {

    const { data, error } = useSWR<IUser[]>('/api/admin/users')
    const [ users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        if(data){
            setUsers(data)
        }
    },[data])

    if (!data && !error) return (<></>);

    const onRoleUpdated = async (userId: string, newRole: string) => {
        
        const previousUsers = users.map( user => ({ ...user }))
        const updatedUsers = users.map( user => ({
            ...user,
            role: userId === user._id ? newRole : user.role
        }))

        setUsers(updatedUsers)

        try {
            await tesloApi.put('/admin/users', { userId, role: newRole })
        } catch (error) {
            setUsers(previousUsers)
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

    const rows = users.map(user => ({
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
                <h3>Usuarios</h3>
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