import type { NextPage } from 'next'
import { ShopLayout } from '../../components/layouts'
import { Card, CardActionArea, CardMedia, Grid, Typography } from '@mui/material'
// import { initialData } from '../database/products'
import ProductList from '../../components/products/ProductList'
// import { IProduct } from '../../interfaces'
import { useProducts } from '../../hooks'
import { FullScreenLoading } from '../../components/ui'

const WomenPage: NextPage = () => {
  // const { data, error } = useSWR('/api/products', fetcher)

  // if(error) return <div>failed to load</div>
  // if(!data) return <div>loading...</div>

  const { products, isLoading } = useProducts('/products?gender=women');

  return (
    <ShopLayout 
        title={'Teslo-Shop - Women'}
        pageDescription={'Encuentra los mejores productos de Teslo para ellas'}
    >
      <Typography
          variant='h1'
          component='h1'
      >
        Mujeres
      </Typography>

      <Typography
          variant='h2'
          sx={{ mb: 1 }}
      >
        Productos para ellas
      </Typography>


      {/* <Grid container spacing={4}>
        {
          initialData.products.map( product => (
            <Grid item xs={6} sm={4} key={product.slug}>
              <Card>
                <CardActionArea>
                  <CardMedia 
                    component={'img'}
                    image={`products/${ product.images[0]}`}
                    alt={ product.title }
                  />
                </CardActionArea>
              </Card>
            </Grid>
          ))
        }
      </Grid> */}
      {
        isLoading 
          ? <FullScreenLoading />
          : <ProductList products={ products } />
      }
    </ShopLayout>
  )
}

export default WomenPage
