import React, { FC } from 'react'
import { ShopLayout } from '../../components/layouts'
import { initialData } from '../../database/products'
import { Box, Button, Chip, Grid, Typography } from '@mui/material'
import { ProductSlideShow } from '../../components/products'
import SizeSelector from '../../components/products/SizeSelector'
import { useRouter } from 'next/router'
import { useProducts } from '../../hooks'
import { NextPage, GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next'
import { IProduct } from '../../interfaces'
import { NextServer } from 'next/dist/server/next'
import { dbProducts } from '../../database'

// const product = initialData.products[0]

interface Props{
  product: IProduct
}



const ProductPage:NextPage<Props> = ({ product }) => {

  // const router = useRouter()
  // const { products: product, isLoading } = useProducts(`product/${router.query.slug}`)
  // if(isLoading){
  //   return <h1>Cargando...</h1>
  // }


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
            images={ product.images }
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
              sx={{ my: 12 }}
            >
              {/* <ItemCounter />  */}
              <SizeSelector 
                // selectedSize={ product.sizes[0] }
                sizes={ product.sizes }
              />
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
            >
              Agregar al carrito
            </Button>

            <Chip
              label="No hay disponibles"
              color="error"
              variant="outlined"
            />

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
  
  const productSlugs = await dbProducts.getAllProductsSlugs();
  
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