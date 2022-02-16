import React from 'react'
import { Link } from 'react-router-dom'

import './menu-item.styles.scss'

const MenuItem = ({ title, imageUrl, size, linkUrl }) => (
  <div 
    className={`${size} menu-item`}>
    <div 
      className='background-image' 
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    ></div>
      <div className='content'>        
        <Link to={`${linkUrl}`}>
          <h1 className='title'>{title.toUpperCase()}</h1>
          <span className='subtitle'>SHOP NOW</span>
        </Link>
      </div>
  </div>
)

export default MenuItem