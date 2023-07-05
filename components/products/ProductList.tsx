import { Grid } from '@mui/material';
import { FC } from 'react';
import { IBook } from '../../interfaces';
import { ProductCard } from './ProductCard';
import { GetServerSideProps } from 'next';
import path from 'path';


interface Props{
    products: IBook[]
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