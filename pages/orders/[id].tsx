import NextLink from 'next/link'
import { Box, Button, Card, CardContent, Chip, Divider, Grid, Link, Typography } from "@mui/material"
import { ShopLayout } from "../../components/layouts"
import { CartList, OrderSummary } from "../../components/cart"
import { CreditCardOffOutlined, CreditScoreOutlined } from '@mui/icons-material'

const OrdersPage = () => {
  return (
    <ShopLayout
        title="Resumen de la orden 123456789"
        pageDescription="Resumen de la orden"
    >
        <Typography
            variant="h1"
            component={'h1'}
        >
            Orden: ABC123
        </Typography>

        {/* <Chip 
            sx={{ my: 2 }}
            label='Pendiente de pago'
            variant='outlined'
            color='error'
            icon={ <CreditCardOffOutlined />}
        /> */}

        <Chip 
            sx={{ my: 2 }}
            label='Orden ya fue pagada'
            variant='outlined'
            color='success'
            icon={ <CreditScoreOutlined />}
        />

        <Grid
            container
        >
            <Grid item xs={ 12 } sm={ 7 }>
                <CartList />
            </Grid>
            <Grid item xs={ 12 } sm={ 5 }>
                <Card
                    className='summary-card'
                >
                    <CardContent>
                        <Typography
                            variant="h2"
                        >
                            Resumen (3 productos)
                        </Typography>
                        <Divider
                            sx={{ my: 1 }}
                        />
                        
                        <Box
                            display={'flex'}
                            justifyContent={'end'}
                        >
                            <NextLink
                                href='/checkout/address'
                                passHref
                                legacyBehavior
                            >
                                <Link underline='always'>
                                    Editar
                                </Link>
                            </NextLink>
                        </Box>

                        <Typography
                            variant='subtitle1'
                        >
                            Dirección de entrega
                        </Typography>
                        <Typography
                            variant='subtitle1'
                        >
                            Javiera Burgos
                        </Typography>
                        <Typography
                            variant='subtitle1'
                        >
                            121 Algun lugar
                        </Typography>
                        <Typography
                            variant='subtitle1'
                        >
                            Puerto montt
                        </Typography>
                        <Typography
                            variant='subtitle1'
                        >
                            Canadá
                        </Typography>
                        <Typography
                            variant='subtitle1'
                        >
                            +4 568454632
                        </Typography>

                        <Divider sx={{ my: 1 }}/>

                        <Box
                            display={'flex'}
                            justifyContent={'end'}
                        >
                            <NextLink
                                href={'/checkout/address'}
                                passHref
                                legacyBehavior
                            >
                                <Link
                                    underline='always'
                                >
                                    Editar
                                </Link>
                            </NextLink>
                        </Box>

                        <OrderSummary />
                        <Box
                            sx={{ mt: 3 }}
                        >
                            <h1>Pagar</h1>

                            {/* <Button
                                color='secondary'
                                className='circular-btn'
                                fullWidth
                            >
                                Checkout
                            </Button> */}
                            
                            <Chip 
                                sx={{ my: 2 }}
                                label='Orden ya fue pagada'
                                variant='outlined'
                                color='success'
                                icon={ <CreditScoreOutlined />}
                            />

                        </Box>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </ShopLayout>
  )
}

export default OrdersPage