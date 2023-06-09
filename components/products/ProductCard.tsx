import { FC, useMemo, useState } from 'react'
import NextLink from 'next/link';
import { Box, Card, CardActionArea, CardMedia, Grid, Typography, Link } from '@mui/material'
import { IProduct } from '../../interfaces'

interface Props {
    product: IProduct;
}

export const ProductCard: FC<Props> = ({ product }) => {

    const [isHovered, setIsHovered] = useState(false)
    const [isImageLoaded, setIsImageLoaded] = useState(false)

    const productImage = useMemo(() => {
        return isHovered
            ? `/products/${product.images[1]}`
            : `/products/${product.images[0]}`
    }, [isHovered, product.images])

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
                    href='/product/slug' 
                    passHref
                    prefetch={ false }
                    legacyBehavior
                    >
                    <Link>
                        <CardActionArea>
                            <CardMedia
                                key={product._id}
                                component={'img'}
                                className='fadeIn'
                                image={productImage}
                                alt={product.title}
                                onLoad={() => setIsImageLoaded(true)}
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
