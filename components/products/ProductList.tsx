import { Grid } from '@mui/material';
import { FC } from 'react';
import { IProduct } from '../../interfaces';
import { ProductCard } from './ProductCard';


interface Props{
    products: IProduct[]
}

const ProductList: FC<Props> = ({ products }) => {
  return (
    <Grid
        container 
        spacing={4}
    >

        {
            products.map( prod => (
                <ProductCard 
                    key={ prod._id }
                    product={ prod }
                />
            ))
        }
        
    </Grid>
  )
}

export default ProductList