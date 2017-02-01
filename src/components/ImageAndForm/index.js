import React from 'react'
import './styles.scss'

const ImageAndForm = ({src, alt, children}) => (
  <section className="image-and-form">
   <div className="image-and-form__image">
    <img src={src} alt={alt}/>
   </div>
   <div className="image-and-form__form">
    {children}
   </div>
  </section>
)

export default ImageAndForm