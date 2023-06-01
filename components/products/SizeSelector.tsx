import { FC } from "react";
import { ISize } from "../../interfaces";
import { Box, Button } from "@mui/material";


interface Props {
    selectedSize?: ISize;
    sizes: ISize[];
}

const SizeSelector:FC<Props> = ({ selectedSize, sizes }) => {

return (
    <Box>
        {
            sizes.map( sz => (
                <Button
                    key={ sz }
                    size="small"
                    color={ selectedSize === sz ? 'primary' : 'info'}
                >
                   { sz }
                </Button>
            ))
        }
    </Box>
  )
}

export default SizeSelector