import type { NextPage } from 'next'
import { ShopLayout } from '../../components/layouts'
import { Card, CardActionArea, CardMedia, Grid, Typography } from '@mui/material'
// import { initialData } from '../database/products'
import ProductList from '../../components/products/ProductList'
import { IBook } from '../../interfaces'
import { useProducts } from '../../hooks'
import { FullScreenLoading } from '../../components/ui'

const KidsPage: NextPage = () => {
  // const { data, error } = useSWR('/api/products', fetcher)

  // if(error) return <div>failed to load</div>
  // if(!data) return <div>loading...</div>

  const { products, isLoading } = useProducts('/products?gender=kid');

  return (
    <ShopLayout 
        title={'Teslo-Shop - Kids'}
        pageDescription={'Encuentra los mejores productos de Teslo para niños'}
    >
      <Typography
          variant='h1'
          component='h1'
      >
        Niños
      </Typography>

      <Typography
          variant='h2'
          sx={{ mb: 1 }}
      >
        Productos para niños
      </Typography>
      
      <Grid container spacing={4}>
        {
          products.map( product => (
            <Grid item xs={6} sm={4} key={product.slug}>
              <Card>
                <CardActionArea>
                  <CardMedia 
                    component={'img'}
                    image={`products/${ product.image}`}
                    alt={ product.title }
                  />
                </CardActionArea>
              </Card>
            </Grid>
          ))
        }
      </Grid>
      {
        isLoading 
          ? <FullScreenLoading />
          : <ProductList products={ products } />
      }
    </ShopLayout>
  )
}

export default KidsPage
