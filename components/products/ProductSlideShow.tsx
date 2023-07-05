import { FC } from "react"
import { Slide } from 'react-slideshow-image'

import styles from './ProductSlideshow.module.css'
import 'react-slideshow-image/dist/styles.css'

interface Props {
    image: string
}

export const ProductSlideShow: FC<Props> = ({ image }) => {
  return (
     <Slide
        easing="ease"
        duration={ 7000 }
        indicators
     >
                    <div 
                      className={ styles['each-slide'] }
                      key={ image }
                    >
                        <div
                            style={{
                                backgroundImage: `url(${ `/books/${ image }` })`,
                                backgroundSize: 'cover'
                            }}                            
                        >
                        </div>
                    </div>    
     </Slide>
  )
}
