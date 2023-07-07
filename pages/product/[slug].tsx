import React, { FC, useContext, useState } from 'react'
import { useRouter } from 'next/router'
import { NextPage, GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next'
// import { initialData } from '../../database/products'
// import { NextServer } from 'next/dist/server/next'

import { CartContext } from '../../context'

import { Box, Button, Chip, Grid, Typography } from '@mui/material'
import { ItemCounter } from '../../components/ui'

import { ShopLayout } from '../../components/layouts'
import { ProductSlideShow } from '../../components/products'
// import SizeSelector from '../../components/products/SizeSelector'

// import { useProducts } from '../../hooks'
import { dbProducts } from '../../database'
import { ICartProduct, IBook } from '../../interfaces'

import styles from './slug.module.css'

// const product = initialData.products[0]

interface Props{
  product: IBook
}

const ProductPage:NextPage<Props> = ({ product }) => {

  const router = useRouter()
  const { addProductToCart } = useContext(CartContext)

  const [ tempCartProduct, setTempCartProduct ] = useState<ICartProduct>({
    _id: product._id,
    image: product.image,
    price: product.price,
    // size: undefined,
    slug: product.slug,
    title: product.title,
    gender: product.gender,
    quantity: 1
  })

  // const onSelectedSize = (size: ISize) => {
  //   setTempCartProduct(currentProduct => ({
  //     ...currentProduct,
  //     size: size
  //   }))
  // }

  const onUpdateQuantity = (newQuantity: number) => {
    setTempCartProduct(currentProduct => ({
      ...currentProduct,
      quantity: newQuantity
    }))
  }

  const onAddProduct = () => {
    // if(!tempCartProduct.size){
    //   return
    // }

    //TODO: llamar la accion del context para agregar al carrito
    addProductToCart(tempCartProduct)
    // router.push('/cart')
  }

  return (
    <ShopLayout
      title={ product.title }
      pageDescription={ product.description }
    >
      <Grid
        container
        spacing={3}
      >
        <Grid
          item
          xs={12}
          sm={7}
        >
          <ProductSlideShow 
            image={ product.image }
          />
        </Grid>

        <Grid
          item
          xs={12}
          sm={5}
        >
          <Box
            display='flex'
            flexDirection='column'
            ml={10}
          >
            <Typography
              variant='h1'
              component={'h1'}
            >
              { product.title }
            </Typography>

            <Typography
              variant='subtitle1'
              component={'h2'}
            >
              ${ product.price }
            </Typography>

            {/** Cantidad */}
            <Box
              sx={{ my: 5 }}
            >
              <ItemCounter 
                currentValue={tempCartProduct.quantity}
                updatedQuantity={onUpdateQuantity} 
                maxValue={ product.inStock > 5 ? 5 : product.inStock }              
              />

              {/* <SizeSelector 
                selectedSize={ tempCartProduct.size }
                sizes={ product.sizes }
                onSelectedSize={(size) => onSelectedSize(size)}
              /> */}
              <Typography
                variant='subtitle2'
                >
                  Cantidad
                </Typography>
            </Box>

            {/** agregar al carrito  */}
            <Button
              color='secondary'
              className='circular-btn'
              onClick={onAddProduct}
              disabled={product.inStock === 0}
              style={{
                width: '15rem',
                marginBottom: '1rem'
              }}
            >
              {
               'Agregar al carrito'
              }
            </Button>

            {
              product.inStock === 0 && (
              <Chip
              label="No hay disponibles"
              color="error"
              variant="outlined"
              style={{
                width: '15rem'
              }}
            />)
            }

            <Box
              sx={{ mt: 3 }}
            >
              <Typography
                variant='subtitle2'
              >
                Descripción
              </Typography>
              <Typography
                variant='body2'
              >
                { product.description }
              </Typography>
            </Box>
          </Box>
        </Grid>

      </Grid>
    </ShopLayout>
  )
}

// getServerSideProps queda comentado para implementar getstaticpaths                                                           //ctx
// export const getServerSideProps: GetServerSideProps = async ({ params }) => {
//   const { slug } = params as { slug: string }
//   const product = await dbProducts.getProductBySlug(slug);

//   if(!product){
//     return { 
//       redirect: {
//         destination: '/',
//         permanent: false
//       }
//     }
//   }

//   return {
//     props: {
//       product: product
//     }
//   }
// }

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  
  const productSlugs = await dbProducts.getAllBooksSlugs();
  
  return {
    paths: productSlugs.map( ({ slug }) => ({
      params: {
        slug
      }
    })),
    fallback: 'blocking'
  }
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  
  const { slug = ''} = params as { slug: string}
  const product = await dbProducts.getProductBySlug(slug)

  if( !product ){
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24
  }
}


export default ProductPage