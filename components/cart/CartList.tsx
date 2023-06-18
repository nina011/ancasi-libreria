import { FC, useContext } from 'react';
import NextLink from 'next/link'
import { initialData } from '../../database/products'
import { Box, Button, CardActionArea, CardMedia, Grid, Link, Typography } from '@mui/material'
import { ItemCounter } from '../ui';
import { CartContext } from '../../context';

// const productsInCart = [
//     initialData.products[0],
//     initialData.products[1],
//     initialData.products[2]
// ]

interface Props{
    editable?: boolean;
}
export const CartList: FC<Props> = ({ editable = false }) => {

    const { cart } = useContext(CartContext)
  
  return (
    <>
    {
        cart.map( prod => (
            <Grid
                key={ prod.slug }
                container
                spacing={2}
                sx={{ mb: 1 }}
            >
                <Grid item xs={ 3 }>
                    {/* todo: llevar a la pagina del producto */}
                    <NextLink
                        href={`/product/${ prod.slug }`}
                        passHref
                        legacyBehavior
                    >
                        <Link>
                            <CardActionArea>
                                <CardMedia 
                                    image={`products/${ prod.image}`}
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
                        ? <ItemCounter 
                            currentValue={ prod.quantity }
                            maxValue={ 10 } 
                            updatedQuantity={() => {} }
                             />
                        : (
                            <Typography variant='h4'>
                                {prod.quantity} 
                                { prod.quantity > 1 ? 'productos' : 'producto'}
                            </Typography>
                          )
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