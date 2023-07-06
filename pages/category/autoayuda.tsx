import type { NextPage } from 'next'
import { ShopLayout } from '../../components/layouts'
import { Card, CardActionArea, CardMedia, Grid, Typography } from '@mui/material'
// import { initialData } from '../database/products'
import ProductList from '../../components/products/ProductList'
// import { IProduct } from '../../interfaces'
import { useProducts } from '../../hooks'
import { FullScreenLoading } from '../../components/ui'

const MenPage: NextPage = () => {
  // const { data, error } = useSWR('/api/products', fetcher)

  // if(error) return <div>failed to load</div>
  // if(!data) return <div>loading...</div>

  const { products, isLoading } = useProducts('/products?gender=autoayuda');

  return (
    <ShopLayout 
        title={'Ancasi Librería - Autoayuda'}
        pageDescription={'Encuentra los mejores libros de autoayuda'}
    >
      <Typography
          variant='h1'
          component='h1'
      >
        Autoayuda
      </Typography>

      <Typography
          variant='h2'
          sx={{ mb: 1 }}
      >
        Libros para tu salud mental
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

export default MenPage
