import { FC, useMemo, useState } from 'react'
import NextLink from 'next/link';
import { Box, Card, CardActionArea, CardMedia, Grid, Typography, Link, Chip } from '@mui/material'
import { IBook } from '../../interfaces'
import { GetServerSideProps } from 'next';
import path from 'path';


interface Props {
    product: IBook;
}

export const ProductCard: FC<Props> = ({ product }) => {

    const [isHovered, setIsHovered] = useState(false)
    const [isImageLoaded, setIsImageLoaded] = useState(false)

    // const productImage = useMemo(() => {
    //     return isHovered
    //         ? `/products/${product.images[1]}`
    //         : `/products/${product.images[0]}`
    // }, [isHovered, product.images])

    return (
        <Grid
            item
            xs={6}
            sm={4}
            key={product.slug}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Card
                key={product._id}
            >
                <NextLink 
                    href={`/product/${product.slug}`}
                    passHref
                    prefetch={ false }
                    legacyBehavior
                    >
                    <Link>                    
                        <CardActionArea>
                        {
                            product.inStock === 0 &&(
                                <Chip 
                                    color='primary'
                                    label='No hay disponibles'
                                    sx={{ 
                                        position: 'absolute',
                                        zIndex: 98,
                                        top:'10px',
                                        left: '10px'
                                    }}
                                />
                            )
                        }
                        
                            <CardMedia
                                key={product._id}
                                component={'img'}
                                className='fadeIn'
                                image={`/books/` + product.image}
                                alt={product.title}
                                onLoad={() => setIsImageLoaded(true)}
                                height={500}
                                width={400}
                            />
                        </CardActionArea>
                    </Link>
                </NextLink>
            </Card>

            <Box
                sx={{ mt: 1, display: isImageLoaded ? 'block' : 'none' }}
                className='fadeIn'
            >
                <Typography
                    fontWeight={700}
                >
                    {product.title}
                </Typography>
                <Typography
                    fontWeight={500}
                >
                    ${product.price}
                </Typography>
            </Box>
        </Grid>
    )
}

