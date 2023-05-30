import { Box, Typography } from "@mui/material";
import { ShopLayout } from "../components/layouts";

const Custom404 = () => {
  return (
    <ShopLayout
        title="Pagina no encontrada"
        pageDescription="No hay nada que mostrar"
        >
        <Box 
            display='flex'
            justifyContent='center'
            alignItems='center'
            height='calc(100vh - 200px'    
        >
            <Typography
                variant='h1'
                component='h1'
                fontSize={80}
                fontWeight={150}
            >
                400 |
            </Typography>

            <Typography
                marginLeft={2}
            >
                No encontramos ninguna página aquí
            </Typography>

        </Box>
    </ShopLayout>
  )
}


export default Custom404;