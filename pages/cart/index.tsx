import { Box, Button, Card, CardContent, Divider, Grid, Typography } from "@mui/material"
import { ShopLayout } from "../../components/layouts"
import { CartList, OrderSummary } from "../../components/cart"
import { useContext, useEffect } from "react"
import { CartContext } from "../../context"
import { useRouter } from "next/router"
import { AuthContext } from '../../context'

const CartPage = () => {


    const { isLoaded, numberOfItems, cart } = useContext(CartContext)
    const { checkToken } = useContext(AuthContext)

    const router = useRouter()
    
    useEffect(() => {
        if(isLoaded && cart.length === 0){
            router.replace('/cart/empty');
        }
    },[ isLoaded, cart, router ])

    if( !isLoaded || cart.length === 0) {
        return (<></>)
    }

  return (
    <ShopLayout
        title="Carrito - 3"
        pageDescription="Carrito de compras de la tienda"
    >
        <Typography
            variant="h1"
            component={'h1'}
        >
            Carrito
        </Typography>

        <Grid
            container
        >
            <Grid item xs={ 12 } sm={ 7 }>
                <CartList editable />
            </Grid>
            <Grid item xs={ 12 } sm={ 5 }>
                <Card
                    className='sumary-card'
                >
                    <CardContent>
                        <Typography
                            variant="h2"
                        >
                            Orden
                        </Typography>
                        <Divider
                            sx={{ my: 1 }}
                        />
                        <OrderSummary />
                        <Box
                            sx={{ mt: 3 }}
                        >
                            <Button
                                color='secondary'
                                className='circular-btn'
                                fullWidth
                                onClick={async() => {
                                    const validate = await checkToken()
                                    if(validate === undefined || !validate){
                                        alert('Para comprar es necesario loguearse')
                                       router.push('/auth/login')
                                    }
                                    router.push('/checkout/address')
                                }}
                            >
                                Comprar
                            </Button>

                        </Box>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </ShopLayout>
  )
}

export default CartPage

