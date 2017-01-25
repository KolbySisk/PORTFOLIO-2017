import React from 'react'
import StickyIcky from '../../containers/StickyIcky'
import './styles.scss'

const StickyTitle = ({title}) => (
  <div className="sticky">
    <StickyIcky>
      <div className="sticky__title">
        <h2>{title}</h2>
      </div>
    </StickyIcky>
  </div>
)

export default StickyTitle