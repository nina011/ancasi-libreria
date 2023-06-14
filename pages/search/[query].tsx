import type { NextPage, GetServerSideProps } from 'next'
import { ShopLayout } from '../../components/layouts'
import { Box, Card, CardActionArea, CardMedia, Grid, Typography } from '@mui/material'
// import { initialData } from '../database/products'
import ProductList from '../../components/products/ProductList'
import { IProduct } from '../../interfaces'
// import { useProducts } from '../../hooks'
// import { FullScreenLoading } from '../../components/ui'
import { dbProducts } from '../../database'

interface Props {
  products: IProduct[];
  foundProducts: boolean;
  query: string
}
const SearchPage: NextPage<Props> = ({ products, foundProducts, query }) => {
  // const { data, error } = useSWR('/api/products', fetcher)

  // if(error) return <div>failed to load</div>
  // if(!data) return <div>loading...</div>

  // const { products, isLoading } = useProducts('/search');

  return (
    <ShopLayout
      title={'Teslo-Shop - Search'}
      pageDescription={'Encuentra los mejores productos aquí!'}
    >
      <Typography
        variant='h1'
        component='h1'
      >
        Buscar producto
      </Typography>

      {
        foundProducts
          ?
          <Typography
            variant='h2'
            sx={{ mb: 1 }}
            textTransform={'capitalize'}
          >
            Término: {query}
          </Typography>
          :
          <Box display={'flex'}>
            <Typography
              variant='h2'
              sx={{ mb: 1 }}
            >
              No encontramos ningun producto
            </Typography>
          </Box>
      }



      <ProductList
        products={products}
      />
    </ShopLayout>
  )
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { query = '' } = params as { query: string };

  if (query.length === 0) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  let products = await dbProducts.getProductsByTerm(query);
  const foundProducts = products.length > 0

  if (!foundProducts) {
    products = await dbProducts.getAllProducts()
    console.log({ products })
  }

  return {
    props: {
      products,
      foundProducts,
      query
    }
  }
}

export default SearchPage
