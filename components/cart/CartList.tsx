import { FC } from 'react';
import NextLink from 'next/link'
import { initialData } from '../../database/products'
import { Box, Button, CardActionArea, CardMedia, Grid, Link, Typography } from '@mui/material'
import { ItemCounter } from '../ui';

const productsInCart = [
    initialData.products[0],
    initialData.products[1],
    initialData.products[2]
]

interface Props{
    editable?: boolean;
}
export const CartList: FC<Props> = ({ editable = false }) => {
  
  return (
    <>
    {
        productsInCart.map( prod => (
            <Grid
                key={ prod.slug }
                container
                spacing={2}
                sx={{ mb: 1 }}
            >
                <Grid item xs={ 3 }>
                    {/* todo: llevar a la pagina del producto */}
                    <NextLink
                        href={'/product/slug'}
                        passHref
                        legacyBehavior
                    >
                        <Link>
                            <CardActionArea>
                                <CardMedia 
                                    image={`products/${ prod.images[0]}`}
                                    component={'img'}
                                    sx={{ borderRadius: '5px' }}
                                />
                            </CardActionArea>
                        </Link>
                    </NextLink>
                </Grid>
                <Grid item xs={ 7 }>
                    <Box
                        display='flex'
                        flexDirection='column'
                    >
                        <Typography variant='body1'>{ prod.title}</Typography>
                        <Typography variant='body2'>Talla: <strong>M</strong></Typography>
                    
                    {
                        editable 
                        ? <ItemCounter />
                        : <Typography variant='h4'>3 items</Typography>
                    }
                    </Box>
                </Grid>
                <Grid 
                    item 
                    xs={ 2 } 
                    display='flex' 
                    alignItems='center'
                    flexDirection='column'
                    >
                    <Typography
                        variant='subtitle1'
                    >{`$${prod.price}`}
                    </Typography>
                    {
                        editable && (
                            <Button
                                variant='text'
                                color='secondary'
                            >
                                Remover
                            </Button>
                        )
                    }
                </Grid>
            </Grid>
        ))
    }
    </>
  )
}