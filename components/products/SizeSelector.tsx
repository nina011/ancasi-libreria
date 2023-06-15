import { FC } from "react";
import { ISize } from "../../interfaces";
import { Box, Button } from "@mui/material";


interface Props {
    selectedSize?: ISize;
    sizes: ISize[];

    onSelectedSize: (size: ISize) => void;
}

const SizeSelector:FC<Props> = ({ selectedSize, sizes, onSelectedSize }) => {
console.log('sizes ', sizes, 'selectedSize ', selectedSize)
return (
    <Box>
        {
            sizes?.map( sz => (
                <Button
                    key={ sz }
                    size="small"
                    color={ selectedSize === sz ? 'primary' : 'info'}
                    onClick={
                        () => onSelectedSize(sz)
                    }
                >
                   { sz }
                </Button>
            ))
        }
    </Box>
  )
}

export default SizeSelector