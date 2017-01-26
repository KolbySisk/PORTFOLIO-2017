import React from 'react'
import './styles.scss'

const ImageAndBox = ({src, children}) => (
  <section className="image-and-box">
   <div className="image-and-box__image">
    <img src={src}/>
   </div>
   <div className="image-and-box__message">
    {children}
   </div>
  </section>
)

export default ImageAndBox